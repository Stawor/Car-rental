export default function BookingForm() {
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="gap-10 bg-yellow-400"
      >
        <div className=" bg-orange-600 w-full">
          <p>Complete Reservation</p>
        </div>
      </div>
    </>
  );
}
