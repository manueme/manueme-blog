export interface IEntry {
  article: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  brief: string;
}

export interface IParagraph {
  p: string;
}

export interface IImage {
  imgSrc: string;
  imgAlt: string;
  imgFooter: string;
}

export type IArticle = IEntry & {
  fullArticle: Array<IParagraph | IImage>;
};
