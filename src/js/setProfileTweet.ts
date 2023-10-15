import { formateText } from "../utils/formateText";
import { MessageProps } from "../types/MessageProfileTypes";

export const setProfileTweet = (message: MessageProps) => {
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
  const tweetLikes = document.querySelector("#tweet__likes") as HTMLSpanElement;
  const tweetSaves = document.querySelector(
    "#tweet__bookmarks"
  ) as HTMLSpanElement;

  const favorites = document.querySelector(
    "#button__favorite"
  ) as HTMLButtonElement;

  const icon = favorites.querySelector("i") as HTMLElement;

  const quoteExists =
    message.quotes.findIndex(
      (quote) => quote.tweetLink === message.tweet.tweetLink
    ) !== -1;

  if (quoteExists) {
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  }

  tweetImage.src = message.tweet.image;
  tweetName.innerText = message.tweet.name;
  tweetUsername.innerText = message.tweet.username;
  tweetText.innerText = formateText(message.tweet.tweetContent);
  tweetLikes.innerText = message.tweet.stats.likes
    ? message.tweet.stats.likes
    : "0";
  tweetSaves.innerText = message.tweet.stats.saves
    ? message.tweet.stats.saves
    : "0";
  tweetRetweets.innerText = message.tweet.stats.retweets
    ? message.tweet.stats.retweets
    : "0";
  tweetComments.innerText = message.tweet.stats.comments
    ? message.tweet.stats.comments
    : "0";
};
