import { QuotesProps } from "../../../types/QuotesTypes";

export class CardComponent {
  ul: HTMLUListElement;
  constructor(ul: HTMLUListElement) {
    this.ul = ul;
  }

  createTagAndAddClass(tag: string, className: string) {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
  }

  createCardFavorite(tweet: QuotesProps) {
    const liElement = document.createElement("li");
    const article = this.createTagAndAddClass("article", "tweet__card");

    const divTweetInfos = this.createTagAndAddClass("div", "tweet__infos");

    const imgTweet = this.createTagAndAddClass("img", "tweet__image");
    imgTweet.setAttribute("src", tweet.profileImage);

    const divTweetCreator = this.createTagAndAddClass("div", "tweet__creator");

    const h2Name = document.createElement("h2");
    h2Name.innerText = tweet.name;

    const spanUsername = document.createElement("span");
    spanUsername.innerText = tweet.username;

    const divTweetContent = this.createTagAndAddClass("div", "tweet__content");

    const pTweet = document.createElement("p");
    pTweet.innerText = tweet.tweetContent;

    const buttonTweet = this.createTagAndAddClass("button", "button__tweet");
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

    this.ul.appendChild(liElement);
  }

  renderFavoriteTweets(data: QuotesProps[]) {
    data.forEach((tweet) => {
      this.createCardFavorite(tweet);
    });
  }
}