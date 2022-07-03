import AccountInfo from "../components/account/AccountInfo";
import Meta from "../components/Meta";
import NavBanner from "../components/NavBanner";
import { getSession, signOut } from "next-auth/react";

const Account = ({ session }) => {
  return (
    <>
      <Meta title={"Educa | Account"} />
      <NavBanner title={`Welcome ${session.user?.name}`} page="Account" />
      <AccountInfo session={session} signOut={signOut} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log(context);
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};

export default Account;
