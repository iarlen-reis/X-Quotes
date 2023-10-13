export const getProfile = () => {
  const pathname = window.location.pathname;
  if (pathname.includes("status") && !pathname.includes("/quotes")) {
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
      "img"
    ) as HTMLImageElement;

    const tweetContent = profileTabidex.querySelector(
      ".css-901oao.r-1nao33i.r-37j5jr.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-bnwqim.r-qvutc0"
    ) as HTMLSpanElement;

    const tweetStats = profileTabidex.querySelector(
      '[role="group"]'
    )?.querySelectorAll('[role="button"]') as NodeListOf<HTMLButtonElement>;

    const tweetComments = tweetStats[0];
    const tweetRetweets = tweetStats[1];
    const tweetLikes = tweetStats[2];
    const tweetSaves = tweetStats[3];

    const statsTweets = {
      comments: tweetComments.innerText,
      retweets: tweetRetweets.innerText,
      likes: tweetLikes.innerText,
      saves: tweetSaves.innerText,
    };

    chrome.runtime.sendMessage({
      type: "profileData",
      name: profileName,
      username: profileUsername,
      image: profileImage.src,
      tweet: tweetContent.innerText,
      stats: statsTweets,
    });

    return;
  }
  chrome.runtime.sendMessage({
    type: "showNotSelected",
  });
};