import { PostData } from ".";

export interface PostDocument {
  id: string;
  data: () => PostData;
}