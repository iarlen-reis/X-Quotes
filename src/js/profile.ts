export const getProfile = async () => {
  const pathname = window.location.pathname;

  if (pathname.includes("status") && !pathname.includes("/quotes")) {
    const timeLine = document.querySelector(
      ".css-1dbjc4n.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l"
    ) as HTMLSpanElement;

    const tweetTabidex = timeLine.querySelector(
      `[tabindex="${-1}"]`
    ) as HTMLElement;

    const profile = tweetTabidex.querySelector(
      '[data-testid="User-Name"]'
    ) as HTMLElement;

    const allInfos = profile.querySelectorAll(
      "span"
    ) as NodeListOf<HTMLSpanElement>;

    const profileImage = tweetTabidex.querySelector(
      "img.css-9pa8cd"
    ) as HTMLImageElement;

    const tweetContent = tweetTabidex.querySelector(
      ".css-901oao.r-1nao33i.r-37j5jr.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-bnwqim.r-qvutc0"
    ) as HTMLSpanElement;

    const tweetStats = tweetTabidex
      .querySelector('[role="group"]')
      ?.querySelectorAll('[role="button"]') as NodeListOf<HTMLButtonElement>;

    const statsTweets = {
      likes: tweetStats[2].innerText,
      saves: tweetStats[3].innerText,
      retweets: tweetStats[1].innerText,
      comments: tweetStats[0].innerText,
    };

    const tweet = {
      stats: statsTweets,
      image: profileImage.src,
      name: allInfos[0].innerText,
      username: allInfos[3].innerText,
      tweetContent: tweetContent.innerText,
      tweetLink: `https://twitter.com${window.location.pathname}`,
    };

    chrome.runtime.sendMessage({
      tweet,
      type: "profileData",
    });

    return;
  }

  chrome.runtime.sendMessage({
    type: "showNotSelected",
  });
};
