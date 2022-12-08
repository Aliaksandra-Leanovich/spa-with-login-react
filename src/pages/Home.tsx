import { Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks/hooks";
import { getUserInfo } from "../store/selectors/userSelector";

export const Home = () => {
  const { token } = useAppSelector(getUserInfo);
  return (
    <>
      <Typography>{token}</Typography>
    </>
  );
};
