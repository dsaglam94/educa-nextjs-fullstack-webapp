import React from "react";
import ButtonLogin from "./ButtonLogin";

const LoginMain = ({ providers }) => {
  console.log(providers);
  return (
    <main className="h-[60vh] w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex items-center justify-center duration-300 ease-in">
      <div className="bg-lightGreen rounded px-10 py-5 border-2 border-green duration-150 ease-in">
        <div className="pb-4 border-b border-green text-center">
          <h1 className="text-2xl font-bold px-6">Login with:</h1>
        </div>
        <div>
          <ButtonLogin providers={providers.google} />
          <ButtonLogin providers={providers.github} />
        </div>
      </div>
    </main>
  );
};

export default LoginMain;
