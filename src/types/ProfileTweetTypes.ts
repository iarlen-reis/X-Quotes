export interface GetProfileProps {
  tweet: {
    name: string
    username: string
    image: string
    tweetContent: string
    tweetStats: {
      comments: string
      retweets: string
      likes: string
      saves: string
    }
  }
}