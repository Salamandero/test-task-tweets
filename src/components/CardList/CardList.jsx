import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import CardItem from "./CardItem/CardItem";
import { List } from "./CardList.styled";

const CardList = ({ cards }) => {
  const location = useLocation();

  return (
    <List>
      {cards.map(({ id, user, tweets, followers, avatar }) => (
        <CardItem
          key={id}
          id={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        >
          <Link to={`/tweets`} state={{ from: location }}></Link>
        </CardItem>
      ))}
    </List>
  );
};

export default CardList;

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
