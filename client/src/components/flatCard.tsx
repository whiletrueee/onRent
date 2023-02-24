import { BsArrowRightCircleFill } from "react-icons/bs";

function FlatCard({
  society,
  id,
  buildingNumber,
  floorNumber,
}: {
  society: string | string[] | undefined;
  id: number;
  floorNumber: number;
  buildingNumber: number;
}) {
  return (
    <div className="flex justify-between h-[6rem] p-2 border-2 border-mygreen rounded-md">
      <div className="w-[20%] bg-mypink flex justify-center items-center font-medium font-title text-myblack text-2xl rounded-lg">
        {society == "Estancia" ? (
          <span>
            {buildingNumber}
            {floorNumber % 10 == floorNumber ? `0${floorNumber}` : floorNumber}
            {id}
          </span>
        ) : (
          <span>
            {String.fromCharCode(buildingNumber + 64)}{floorNumber}{0}{id}
          </span>
        )}
      </div>
      <div className="w-[78%] flex justify-between items-center">
        <div className="flex flex-wrap justify-start gap-3 py-1 text-lg font-medium text-gray-400">
          <h3>
            <span className="text-xl font-bold text-mygreen">3</span> BHK
          </h3>
          <h4>
            <span className="text-xl font-bold text-mygreen">2</span> Bathroom
          </h4>
          <h4>Furnished</h4>
          <div className="flex justify-between w-full text-xl font-bold text-mygreen">
            <span>Available</span>
            <BsArrowRightCircleFill size={30} className="text-mygreen" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlatCard;
