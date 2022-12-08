import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { routes } from "../routes/routes";
import { app } from "../utils/firebase";
import Input from "./Input";

export interface IUserForm {
  email: string;
  password: string;
  errors?: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

const getAuthError = (error: string) => {
  switch (error) {
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/user-disabled":
      return "User disabled.";
    case "auth/invalid-email":
      return " Wrong email/password combination.";
    case "auth/wrong-password":
      return "Wrong email/password combination.";
    default:
      return "An unexpected error occurred.";
  }
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("user", token);
        navigate(routes.HOME);
      })
      .catch((error) => {
        setError(getAuthError(error.code));
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{error}</p>
        <Input
          type="email"
          label="email"
          errors={errors.email}
          register={register}
          placeholder="Enter your email"
        />
        <Input
          type="password"
          label="password"
          errors={errors.password}
          register={register}
          placeholder="Enter your password"
        />
        <Button
          variant="contained"
          className="normal-case"
          type="submit"
          disabled={Object.keys(errors).length > 0}
        >
          Login
        </Button>
      </form>
    </div>
  );
};
