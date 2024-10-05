import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthMutation, useAuthRegisterMutation } from "../apis/useAuthQuery";
import { useSession } from "../hooks/useSession";
import { QueryKey, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_verify, setPasswordVerify] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const { user } = useSession();
  const { mutate: login, isSuccess } = useAuthMutation();
  const {
    mutate: register,
    isSuccess: isSuccessRegister,
    error: registerError,
  } = useAuthRegisterMutation();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (user || isSuccessRegister) {
      window.location.href = "/app";
    }
  }, [user, isSuccessRegister, navigate]);

  useEffect(() => {
    if (isSuccess) {
      const queryKey: QueryKey = ["session"];
      queryClient.invalidateQueries({ queryKey: queryKey });
      navigate("/app");
    }
  }, [isSuccess, navigate, queryClient]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      if (
        email &&
        password &&
        password_verify &&
        password === password_verify
      ) {
        register({ email, password });
      } else {
        setError(
          "Please enter both email and password and verify the passwords match"
        );
      }
    } else {
      if (email && password) {
        login({ email, password });
      } else {
        setError("Please enter both email and password");
      }
    }
  };

  const toggleSignup = () => {
    setError("");
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-xl">
            {isSignup ? "Sign Up" : "Sign In"}
          </CardTitle>
          <CardDescription>
            Enter your email and password to log in.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {isSignup && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Verify Password</Label>
                  <Input
                    id="password_verify"
                    type="password"
                    value={password_verify}
                    onChange={(e) => setPasswordVerify(e.target.value)}
                  />
                </div>
              )}
            </div>
            {isSignup && (
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer text-primary hover:text-primary/80"
                  onClick={toggleSignup}
                >
                  Sign in
                </span>
              </div>
            )}
            {!isSignup && (
              <div className="mt-4 text-center text-sm">
                Don't have an account?{" "}
                <span
                  className="underline cursor-pointer text-primary hover:text-primary/80"
                  onClick={toggleSignup}
                >
                  Sign up
                </span>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">
              {isSignup ? "Sign up" : "Log in"}
            </Button>
            {error && <p className="text-sm text-destructive mt-2">{error}</p>}
            {registerError && (
              <p className="text-sm text-destructive mt-2">
                {registerError.message}
              </p>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignInPage;
