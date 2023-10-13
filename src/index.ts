import { getQuotes } from "./js/getQuotes";
import { getProfile } from "./js/profile";
import { setProfileTweet } from "./js/setProfileTweet";
import { showTweetNotSelected } from "./js/showTweetNotSelected";

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

const linkQuotes = document.querySelector(
  ".button__quotes"
) as HTMLAnchorElement;
const linkFavorites = document.querySelector(
  ".button__favorite"
) as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    func: getProfile,
  });
});

chrome.runtime.onMessage.addListener((message: MessageProfileProps) => {
  if (message.type === "profileData") {
    setProfileTweet(message);
  }

  if (message.type === "showNotSelected") {
    showTweetNotSelected();
  }
});

linkQuotes.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    func: getQuotes,
  });
});

linkFavorites.addEventListener("click", async () => {
  chrome.windows.create({
    url: "./src/pages/favorites/favorites.html",
    type: "popup",
    width: 400,
    height: 300,
    left: 100,
    top: 100,
  });
});
