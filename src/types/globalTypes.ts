export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  published: string;
  reviews?: string[];
}
export interface bookToUpdate {
  _id: string;
  title?: string;
  author?: string;
  genre?: string;
  published?: string;
}
