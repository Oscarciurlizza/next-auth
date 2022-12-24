import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image width="35" height="35" src="/logo.svg" />
    </Link>
  );
}
