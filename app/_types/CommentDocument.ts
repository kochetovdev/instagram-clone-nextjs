import { CommentData } from ".";

export interface CommentDocument {
  id: string;
  data: () => CommentData;
}