import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  comment?: CommentWhereUniqueInput;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
