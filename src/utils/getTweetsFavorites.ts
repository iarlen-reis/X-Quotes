interface TweetFavoritesProps {
  name: string;
  username: string;
  profileImage: string;
  tweetLink: string;
  tweetContent: string;
}

export const getTweetsFavorites = () => {
  const twitterLocalStorageData: TweetFavoritesProps[] =
    JSON.parse(localStorage.getItem("@quotes/saved") as string) || [];

  chrome.runtime.sendMessage({
    type: "tweetsFavorites",
    data: twitterLocalStorageData,
  });
};
