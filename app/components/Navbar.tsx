import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className=" flex place-content-around place-items-center absolute z-10 w-full mt-5">
      <div>
        <Image src="/car-rental.png" alt="" width={50} height={50} />
      </div>
      <div className=" hidden lg:block">
        <ul className=" flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Vehicle Models</Link>
          <Link href="/">Contact</Link>
        </ul>
      </div>
      <div className="">
        Sing In Register
        {/* <Link></Link>
            <Link></Link> */}
      </div>
    </div>
  );
}
