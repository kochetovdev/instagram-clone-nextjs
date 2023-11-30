import { LikeData } from ".";

export interface LikeDocument {
  id: string;
  data: () => LikeData;
}