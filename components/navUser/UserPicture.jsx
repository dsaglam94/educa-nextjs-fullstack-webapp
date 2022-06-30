import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserPicture = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Link href="/account">
        <div className="bg-lightGreen text-green p-3 rounded-full text-md hover:text-lightGreen hover:bg-green  duration-150 ease-in">
          <FaUserAlt />
        </div>
      </Link>
    );
  } else {
    return (
      <Link href="/account">
        <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-transparent hover:border-green">
          <Image
            src={session.user?.image}
            alt="something"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
    );
  }
};

export default UserPicture;
