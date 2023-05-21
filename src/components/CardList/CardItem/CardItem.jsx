import { useState } from "react";

import { fetchTweetUpdate } from "../../../services/api";
import Loader from "../../Loader/Loader";
import noImg from "../../../assets/noImg.png";

import {
  WrapperCardBg,
  WrapperCard,
  ImgTweet,
  TextTweet,
  TextFollower,
  BtnFollow,
  BtnFollowing,
} from "./CardItem.styled.js";

// eslint-disable-next-line react/prop-types
const CardItem = ({ id, user, tweets, followers, avatar }) => {
  const [isFollow, setIsFollow] = useState(false);
  const [changeFollowers, setChangeFollowers] = useState(followers);
  const [isLoading, setIsLoading] = useState(false);

  const changeCard = {
    id,
    user,
    tweets,
    followers,
    avatar,
  };

  const handleFollow = () => {
    const updatedFollowers = changeFollowers + 1;
    setChangeFollowers(updatedFollowers);
    setIsLoading(true);

    fetchTweetUpdate(id, { ...changeCard, followers: updatedFollowers })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
    setIsFollow(true);
  };

  const handleFollowing = () => {
    const updatedFollowers = changeFollowers - 1;
    setChangeFollowers(updatedFollowers);
    setIsLoading(true);

    fetchTweetUpdate(id, { ...changeCard, followers: updatedFollowers })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
    setIsFollow(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <WrapperCardBg>
          <WrapperCard>
            {avatar ? (
              <ImgTweet src={avatar} alt={user} loading="lazy" />
            ) : (
              <ImgTweet src={noImg} alt={user} loading="lazy" />
            )}
            <TextTweet>{tweets.toLocaleString()} tweets</TextTweet>
            <TextFollower>
              {changeFollowers.toLocaleString()} followers
            </TextFollower>
            {isFollow ? (
              <BtnFollowing type="button" onClick={handleFollowing}>
                Following
              </BtnFollowing>
            ) : (
              <BtnFollow type="button" onClick={handleFollow}>
                Follow
              </BtnFollow>
            )}
          </WrapperCard>
        </WrapperCardBg>
      )}
    </>
  );
};

export default CardItem;
