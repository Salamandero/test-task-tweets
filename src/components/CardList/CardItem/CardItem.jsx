import Button from "../../Button/Button";

import { WrapperCardBg, WrapperCard } from "./CardItem.styled.js";
// eslint-disable-next-line react/prop-types
const CardItem = ({ user, tweets, followers, avatar }) => {
  console.log(user, tweets, followers, avatar);
  return (
    <WrapperCardBg>
      <WrapperCard>
        {/* <img src={avatar} alt={user} loading="lazy" /> */}
        {/* make with uppercase */}
        {/* <p>{tweets} tweets</p>
      <p>{followers} followers</p> */}
        <Button>Followers</Button>
      </WrapperCard>
    </WrapperCardBg>
  );
};

export default CardItem;
