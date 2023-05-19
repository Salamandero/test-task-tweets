// import { Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import { fetchAllTweets } from "../../services/api";
// import noImg from "../../assets/noImg.png";
import CardList from "../../components/CardList/CardList";
import { Title } from "./Tweets.styled";

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  //   const [error, setError] = useState(null);
  //   const backLinkHref = location.state?.from ?? "/tweets";
  //   const backLink = location.state?.from ?? "/";

  useEffect(() => {
    setIsLoading(true);
    fetchAllTweets()
      .then(setCards)
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  //   console.log(cards);
  return (
    <>
      {isLoading && <Loader />}
      {cards.length > 0 && (
        <section>
          <Title>Choice to connect</Title>
          <CardList cards={cards} />
        </section>
      )}
    </>
  );
};
export default Tweets;
