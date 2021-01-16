export interface IEntryBase {
  author: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  brief: string;
  date: string; // YYYY/MM/DD
  keywords: string;
  description: string;
}

export interface IArticleEntry extends IEntryBase {
  article: string;
  htmlPath: string;
}

export interface ILinkEntry extends IEntryBase {
  linkText: string;
  linkURL: string;
}

export type Entry = IArticleEntry | ILinkEntry;
export function entryIsArticle(arg: Entry): arg is IArticleEntry {
  return (arg as IArticleEntry).article !== undefined;
}

export interface IArticle extends IArticleEntry {
  html: string;
}
