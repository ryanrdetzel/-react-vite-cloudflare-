import { SignedIn, UserButton } from "@clerk/clerk-react";

function Header() {
  return (
    <header>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

export default Header;
