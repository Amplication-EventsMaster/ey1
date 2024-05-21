import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";

export type UserCreateInput = {
  comment?: CommentWhereUniqueInput | null;
  email?: string | null;
  fullName?: string | null;
  password?: string | null;
  username?: string | null;
};
