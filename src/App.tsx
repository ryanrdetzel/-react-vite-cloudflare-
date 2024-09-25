import { useExampleQuery } from "./apis/example";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

function App() {
  const { data, isLoading, isError } = useExampleQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">
        Basic React Vite Tailwind App
      </h1>
      <ul>
        <li>Name: {data.name}</li>
      </ul>
    </>
  );
}

export default App;
