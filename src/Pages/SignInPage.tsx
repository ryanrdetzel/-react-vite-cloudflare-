import { SignedOut, SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignedOut>
        <SignIn fallbackRedirectUrl="/app" />
      </SignedOut>
    </div>
  );
}

export default SignInPage;
