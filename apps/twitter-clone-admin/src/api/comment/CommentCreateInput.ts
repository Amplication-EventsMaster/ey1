import { UserCreateNestedManyWithoutCommentsInput } from "./UserCreateNestedManyWithoutCommentsInput";

export type CommentCreateInput = {
  users?: UserCreateNestedManyWithoutCommentsInput;
};
