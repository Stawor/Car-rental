import Link from "next/link"
import Image from "next/image"



export default function Nav() {
  return (
    <div className=" flex place-content-around place-items-center absolute z-30 w-full mt-5">

        <div>
          <Image 
          src="/car-rental.png"
          alt = ""
          width={50}
          height={50}
           />
        </div>
        <div className=" hidden lg:block">
          <ul className=" flex gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Vehicle Models</li>
            <li>Contact</li>
          </ul>
        </div>
          <div className="">
            Sing In
            Register 
            {/* <Link></Link>
            <Link></Link> */}
          </div>

    </div>
    )
}