import { abodeBlock, abodeFloor, estanciaFloor } from "@/utils/constants/data";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

function SelectFloor({
  setFloorNumber,
  setFloor,
  buildings,
  setSelectFloor,
}: {
  setFloorNumber: Dispatch<SetStateAction<number>>;
  setFloor: Dispatch<SetStateAction<string | string[] | undefined>>;
  buildings: string | string[] | undefined;
  setSelectFloor: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { society } = router.query;

  return (
    <div className="relative z-10 p-2 bg-myblack">
      {society === "Abode" ? (
        <div className="flex flex-wrap justify-start gap-4 mt-4">
          {abodeFloor.map((items) => {
            return (
              <button
                className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                key={items}
                onClick={() => {
                  setFloor(`Floor-${items}`);
                  setFloorNumber(items);
                  setSelectFloor(false);
                  router.push(`/${society}/${buildings}/Floor-${items}`);
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
                  setFloor(`Floor-${items}`);
                  setFloorNumber(items);
                  setSelectFloor(false);
                  router.push(`/${society}/${buildings}/Floor-${items}`);
                }}
              >
                Floor-{items}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SelectFloor;
