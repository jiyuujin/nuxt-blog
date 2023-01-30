export type Category =
  | "stripe"
  | "buy-me-a-coffee"
  | "twitter"
  | "note"
  | "hatena"
  | "custom";

export interface Link {
  title: string;
  placeholder: string;
  link: string;
}

export interface LinkCategory {
  title: string;
  placeholder: string;
  link: string;
  category: Category;
}
