import Image from "next/image";

export default function PlanSection() {
  return (
    <div className=" flex flex-col items-center gap-16">
      <div className="flex flex-col align-middle items-center">
        <h3 className=" lg:text-xl text-lg">Plan your trip now</h3>
        <h1 className=" lg:text-4xl text-2xl">Quick & easy car rental</h1>
      </div>
      <div className="flex align-middle items-center flex-col lg:flex-row gap-8">
        <div className=" flex flex-col align-middle text-center w-60 items-center">
          <Image
            src="/images/plan/icon1.png"
            width={150}
            height={150}
            alt="Picture of an icon"
          />
          <h1>Select Car</h1>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className=" flex flex-col align-middle text-center w-60 items-center">
          <Image
            src="/images/plan/icon2.png"
            width={150}
            height={150}
            alt="Picture of an icon"
          />
          <h1>Contact Operator</h1>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className=" flex flex-col align-middle text-center w-60 items-center">
          <Image
            src="/images/plan/icon3.png"
            width={150}
            height={150}
            alt="Picture of an icon"
          />
          <h1>Let's Drive</h1>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
}
