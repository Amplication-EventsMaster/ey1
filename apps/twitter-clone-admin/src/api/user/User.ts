import { Comment } from "../comment/Comment";

export type User = {
  comment?: Comment | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};
