export interface R<T> {
  code: number;
  msg: string;
  data: T;
}

export interface Page<T> {
  current: number;
  pages: number;
  total: number;
  size: number;
  records: T[];
}

export interface ResPage {
  current: string;
  pages: string;
  total: string;
  size: string;
  records: object[];
}
