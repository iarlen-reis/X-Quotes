import { formateText } from "../utils/formateText";

interface MessageProfileProps {
  type: string;
  name: string;
  username: string;
  image: string;
  tweet: string;
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

  tweetName.innerText = message.name;
  tweetUsername.innerText = message.username;
  tweetImage.src = message.image;
  tweetText.innerText = formateText(message.tweet);
};