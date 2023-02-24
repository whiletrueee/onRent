import { Dispatch, SetStateAction } from "react";

function Core({
  core,
  setCore,
}: {
  core: number;
  setCore: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center justify-between mt-6">
      <button
        className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
        onClick={() => setCore(0)}
      >
        Core 0
      </button>
      <div className="text-xl font-bold text-myblue">Core : {core}</div>
      <button
        className="px-4 py-2 text-lg font-semibold border-2 border-gray-700 rounded-md text-mywhite"
        onClick={() => setCore(1)}
      >
        Core 1
      </button>
    </div>
  );
}

export default Core;