import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

import { IArticle, IEntry } from './entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private entriesUrl = 'api/entries/entries.json';
  private articlesUrl = 'api/entries/articles.json';

  constructor(private http: HttpClient) {}

  getEntries(): Observable<IEntry[]> {
    return this.http.get<IEntry[]>(this.entriesUrl).pipe(
      tap(),
      catchError(this.handleError)
    );
  }

  getArticle(articleName: string): Observable<IArticle | undefined> {
    return this.http.get<IArticle[]>(this.articlesUrl).pipe(
      mergeMap(articles => {
        return of(articles.find(a => a.article === articleName));
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
