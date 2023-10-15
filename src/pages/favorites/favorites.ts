interface FavoriteTweetProps {
  type: string;
  data: {
    name: string;
    username: string;
    profileImage: string;
    tweetLink: string;
    tweetContent: string;
  }[];
}

interface CreateCardFavoriteProps {
  name: string;
  username: string;
  profileImage: string;
  tweetLink: string;
  tweetContent: string;
}

const createCardFavorite = (tweet: CreateCardFavoriteProps) => {
  const ul = document.querySelector(".list__card") as HTMLUListElement;

  const liElement = document.createElement("li");

  const article = document.createElement("article");
  article.classList.add("tweet__card");

  const divTweetInfos = document.createElement("div");
  divTweetInfos.classList.add("tweet__infos");

  const imgTweet = document.createElement("img");
  imgTweet.classList.add("tweet__image");
  imgTweet.src = tweet.profileImage;

  const divTweetCreator = document.createElement("div");
  divTweetCreator.classList.add("tweet__creator");

  const h2Name = document.createElement("h2");
  h2Name.innerText = tweet.name;

  const spanUsername = document.createElement("span");
  spanUsername.innerText = tweet.username;

  const divTweetContent = document.createElement("div");
  divTweetContent.classList.add("tweet__content");

  const pTweet = document.createElement("p");
  pTweet.innerText = tweet.tweetContent;

  const buttonTweet = document.createElement("button");
  buttonTweet.classList.add("button__tweet");
  buttonTweet.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
  buttonTweet.addEventListener("click", () => {
    window.open(tweet.tweetLink);
  });

  divTweetInfos.appendChild(imgTweet);
  divTweetInfos.appendChild(divTweetCreator);
  divTweetCreator.appendChild(h2Name);
  divTweetCreator.appendChild(spanUsername);

  article.appendChild(divTweetInfos);

  divTweetContent.appendChild(pTweet);
  divTweetContent.appendChild(buttonTweet);

  article.appendChild(divTweetContent);

  liElement.appendChild(article);

  ul.appendChild(liElement);
};

document.addEventListener("DOMContentLoaded", async () => {
  chrome.runtime.sendMessage({ type: "getTweetsFavorites" });

  chrome.runtime.onMessage.addListener((message: FavoriteTweetProps) => {
    if (message.type === "tweetsFavorites") {
      message.data.forEach((tweet: CreateCardFavoriteProps) => {
        createCardFavorite(tweet);
      });
    }
  });
});
