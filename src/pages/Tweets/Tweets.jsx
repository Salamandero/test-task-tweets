import { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import { fetchAllTweets } from "../../services/api";
import CardList from "../../components/CardList/CardList";
import { Title, BackLink } from "./Tweets.styled";

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const backLinkHref = location.state?.from ?? "/";
  // const [pageNumber, setpageNumber] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAllTweets()
      .then(setCards)
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
    cards.length > 3 ? setShowLoadMore(true) : setShowLoadMore(false);
  }, []);

  console.log("====================================");
  console.log(cards.length);
  console.log("====================================");
  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Loader />}
      {cards.length > 0 && (
        <section>
          <Title>Choice to connect</Title>
          <CardList cards={cards} />
          {showLoadMore && <button>LoadMore</button>}
        </section>
      )}
    </>
  );
};
export default Tweets;
