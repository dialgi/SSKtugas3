import LoginForm from "../components/fragments/LoginForm";
import AuthLayout from "../components/layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout type="sign in">
      <LoginForm />
    </AuthLayout>
  );
};

export default SignIn;
