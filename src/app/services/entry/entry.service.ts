import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

import { IArticle, IEntry } from './entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private entriesUrl = 'api/entries/entries.json';
  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text' as 'json'
  };

  constructor(private http: HttpClient) {}

  getEntries(): Observable<IEntry[]> {
    return this.http.get<IEntry[]>(this.entriesUrl).pipe(
      tap(),
      catchError(this.handleError)
    );
  }

  getArticle(articleName: string): Observable<IArticle | undefined> {
    return this.http.get<IEntry[]>(this.entriesUrl).pipe(
      mergeMap(entries => {
        const entry = entries.find(a => a.article === articleName);
        if (!entry) {
          return throwError('Article not found');
        }
        return this.http.get<string>(`api/entries/${entry.htmlPath}`, this.httpOptions).pipe(
          mergeMap(articleHtml => {
            const article: IArticle = {
              ...entry,
              html: articleHtml
            };
            return of(article);
          }),
          catchError(this.handleError)
        );
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
