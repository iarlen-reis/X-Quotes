import { QuotesProps } from "../types/QuotesTypes";

export const setTweetFavorite = async () => {
  const timeLine = document.querySelector(
    ".css-1dbjc4n.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l"
  ) as HTMLSpanElement;
  const profileTabidex = timeLine.querySelector(
    `[tabindex="${-1}"]`
  ) as HTMLElement;
  const profile = profileTabidex.querySelector(
    '[data-testid="User-Name"]'
  ) as HTMLElement;

  const allInfos = profile.querySelectorAll(
    "span"
  ) as NodeListOf<HTMLSpanElement>;

  const profileName = allInfos[0].innerText;
  const profileUsername = allInfos[3].innerText;

  const profileImage = profileTabidex.querySelector(
    "img.css-9pa8cd"
  ) as HTMLImageElement;

  const tweetContent = profileTabidex.querySelector(
    ".css-901oao.r-1nao33i.r-37j5jr.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-bnwqim.r-qvutc0"
  ) as HTMLSpanElement;

  const tweet = {
    name: profileName,
    username: profileUsername,
    profileImage: profileImage.src,
    tweetContent: tweetContent.innerText,
    tweetLink: `https://twitter.com${window.location.pathname}`,
  };

  function saveToStorage(dataArray: QuotesProps[]) {
    chrome.storage.local.set({ myData: dataArray });
  }

  function loadFromStorage(callback: (data: QuotesProps[]) => void) {
    chrome.storage.local.get({ myData: [] }, (result) => {
      const dataArray: QuotesProps[] = result.myData;
      callback(dataArray);
    });
  }

  function addDataToObject(newData: QuotesProps) {
    loadFromStorage((dataArray) => {
      const existingIndex = dataArray.findIndex(
        (data) => data.tweetLink === newData.tweetLink
      );

      if (existingIndex !== -1) {
        dataArray.splice(existingIndex, 1);
        return saveToStorage(dataArray);
      }

      dataArray.push(newData);

      saveToStorage(dataArray);
    });
  }

  addDataToObject(tweet);
};
