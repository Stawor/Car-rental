"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import BookingForm from "./BookingForm";

export default function Booking() {
  const [openModal, setOpenModal] = useState(false);

  function handleClickOpen(e: { preventDefault: () => void }) {
    e.preventDefault();
    setOpenModal(true);
  }
  function handleClickClose() {
    setOpenModal(false);
  }

  const [selectedCarType, setselectedCarType] = useState("");
  const [selectedPickUp, setselectedPickUp] = useState("");
  const [selectedDropOf, setselectedDropOf] = useState("");
  const [selectedPickUpDate, setselectedPickUpDate] = useState("");

  const [selectedDropOfDate, setselectedDropOfDate] = useState("");

  function Form() {
    return (
      <div>
        <form className=" flex flex-col items-center content-center gap-10">
          <div className=" flex gap-10 lg:flex-row flex-col">
            <div className="flex flex-col ">
              <label htmlFor="carType">
                Your Car Type <b>*</b>
              </label>
              <select
                value={selectedCarType}
                onChange={(e) => setselectedCarType(e.target.value)}
                id="carType"
              >
                <option value="">--Pick an Option--</option>
                <option value="audia1">audi a1</option>
                <option value="golf6">VW Golf 6</option>
                <option value="toyotacamry">Toyota Camry</option>
                <option value="bmw320">BMW 320</option>
              </select>
            </div>
            <div className=" flex flex-col">
              <label htmlFor="pickUp">
                Pick Up <b>*</b>
              </label>
              <select
                value={selectedPickUp}
                onChange={(e) => setselectedPickUp(e.target.value)}
                id="pickUp"
              >
                <option value="">--Pick an Option--</option>
                <option value="Amsterdam">Belgrade</option>
                <option value="Berlin">Novi Sad</option>
                <option value="Warsaw">Nice</option>
                <option value="Prague">BMW 320</option>
              </select>
            </div>
            <div className=" flex flex-col">
              <label htmlFor="dropOff">
                Drop Off <b>*</b>
              </label>
              <select
                value={selectedDropOf}
                onChange={(e) => setselectedDropOf(e.target.value)}
                id="dropOff"
              >
                <option value="">--Pick an Option--</option>
                <option value="Amsterdam">Belgrade</option>
                <option value="Berlin">Novi Sad</option>
                <option value="Warsaw">Nice</option>
                <option value="Prague">BMW 320</option>
              </select>
            </div>
          </div>
          <div className="flex items-center content-center gap-10 lg:flex-row flex-col">
            <div className=" flex flex-col ">
              <label htmlFor="pickUpDate">
                Pick Up <b>*</b>
              </label>
              <input
                value={selectedPickUpDate}
                onChange={(e) => setselectedPickUpDate(e.target.value)}
                id="pickUpDate"
                type="date"
              ></input>
            </div>
            <div className=" flex flex-col ">
              <label htmlFor="dropOfDate">
                Drop Off <b>*</b>
              </label>
              <input
                value={selectedDropOfDate}
                onChange={(e) => setselectedDropOfDate(e.target.value)}
                id="dropOfDate"
                type="date"
              ></input>
            </div>
            <button
              className=" bg-orange-600 w-56 h-8 my-6"
              onClick={handleClickOpen}
              type="submit"
              value="Submit"
              disabled={
                !selectedDropOf ||
                !selectedCarType ||
                !selectedDropOfDate ||
                !selectedPickUp ||
                !selectedPickUpDate
              }
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
  function ModalDisplay() {
    return (
      <>
        {openModal &&
          selectedCarType &&
          selectedPickUp &&
          selectedDropOf &&
          selectedPickUpDate &&
          selectedDropOfDate && (
            <div
              className="top-0 fixed w-full bg-black bg-opacity-50 h-full z-20 px-40 py-10"
              onClick={handleClickClose}
            >
              <BookingForm />
              <div className="flex float-right">
                <Image
                  src={"/images/cars-big/" + selectedCarType + ".jpg"}
                  width={250}
                  height={250}
                  alt="Chosen Car"
                />
              </div>
            </div>
          )}
      </>
    );
  }

  return (
    <>
      <Form />
      <ModalDisplay />
    </>
  );
}
