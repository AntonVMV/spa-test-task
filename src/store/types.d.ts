interface Title {
  title: string;
}

interface Article extends Title {
  id: number;
  tag: string;
  author: string;
  createdAt: number;
  image: string;
  readTime: number;
}

interface Seo {
  title: string;
  description: string;
  keywords: string;
}

export interface IAbout extends Title {
  seo: Seo;
  content: string;
  image: string;
}

export interface IArticle extends Title, Article {
  description: string;
}

interface Author {
  id: number;
  name: string;
  nick: string;
  about: string;
}

interface Tag {
  id: number;
  name: string;
}

export interface IFullArticle extends Title {
  id: number;
  seo: Seo & {
    id: number;
    keywords: string;
  };
  tag: Tag;
  author: Author;
  createdAt: number;
  image: string;
  readTime: number;
  description: string;
  nextId: number;
  prevId: any;
}
