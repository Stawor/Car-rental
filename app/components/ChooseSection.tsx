import Image from "next/image";

export default function ChooseSection() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center bg-slate-800 text-white p-12">
        <h1 className=" text-3xl text-center">
          Save big with our cheap car rental!
        </h1>
        <h3 className=" text-center">
          Top Airports. Local Suppliers. 24/7 Support.
        </h3>
      </div>
      <div className=" flex justify-center">
        <Image
          src="/images/chooseUs/main.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
