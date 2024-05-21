import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
