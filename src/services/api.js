import axios from "axios";

const url = new URL("https://6464cb4c127ad0b8f8a83cff.mockapi.io/tweets");
url.searchParams.append("completed", false);
url.searchParams.append("page", 1);
url.searchParams.append("limit", 3);

export async function fetchAllTweets(countCards) {
  url.searchParams.set("limit", countCards);
  const res = await axios.get(url.toString());
  return res.data;
}

export async function fetchTweetUpdate(cardId, changeTweet) {
  await axios.put(`${url}/${cardId}`, { ...changeTweet });
}
