import { formateText } from "../utils/formateText";

interface MessageProfileProps {
  type: string;
  name: string;
  username: string;
  image: string;
  tweet: string;
  stats: {
    comments: string;
    retweets: string;
    likes: string;
    saves: string;
  };
}

export const setProfileTweet = (message: MessageProfileProps) => {
  const tweetName = document.querySelector("#tweet__name") as HTMLSpanElement;
  const tweetUsername = document.querySelector(
    "#tweet__username"
  ) as HTMLSpanElement;
  const tweetImage = document.querySelector(
    "#tweet__image"
  ) as HTMLImageElement;
  const tweetText = document.querySelector(
    "#tweet__text"
  ) as HTMLParagraphElement;
  const tweetComments = document.querySelector(
    "#tweet__comments"
  ) as HTMLSpanElement;
  const tweetRetweets = document.querySelector(
    "#tweet__retweets"
  ) as HTMLSpanElement;
  const tweetLikes = document.querySelector(
    "#tweet__likes"
  ) as HTMLSpanElement;
  const tweetSaves = document.querySelector(
    "#tweet__bookmarks"
  ) as HTMLSpanElement;

  tweetName.innerText = message.name;
  tweetUsername.innerText = message.username;
  tweetImage.src = message.image;
  tweetText.innerText = formateText(message.tweet);
  tweetComments.innerText = message.stats.comments ? message.stats.comments : "0";
  tweetRetweets.innerText = message.stats.retweets ? message.stats.retweets : "0";
  tweetLikes.innerText = message.stats.likes ? message.stats.likes : "0";
  tweetSaves.innerText = message.stats.saves ? message.stats.saves : "0";
};
