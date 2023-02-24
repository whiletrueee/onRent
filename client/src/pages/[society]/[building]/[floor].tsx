import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Head from "next/head";
import SelectBlock from "@/components/selectBlock";
import SelectFloor from "@/components/selectFloor";
import Core from "@/components/core";

function Floor() {
  const router = useRouter();
  const { society, building, floor } = router.query;
  const [selectBlock, setSelectBlock] = useState(false);
  const [selectFloor, setSelectFloor] = useState(false);
  const [core, setCore] = useState(1);
  const [floors, setFloor] = useState(floor);
  const [buildings, setBuildings] = useState(building);

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
        <h1 className="px-10 text-5xl font-title py-7">
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
              setBuildings={setBuildings}
              floors={floors}
              setSelectBlock={setSelectBlock}
            />
          )}
          {selectFloor && (
            <SelectFloor
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
      </main>
    </>
  );
}

export default Floor;
