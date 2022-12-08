import Box from "@mui/material/Box";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm />
    </Box>
  );
};
