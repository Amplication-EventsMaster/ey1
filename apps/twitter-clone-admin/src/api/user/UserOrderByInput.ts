import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
