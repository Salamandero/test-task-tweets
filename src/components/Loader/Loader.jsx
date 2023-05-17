import { MutatingDots } from "react-loader-spinner";
import { PositionLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <PositionLoader>
      <MutatingDots
        height="100"
        width="100"
        color="#ad00b5"
        secondaryColor="#ad00b5"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </PositionLoader>
  );
};

export default Loader;
