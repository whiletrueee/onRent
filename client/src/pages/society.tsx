import { useRole } from "@/context/rolte";
import { useRouter } from "next/router";
import { useState } from "react";

function Society() {
  const router = useRouter();
  const { role } = useRole();

  const { addMyFlat } = useRole();
  return (
    <main className="flex flex-col justify-start h-screen px-10 bg-myblack py-7">
      <h1 className="text-5xl font-title" onClick={() => router.push("/")}>
        <span className=" text-mygreen">on</span>
        <span className=" text-myyellow">Rent</span>
      </h1>

      <div className="flex flex-col justify-center mt-[5rem] gap-5 font-bold text-xl">
        {addMyFlat &&
          (role == "Tenent" || role == undefined ? (
            <div className="text-xl font-bold text-mywhite">
              Choose your society
            </div>
          ) : null)}
        <button
          onClick={() => {
            router.push("/Abode/Block-A/Floor-1");
          }}
          className="px-6 py-2 tracking-wider text-center border-2 border-gray-500 rounded-md text-myblue"
        >
          Abode
        </button>
        <button
          onClick={() => {
            router.push("/Estancia/Tower-1/Floor-1");
          }}
          className="px-6 py-2 tracking-wider text-center border-2 border-gray-500 rounded-md text-myblue"
        >
          Estancia
        </button>
      </div>
    </main>
  );
}

export default Society;
