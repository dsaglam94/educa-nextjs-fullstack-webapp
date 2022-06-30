import { signOut } from "next-auth/react";

const LogoutMain = ({ name }) => {
  return (
    <main className="my-20 w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex items-center justify-center duration-300 ease-in">
      <div className="bg-lightGreen rounded px-10 py-5 border-2 border-green duration-150 ease-in">
        <div className="pb-4 border-b border-green text-center">
          <h1 className="text-2xl font-bold px-6 whitespace-nowrap">
            {name}👋
          </h1>
        </div>
        <h2 className="pt-4 font-bold text-lg text-center text-green">
          You've already logged in.
        </h2>
        <div className="my-4 bg-green rounded text-lightGreen font-bold text-xl text-center hover:bg-lightBlack ">
          <button
            onClick={() => signOut()}
            className="w-full p-3 tracking-wider"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default LogoutMain;
