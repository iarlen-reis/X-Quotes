import { CardComponent } from "./js/cardComponent";
import { loadFromStorage } from "../../utils/readStorage";

const ul = document.querySelector(".list__card") as HTMLUListElement;

const tweetCardManager = new CardComponent(ul);

loadFromStorage((tweet) => {
  tweetCardManager.renderFavoriteTweets(tweet);
});
