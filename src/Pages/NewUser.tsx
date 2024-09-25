import { useCreateSessionMutation } from "../apis/session";

function NewUser() {
  const createSession = useCreateSessionMutation();

  const signup = () => {
    createSession.mutate(
      {},
      {
        onSuccess: (data) => {
          console.log("Success");
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold">New User Sign Up Page</h1>
      <button onClick={signup}>Sign Up</button>
    </>
  );
}

export default NewUser;
