export default function Hero() {
  return (
    <section className="">
      <div className=" relative flex">
        <div className=" flex items-center z-10 lg:my-2 lg:py-20 lg:px-32 px-5 py-20">
          <div className=" text-center mt-10">
            <h4 className=" lg:text-xl font-bold text-xs">
              Plan your trip now
            </h4>
            <h1 className="lg:text-5xl font-bold lg:pt-5 lg:pb-10 text-xl my-2">
              Save big with our car rental
            </h1>
            <p className=" text-xs mb-2 lg:text-xl">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and more
            </p>
            <button className="lg:px-7 lg:py-3 lg:mt-8 bg-orange-600 text-white px-6 m-2 py-2">
              Book Ride
            </button>
            <button className="lg:px-7 lg:py-3 lg:m-5 bg-black text-white px-5 my-1 py-2">
              Learn More
            </button>
          </div>
          <img className=" w-1/2 hidden lg:block" src="/main-car.png" alt="" />
        </div>
        <div className=" flex w-full justify-end absolute z-0 lg:z-0">
          <img
            className=" lg:p-0 py-20 hidden lg:block"
            src="/hero-bg.png"
            alt=""
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}
