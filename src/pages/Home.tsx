import { useAppSelector } from "../store/hooks/hooks";
import { getUserInfo } from "../store/selectors/userSelector";

export const Home = () => {
  const { token } = useAppSelector(getUserInfo);
  return (
    <>
      <div>{token}</div>
    </>
  );
};
