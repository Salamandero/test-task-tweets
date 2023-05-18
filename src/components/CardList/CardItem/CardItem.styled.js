import styled from "styled-components";

import circlePortret from "../../../assets/circlePortret.png";
import pictureAskSuccess from "../../../assets/pictureAskSuccess.png";
import rectangle from "../../../assets/rectangle.png";
import logoGoit from "../../../assets/logoGoit.svg";
// import imgPanaMobile2x from "../../images/form/food-pana_mobile@2x.png";

export const WrapperCardBg = styled.div`
  width: 380px;
  height: 460px;

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
  width: 380px;
  height: 460px;

  background-image: url(${circlePortret}), url(${pictureAskSuccess}),
    url(${rectangle}), url(${logoGoit});
  background-repeat: no-repeat;
  background-size: 80px, 308px, 380px, 76px;
  /* background-size: calc(100vw - 180px), cover; */
  background-position: center top 178px, center top 28px, center top 214px,
    left 20px top 20px;

  /* border-radius: 20px; */
`;
