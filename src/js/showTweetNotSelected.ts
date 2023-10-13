export const showTweetNotSelected = () => {
  const mainContainer = document.querySelector(
    ".main__container"
  ) as HTMLElement;
  mainContainer.innerHTML = "";

  const notFound = document.createElement("div") as HTMLDivElement;
  notFound.classList.add("not__found");

  const imageNotFound = document.createElement("img") as HTMLImageElement;
  imageNotFound.src = "./public/no-tweet.png";

  const textNotFound = document.createElement("h1") as HTMLHeadingElement;
  textNotFound.innerText = "Nenhum tweet selecionado.";

  notFound.appendChild(textNotFound);
  notFound.appendChild(imageNotFound);

  mainContainer.appendChild(notFound);
};