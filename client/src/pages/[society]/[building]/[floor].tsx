import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Head from "next/head";
import SelectBlock from "@/components/selectBlock";
import SelectFloor from "@/components/selectFloor";
import Core from "@/components/core";
import FlatCard from "@/components/flatCard";
import { abodeFlats, estanciaFlats } from "@/utils/constants/data";
import { useRole } from "@/context/rolte";

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
  const { addMyFlat, setAddMyFlat, setFlatNumber } = useRole();
  const [selectedFlat, setSelectedFlat] = useState<string | undefined>();

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
        <h1
          className="px-5 text-5xl font-title py-7"
          onClick={() => router.push("/")}
        >
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

        <section className="my-5 mt-5 overflow-y-scroll">
          <h1 className="flex items-center justify-between pb-2 mx-5 my-3 text-2xl text-mywhite">
            {addMyFlat ? (
              <span className="font-bold">Select your flat</span>
            ) : (
              <span className="font-bold">Flats</span>
            )}

            {!addMyFlat ? (
              <button
                onClick={() => {
                  router.push("/auth/login");
                  setAddMyFlat(true);
                }}
                className="px-4 py-1 text-xl font-bold rounded-md bg-myorange text-myblack"
              >
                + Add Your Flat
              </button>
            ) : (
              <button
                onClick={() => {
                  setFlatNumber(selectedFlat);
                  router.push("/flatDetails");
                }}
                className="px-4 py-1 text-xl font-bold rounded-md bg-myblue text-myblack"
              >
                Proceed
              </button>
            )}
          </h1>
          {addMyFlat ? (
            <div className="mx-5 mt-10">
              {society == "Estancia" ? (
                <div className="flex flex-wrap justify-start gap-6">
                  {estanciaFlats.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          const num = `${buildingNumber}${
                            floorNumber % 10 == floorNumber
                              ? `0${floorNumber}`
                              : floorNumber
                          }${item}`;
                          setSelectedFlat(num);
                        }}
                        key={item}
                        className="w-[20%] bg-mypink flex justify-center items-center font-medium font-title text-myblack text-2xl rounded-lg"
                      >
                        <span>
                          {buildingNumber}
                          {floorNumber % 10 == floorNumber
                            ? `0${floorNumber}`
                            : floorNumber}
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap justify-start gap-6">
                  {abodeFlats.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          const num = `${String.fromCharCode(
                            buildingNumber + 64
                          )}${floorNumber}${0}${item}`;
                          setSelectedFlat(num);
                        }}
                        key={item}
                        className="w-[20%] bg-mypink flex justify-center items-center font-medium font-title text-myblack text-2xl rounded-lg"
                      >
                        <span>
                          {String.fromCharCode(buildingNumber + 64)}
                          {floorNumber}
                          {0}
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="mt-6 text-xl font-medium text-center text-mywhite">
                Selected flat is: 
                <span className="p-1 ml-2 font-bold rounded-md bg-myyellow text-myblack">
                  {selectedFlat}
                </span>
              </div>
            </div>
          ) : (
            <div className="mx-5 ">
              {society == "Estancia" ? (
                <div className="flex flex-col justify-start gap-4">
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
              ) : (
                <div className="flex flex-col justify-start gap-4">
                  {abodeFlats.map((item) => {
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
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Floor;
