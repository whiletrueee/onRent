import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Head from "next/head";
import SelectBlock from "@/components/selectBlock";
import SelectFloor from "@/components/selectFloor";
import Core from "@/components/core";
import FlatCard from "@/components/flatCard";
import { estanciaFlats } from "@/utils/constants/data";

function Floor() {
  const router = useRouter();
  const { society, building, floor } = router.query;
  const [selectBlock, setSelectBlock] = useState(false);
  const [selectFloor, setSelectFloor] = useState(false);
  const [core, setCore] = useState(0);
  const [floors, setFloor] = useState(floor);
  const [buildings, setBuildings] = useState(building);
  const [floorNumber, setFloorNumber] = useState(1);
  const [buildingNumber, setBuildingNumber] = useState(1);

  return (
    <>
      <Head>
        <title>
          {society} | {building}
        </title>
        <meta name="description" content="Renting flats made easier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-start h-screen bg-myblack">
        <h1 className="px-5 text-5xl font-title py-7">
          <span className=" text-mygreen">on</span>
          <span className=" text-myyellow">Rent</span>
        </h1>
        <nav className="flex flex-col px-5 mt-1 text-base font-semibold text-mywhite">
          <div>
            <span
              className="text-gray-400"
              onClick={() => {
                router.push("/society");
              }}
            >
              {society}
            </span>{" "}
            / {building} / {floor}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => {
                if (selectFloor) {
                  setSelectFloor(false);
                }
                setSelectBlock((prev) => !prev);
              }}
              className="flex items-center gap-4 px-6 py-2 font-bold border-2 border-gray-700 rounded-md"
            >
              {building} <IoMdArrowDropdown size={"20px"} />
            </button>
            <button
              onClick={() => {
                if (selectBlock) {
                  setSelectBlock(false);
                }
                setSelectFloor((prev) => !prev);
              }}
              className="flex items-center gap-4 px-6 py-2 font-bold border-2 border-gray-700 rounded-md"
            >
              {floor} <IoMdArrowDropdown size={"20px"} />
            </button>
          </div>

          {selectBlock && (
            <SelectBlock
              setBuildingNumber={setBuildingNumber}
              setBuildings={setBuildings}
              floors={floors}
              setSelectBlock={setSelectBlock}
            />
          )}
          {selectFloor && (
            <SelectFloor
              setFloorNumber={setFloorNumber}
              setFloor={setFloor}
              buildings={buildings}
              setSelectFloor={setSelectFloor}
            />
          )}
        </nav>

        <section className="px-5">
          {society === "Estancia" ? (
            <Core core={core} setCore={setCore} />
          ) : null}
          <div className="text-mywhite"></div>
        </section>

        <section className="mt-5">
          <h1 className="pb-2 mx-5 my-3 text-2xl border-b-2 border-gray-800 text-mywhite">
            Flats
          </h1>
          <div className="flex flex-col gap-4 mx-5">
            {estanciaFlats.map((item) => {
              return (
                <FlatCard
                  society={society}
                  id={item}
                  key={item}
                  buildingNumber={buildingNumber}
                  floorNumber={floorNumber}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Floor;
