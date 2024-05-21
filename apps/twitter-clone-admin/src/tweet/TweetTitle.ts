import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "text";

export const TweetTitle = (record: TTweet): string => {
  return record.text?.toString() || String(record.id);
};
