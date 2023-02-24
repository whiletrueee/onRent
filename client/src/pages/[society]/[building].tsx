import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Head from "next/head";
import {
  abodeBlock,
  abodeFloor,
  estancia,
  estanciaFloor,
} from "@/utils/constants/data";

function Building() {
  const router = useRouter();
  const [selectblock, setSelectBlock] = useState(false);
  const [selectFloor, setSelectFloor] = useState(false);
  const [core, setCore] = useState(1);
  const [floor, setFloor] = useState(1);
  const { society, building } = router.query;

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
            <span className="text-gray-400">{society}</span> / {building}
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
                if (selectblock) {
                  setSelectBlock(false);
                }
                setSelectFloor((prev) => !prev);
              }}
              className="flex items-center gap-4 px-6 py-2 font-bold border-2 border-gray-700 rounded-md"
            >
              Floor-{floor} <IoMdArrowDropdown size={"20px"} />
            </button>
          </div>
          {selectblock && (
            <div className="relative z-10 p-2 bg-myblack">
              {society === "Abode" ? (
                <div className="flex flex-wrap justify-start gap-4 mt-4">
                  {abodeBlock.map((items, i) => {
                    return (
                      <button
                        className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                        key={i}
                        onClick={() => {
                          router.push(`/${society}/${items}`);
                          setSelectBlock(false);
                        }}
                      >
                        {items}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap justify-start gap-4 mt-4">
                  {estancia.map((items, i) => {
                    return (
                      <button
                        className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                        key={i}
                        onClick={() => {
                          router.push(`/${society}/Tower-${items}`);
                          setSelectBlock(false);
                        }}
                      >
                        Tower-{items}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {selectFloor && (
            <div className="relative z-10 p-2 bg-myblack">
              {society === "Abode" ? (
                <div className="flex flex-wrap justify-start gap-4 mt-4">
                  {abodeFloor.map((items) => {
                    return (
                      <button
                        className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                        key={items}
                        onClick={() => {
                          setFloor(items);
                          setSelectFloor(false);
                        }}
                      >
                        Floor-{items}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap justify-start gap-4 mt-4">
                  {estanciaFloor.map((items) => {
                    return (
                      <button
                        className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                        key={items}
                        onClick={() => {
                          setFloor(items);
                          setSelectFloor(false);
                        }}
                      >
                        Floor-{items}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </nav>

        <section className="px-5">
          {society === "Estancia" ? (
            <div className="flex items-center justify-between mt-6">
              <button
                className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                onClick={() => setCore(1)}
              >
                Core 1
              </button>
              <div className="text-xl font-bold text-myblue">Core : {core}</div>
              <button
                className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                onClick={() => setCore(2)}
              >
                Core 2
              </button>
            </div>
          ) : null}
          <div className="text-mywhite"></div>
        </section>
      </main>
    </>
  );
}

export default Building;
