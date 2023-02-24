import FlatData from "@/components/flatData";
import { useRole } from "@/context/rolte";
import { useRouter } from "next/router";

function FlatDetails() {
  const router = useRouter();
  const { roleData } = useRole();
  return (
    <main className="flex flex-col justify-start h-screen px-5 bg-myblack py-7">
      <h1 className="text-5xl font-title">
        <div className="w-fit" onClick={() => router.push("/")}>
          <span className=" text-mygreen">on</span>
          <span className=" text-myyellow">Rent</span>
        </div>
        <div className="mt-3 text-2xl font-medium">
          <span className=" text-mywhite/80">Hello, </span>
          <span className=" text-mywhite">{roleData?.name}</span>
        </div>
      </h1>
      <div className="mt-10 text-lg font-semibold text-mywhite font-content">
        Add details of your flat
      </div>
      <FlatData />
      <button
        onClick={() => {
          router.push("/details");
        }}
        className="px-6 py-1 mt-4 text-xl font-bold rounded-md text-myblack bg-myblue"
      >
        Proceed
      </button>
    </main>
  );
}

export default FlatDetails;
