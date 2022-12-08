import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IInputProps } from "./types";

const Input = ({ type, placeholder, errors, label, register }: IInputProps) => {
  return (
    <Box sx={{ display: "flex", rowGap: "6px", flexDirection: "column" }}>
      <TextField
        variant="outlined"
        size="small"
        sx={{ width: "100%" }}
        placeholder={placeholder}
        type={type}
        {...register(label)}
        helperText={errors ? errors : " "}
      />
    </Box>
  );
};

export default Input;
