export interface IEntry {
  article: string;
  author: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  brief: string;
  date: string; // YYYY/MM/DD
  keywords: string;
  description: string;
  htmlPath: string;
}

export interface IArticle extends IEntry {
  html: string;
}
