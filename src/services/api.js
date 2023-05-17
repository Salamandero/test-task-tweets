import axios from "axios";

axios.defaults.baseURL = "https://6464cb4c127ad0b8f8a83cff.mockapi.io/tweets";

export async function fetchAllTweets() {
  const res = await axios.get(`/`, {});
  return res.data;
}

export async function fetchTweetUpdate(cardId) {
  const res = await axios.post(`/${cardId}`);
  return res.data;
}
