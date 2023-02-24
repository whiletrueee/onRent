import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>On Rent</title>
        <meta name="description" content="Renting flats made easier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen px-10 bg-myblack py-7 font-content">
        <div className="">
          <h1 className="text-6xl font-title">
            <span className=" text-mygreen">on</span>
            <span className=" text-myyellow">Rent</span>
          </h1>
          <div className="mt-2 font-content">
            <p className="text-lg font-semibold tracking-wide text-mywhite">
              Find Your Perfect Home{" "}
              <span className="text-gray-400">
                Effortlessly Search Flats for Rent
              </span>
            </p>
          </div>
          <div className="mt-5 ">
            <button
              className="px-4 py-2 text-xl font-bold rounded-md text-myblack bg-myorange"
              onClick={() => {
                router.push("auth/login");
              }}
            >
              Search
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
