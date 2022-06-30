import { signIn } from "next-auth/react";

const ButtonLogin = ({ providers }) => {
  return (
    <div className="mb-4 bg-green rounded border-2 border-transparent text-lightGreen font-bold text-xl text-center hover:bg-transparent hover:text-green hover:border-green">
      <button
        onClick={() => signIn(providers.id)}
        className="w-full py-2 md:px-28 tracking-wider duration-150 ease-in"
      >
        {providers.name}
      </button>
    </div>
  );
};

export default ButtonLogin;
