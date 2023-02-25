import { useRole } from "@/context/rolte";
import { useRouter } from "next/router";

function MyProfile() {
  const router = useRouter();
  const { roleData, flatData } = useRole();

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
      <h2 className="mt-10 text-lg font-bold text-mywhite">My Flat</h2>
      <div className="flex justify-between h-[8rem] p-2 border-2 border-mygreen rounded-md mt-5">
        <div className="w-[20%] bg-mypink flex justify-center items-center font-medium font-title text-myblack text-2xl rounded-lg">
          <span>{flatData?.flat}</span>
        </div>
        <div className="w-[78%] flex justify-between items-center">
          <div className="flex flex-wrap justify-start gap-3 py-1 text-lg font-medium text-gray-400">
            <h3>
              <span className="text-xl font-bold text-mygreen">{flatData?.bhk}</span> BHK
            </h3>
            <h4>
              <span className="text-xl font-bold text-mygreen">{flatData?.bathrooms}</span> Bathroom
            </h4>
            <h4>{flatData?.furnished}</h4>
            <div className="flex justify-between w-full text-xl font-bold text-mygreen">
              <span>{flatData?.availablity?'Available':'Not Available'}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyProfile;
