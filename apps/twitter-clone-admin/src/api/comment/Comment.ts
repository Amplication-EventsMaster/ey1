import { User } from "../user/User";

export type Comment = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
