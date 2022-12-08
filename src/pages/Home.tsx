import { Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";

export const Home = () => {
  const { token } = useAppSelector(getUserInfo);
  return (
    <>
      <Typography>{token}</Typography>
    </>
  );
};
