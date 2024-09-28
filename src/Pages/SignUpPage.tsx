import { SignedOut, SignUp, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/app");
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignedOut>
        <SignUp forceRedirectUrl="/app" />
      </SignedOut>
    </div>
  );
}

export default SignUpPage;
