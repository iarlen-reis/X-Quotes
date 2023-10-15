import { QuotesProps } from "./QuotesTypes";

interface TweetProps {
    type: string;
    name: string;
    username: string;
    image: string;
    tweet: string;
    tweetLink: string;
    tweetContent: string;
    stats: {
      comments: string;
      retweets: string;
      likes: string;
      saves: string;
    };
}

export interface MessageProfileProps {
  tweet: TweetProps;
  quotes: QuotesProps[];
}

export interface MessageProps extends MessageProfileProps {
  type: string
}


