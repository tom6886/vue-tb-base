export interface IR<T> {
  code: number;
  msg: string;
  data: T;
}

export interface IPage<T> {
  current: number;
  pages: number;
  total: number;
  size: number;
  records: T[];
}

export interface IResPage {
  current: string;
  pages: string;
  total: string;
  size: string;
  records: object[];
}
