// import { getProviders, getSession } from "next-auth/react";
import LoginMain from "../components/login/LoginMain";
import Meta from "../components/Meta";
import NavBanner from "../components/NavBanner";
import { getCsrfToken, getProviders, getSession } from "next-auth/react";
import LogoutMain from "../components/login/LogoutMain";

export default function Login({ providers, session, csrfToken }) {
  console.log(providers);
  if (session) {
    return (
      <>
        <Meta title={"Educa | Login"} />
        <NavBanner title="Login" page="Login" />
        <LogoutMain name={session.user?.name} />
      </>
    );
  } else {
    return (
      <>
        <Meta title={"Educa | Login"} />
        <NavBanner title="Login" page="Login" />
        <LoginMain providers={providers} csrfToken={csrfToken} />
      </>
    );
  }
}

Login.getInitialProps = async (context) => {
  return {
    providers: await getProviders(),
    session: await getSession(context),
    csrfToken: await getCsrfToken(context),
  };
};
