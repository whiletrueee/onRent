import InputField from "@/components/inputField";
import { useRole } from "@/context/rolte";
import { ErrorMessage, Field, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";

function Register() {
  const router = useRouter();
  const [tenent, setTenent] = useState(false);
  const [flatSeeker, setFlatSeeker] = useState(false);
  const [rolee, setRolee] = useState(false);
  const { setRole, setRoleData } = useRole();

  return (
    <main className="flex flex-col justify-start h-screen px-10 bg-myblack py-7">
      <h1 className="flex items-center justify-between text-5xl font-title">
        <div className="w-fit" onClick={() => router.push("/")}>
          <span className=" text-mygreen">on</span>
          <span className=" text-myyellow">Rent</span>
        </div>
        {rolee && (
          <div
            className="text-base text-mywhite/60"
            onClick={() => {
              setTenent(false);
              setFlatSeeker(false);
              setRolee(false);
            }}
          >
            &lt; change role
          </div>
        )}
      </h1>

      <div className="mt-[2rem]">
        <h1 className="text-4xl font-bold text-mywhite">
          Register{" "}
          <span className="text-xl text-purple-400">
            as{rolee ? (tenent ? " Tenent" : " Flat Seeker") : null}
          </span>
        </h1>
        {!rolee && (
          <main className="flex justify-around mt-10">
            <button
              className="px-4 py-2 text-xl font-bold rounded-md text-myblack bg-myorange"
              onClick={() => {
                setTenent(true);
                setRolee(true);
              }}
            >
              Tenent
            </button>
            <button
              className="px-4 py-2 text-xl font-bold rounded-md text-myblack bg-mypink"
              onClick={() => {
                setFlatSeeker(true);
                setRolee(true);
              }}
            >
              Flat Seeker
            </button>
          </main>
        )}
        {rolee && (
          <section className="flex-col justify-start gap-2 mt-6">
            <Formik
              initialValues={{
                name: "Ethan Hunt",
                register: "RA2011026010185",
                email: "hs3477@srmist.edu.in",
                password: "Shibu3477@",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required(),
                register: Yup.string().required(),
                email: Yup.string().email().required("Please enter email"),
                password: Yup.string()
                  .required("Please enter password")
                  .min(8, "Password should be at least 8 characters"),
              })}
              onSubmit={(values) => {
                setRoleData(values);
                if (tenent) {
                  setRole("Tenent");
                }
                if (flatSeeker) {
                  setRole("Flat Seeker");
                }
                router.push("/society");
              }}
            >
              {(formik) => (
                <form
                  className="flex flex-col justify-start gap-2"
                  onSubmit={formik.handleSubmit}
                >
                  <InputField
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="Enter Name"
                  />
                  <InputField
                    name="register"
                    label="Register Number"
                    type="text"
                    placeholder="RA20110260101000"
                  />
                  <InputField
                    name="email"
                    label="E-Mail"
                    type="text"
                    placeholder="Enter E-Mail"
                  />
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                  />

                  <button
                    type="submit"
                    className="px-6 py-1 mt-4 text-xl font-bold rounded-md text-myblack bg-mygreen"
                  >
                    Register
                  </button>
                </form>
              )}
            </Formik>
          </section>
        )}
        <p className="mt-4 font-medium text-mywhite ">
          Already have an account ?{" "}
          <span
            className="font-bold text-myorange hover:cursor-pointer"
            onClick={() => {
              router.push("/auth/login");
            }}
          >
            Login Now !
          </span>
        </p>
      </div>
    </main>
  );
}

export default Register;
