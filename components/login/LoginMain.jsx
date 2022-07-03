import React, { useState, useEffect } from "react";
import ButtonLogin from "./ButtonLogin";

const LoginMain = ({ providers, csrfToken }) => {
  const [isTeacher, setIsTeacher] = useState(null);
  const [teacherEmail, setTeacherEmail] = useState("");

  useEffect(() => {
    if (teacherEmail.split("@")[1] === "educa.com") {
      setIsTeacher(true);
    } else {
      setIsTeacher(false);
    }
  }, [teacherEmail]);

  console.log(isTeacher);

  return (
    <main className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex items-center justify-center duration-300 ease-in my-20">
      <div className="bg-lightGreen rounded px-10 py-5 border-2 border-green duration-150 ease-in">
        <div className="pb-4 border-b border-green text-center">
          <h1 className="text-2xl font-bold px-6">Welcome Back!</h1>
        </div>
        <form
          className="flex flex-col items-center gap-2"
          action="/api/auth/signin/email"
          method="post"
        >
          <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
          <label className="font-bold text-lg py-2" htmlFor="email">
            Are you a teacher?
          </label>
          <input
            onChange={(e) => setTeacherEmail(e.target.value)}
            className="p-2 rounded w-full focus:outline-none bg-white border-2 border-green focus:bg-green focus:text-white focus:placeholder:text-lightGreen"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button
            className={
              isTeacher
                ? "w-full py-2 bg-transparent text-lightBlack border-2 border-green rounded hover:bg-green hover:text-lightGreen"
                : "w-full py-2 bg-transparent text-lightBlack border-2 border-green rounded hover:bg-green hover:text-lightGreen pointer-events-none"
            }
            type="submit"
          >
            Sign in with your email
          </button>
        </form>
        <div className="flex items-center justify-center gap-2 py-10">
          <div className="w-20 h-[3px] bg-green rounded"></div>
          <h2 className="font-bold text-lg">or login with</h2>
          <div className="w-20 h-[3px] bg-green rounded"></div>
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
