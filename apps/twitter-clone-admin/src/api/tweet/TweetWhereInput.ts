import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
};
