import styled from "styled-components";

import circlePortret from "../../../assets/circlePortret.png";
import pictureAskSuccess from "../../../assets/pictureAskSuccess.png";
import rectangle from "../../../assets/rectangle.png";
import logoGoit from "../../../assets/logoGoit.svg";

export const WrapperCardBg = styled.li`
  width: 380px;
  height: 460px;

  margin-left: auto;
  margin-right: auto;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const WrapperCard = styled.div`
  display: block;
  text-align: center;
  width: 380px;
  height: 460px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
  text-transform: uppercase;

  background-image: url(${circlePortret}), url(${pictureAskSuccess}),
    url(${rectangle}), url(${logoGoit});
  background-repeat: no-repeat;
  background-size: 88px, 308px, 380px, 76px;
  background-position: center top 179px, center top 28px, center top 214px,
    left 20px top 20px;
`;

export const ImgTweet = styled.img`
  display: block;
  position: relative;
  top: 188px;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  border-radius: 50%;
  width: 62px;
`;

export const TextTweet = styled.p`
  margin-top: 226px;
  margin-bottom: 16px;
`;
export const TextFollower = styled.p`
  margin-bottom: 26px;
`;

export const BtnFollow = styled.button`
  font-size: 18px;
  line-height: 1.222;
  font-weight: 600;

  width: 196px;
  padding: 14px 0;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  text-transform: uppercase;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const BtnFollowing = styled(BtnFollow)`
  background: #5cd3a8;
`;
