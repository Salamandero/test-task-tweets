import { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import { fetchAllTweets } from "../../services/api";
import CardList from "../../components/CardList/CardList";
import { Title, BackLink, LoadMoreBtn } from "./Tweets.styled";

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const backLinkHref = location.state?.from ?? "/";

  const [showLoadMore, setShowLoadMore] = useState(true);
  const [countCards, setCountCards] = useState(Number(3));

  useEffect(() => {
    setIsLoading(true);
    fetchAllTweets(countCards)
      .then(setCards)
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));

    Number(cards.length) === Number(countCards)
      ? setShowLoadMore(true)
      : setShowLoadMore(false);
  }, [cards.length, countCards]);

  const handlePagination = () => {
    setCountCards((prevState) => prevState + 3);
  };

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Loader />}
      {cards.length > 0 && (
        <section>
          <Title>Choice to connect</Title>
          <CardList cards={cards} />
          {showLoadMore && (
            <LoadMoreBtn onClick={handlePagination}>LoadMore</LoadMoreBtn>
          )}
        </section>
      )}
    </>
  );
};
export default Tweets;
