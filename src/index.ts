import { getProfile } from "./js/profile";
import { getQuotes } from "./js/getQuotes";
import { setProfileTweet } from "./js/setProfileTweet";
import { setTweetFavorite } from "./js/setTweetFavorite";
import { MessageProps } from "./types/MessageProfileTypes";
import { getTweetsFavorites } from "./utils/getTweetsFavorites";
import { showTweetNotSelected } from "./js/showTweetNotSelected";

const linkQuotes = document.querySelector(
  ".button__quotes"
) as HTMLAnchorElement;
const linkFavorites = document.querySelector(
  ".button__favorite"
) as HTMLButtonElement;
const favoriteButton = document.querySelector(
  "#button__favorite"
) as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    func: getProfile,
  });
});

chrome.runtime.onMessage.addListener(async (message: MessageProps) => {
  if (message.type === "profileData") {
    setProfileTweet(message);
  }

  if (message.type === "showNotSelected") {
    showTweetNotSelected();
  }

  if (message.type === "getTweetsFavorites") {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: getTweetsFavorites,
    });
  }
});

linkQuotes.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    func: getQuotes,
  });
});

favoriteButton.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const icon = favoriteButton.querySelector("i") as HTMLElement;

  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    func: setTweetFavorite,
  });
});

linkFavorites.addEventListener("click", async () => {
  chrome.windows.create({
    url: "./src/pages/favorites/favorites.html",
    type: "popup",
    width: 400,
    height: 500,
    left: 100,
    top: 100,
    setSelfAsOpener: true,
  });
});
