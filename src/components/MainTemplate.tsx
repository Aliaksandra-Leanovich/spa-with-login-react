import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
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
      <Outlet />
    </Box>
  );
};
