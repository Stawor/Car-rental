"use client";
import { CarData } from "./CarData";
import { useState } from "react";
import Image from "next/image";

export default function PickCar() {
  function handleClick(i: number) {
    setSelectedButton(cars[i]);
  }

  const cars = CarData.map((car) => (
    <div>
      <div className=" flex flex-col items-center text-center gap-4 m-16">
        <h2 className=" text-xl">Vehcle Models</h2>
        <h1 className=" text-4xl">Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className=" flex lg:flex-row flex-col items-center justify-center gap-12">
        <div className=" flex flex-col gap-2 w-3/4 lg:w-1/4">
          <button className=" bg-orange-600 p-4" onClick={() => handleClick(0)}>
            Volkswagen Golf 6
          </button>
          <button className=" bg-orange-600 p-4" onClick={() => handleClick(2)}>
            Audi A1
          </button>
          <button className=" bg-orange-600 p-4" onClick={() => handleClick(4)}>
            Toyota Camry
          </button>
          <button className=" bg-orange-600 p-4" onClick={() => handleClick(6)}>
            BMW 320
          </button>
        </div>

        <div>
          <Image
            src={car?.img}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div className=" w-64">
          <div>{car?.model}</div>
          <div>{car?.mark}</div>
          <div>{car?.year}</div>
          <div>{car?.doors}</div>
          <div>{car?.air}</div>
          <div>{car?.transmission}</div>
          <div>{car?.fuel}</div>
        </div>
      </div>
    </div>
  ));
  const [selectedButton, setSelectedButton] = useState(cars[0]);
  return <>{selectedButton}</>;
}
