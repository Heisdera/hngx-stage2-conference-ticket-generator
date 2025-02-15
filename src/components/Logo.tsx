import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="#">
      <Image src="/assets/logo.svg" width={100} height={100} alt="" />
    </Link>
  );
};
