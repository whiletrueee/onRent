import InputField from "@/components/inputField";
import { ErrorMessage, Field, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";

function Register() {
  const router = useRouter();
  const [student, setStudent] = useState(false);
  return (
    <main className="flex flex-col justify-start h-screen px-10 bg-myblack py-7">
      <h1 className="text-5xl font-title">
        <span className=" text-mygreen">on</span>
        <span className=" text-myyellow">Rent</span>
      </h1>
      {student ? (
        <div className="mt-[5rem]">
          <h1 className="text-4xl font-bold text-mywhite">Register</h1>
          <section className="flex-col justify-start gap-2 mt-6">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string().email().required("Please enter email"),
                password: Yup.string()
                  .required("Please enter password")
                  .min(8, "Password should be at least 8 characters"),
              })}
              onSubmit={(values) => {
                console.log(values);
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
                    {/* {fetch ? (
                    <Spinner
                      thickness="5px"
                      speed="0.35s"
                      emptyColor="white"
                      color="blue.200"
                      size="md"
                    />
                  ) : (
                    "Login"
                  )} */}
                    Register
                  </button>
                </form>
              )}
            </Formik>
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
          </section>
        </div>
      ) : (
        <div>Coming Soon</div>
      )}
    </main>
  );
}

export default Register;
