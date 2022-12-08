import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAuthError, validationSchema } from "../helper";
import { routes } from "../routes/routes";
import { useAppDispatch } from "../store/hooks";
import { setUserToken } from "../store/slices/userSlice";
import { app } from "../utils";
import Input from "./Input";
import { IUserForm } from "./types";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const localStorageKey = "userToken";

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const setUserTokenToStorage = (token: string) => {
    localStorage.setItem(localStorageKey, token);
    dispatch(setUserToken(token));
  };

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        setUserTokenToStorage(token);
        navigate(routes.HOME);
      })
      .catch((error) => {
        setError(getAuthError(error.code));
      });
  };

  return (
    <Box sx={{ width: "250px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          label="email"
          errors={errors.email?.message || error}
          register={register}
          placeholder="Enter your email"
        />
        <Input
          type="password"
          label="password"
          errors={errors.password?.message}
          register={register}
          placeholder="Enter your password"
        />
        <Button
          variant="contained"
          className="normal-case"
          sx={{ width: "100%" }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};
