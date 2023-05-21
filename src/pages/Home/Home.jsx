import { Title, LinktoTweets } from "./Home.styled";

const Home = () => {
  return (
    <section>
      <Title>Tweets - expands the space of communication</Title>
      <LinktoTweets to={`/tweets`} state={{ from: location }}>
        Start
      </LinktoTweets>
    </section>
  );
};

export default Home;
