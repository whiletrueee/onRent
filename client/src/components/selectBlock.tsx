import { abodeBlock, AbodeBlocks, estanciaTower } from "@/utils/constants/data";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

function SelectBlock({
  setBuildingNumber,
  setBuildings,
  floors,
  setSelectBlock,
}: {
  setBuildingNumber: Dispatch<SetStateAction<number>>;
  setBuildings: Dispatch<SetStateAction<string | string[] | undefined>>;
  floors: string | string[] | undefined;
  setSelectBlock: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { society } = router.query;

  return (
    <div className="relative z-10 p-2 bg-myblack">
      {society === "Abode" ? (
        <div className="flex flex-wrap justify-start gap-4 mt-4">
          {/* {abodeBlock.map((items, i) => {
            return (
              <button
                className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                key={i}
                onClick={() => {
                  setBuildings(`Block-${items}`);
                  router.push(`/${society}/Block-${items}/${floors}`);
                  setSelectBlock(false);
                }}
              >
                Block-{items}
              </button>
            );
          })} */}
          {AbodeBlocks.map((items) => {
            return (
              <button
                className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                key={items}
                onClick={() => {
                  const block = String.fromCharCode(items + 64);
                  setBuildings(`Block-${block}`);
                  setBuildingNumber(items);
                  router.push(`/${society}/Block-${block}/${floors}`);
                  setSelectBlock(false);
                }}
              >
                Block-{String.fromCharCode(items + 64)}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap justify-start gap-4 mt-4">
          {estanciaTower.map((items) => {
            return (
              <button
                className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
                key={items}
                onClick={() => {
                  setBuildings(`Tower-${items}`);
                  setBuildingNumber(items);
                  router.push(`/${society}/Tower-${items}/${floors}`);
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
  );
}

export default SelectBlock;
