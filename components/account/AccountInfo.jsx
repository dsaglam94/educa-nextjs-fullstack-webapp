import Image from "next/image";

const AccountInfo = ({ session, signOut }) => {
  return (
    <main className="h-[40vh] w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex items-center justify-center duration-300 ease-in my-20">
      <section className="flex items-center justify-end w-full">
        <div className="bg-lightGreen p-10 rounded border-2 border-green flex flex-col items-center gap-4">
          <div className="relative w-[200px] h-[200px] overflow-hidden rounded">
            <Image
              src={session.user?.image}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="font-bold text-lg">{session.user?.name}</h2>
          <p>{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="w-full bg-transparent border-2 border-green text-green rounded py-2 hover:bg-lightBlack hover:border-transparent hover:text-lightGreen"
          >
            Sign Out
          </button>
        </div>
      </section>
    </main>
  );
};

export default AccountInfo;
