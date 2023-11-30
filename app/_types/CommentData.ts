import firebase from "firebase/compat/app";

export interface CommentData {
  comment: string;
  username: string;
  userImage: string;
  timestamp: firebase.firestore.Timestamp;
}
