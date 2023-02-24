import InputField from "@/components/inputField";
import { ErrorMessage, Field, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

function Login() {
  const renderError = (message: string | undefined) => (
    <p className="pl-4 mt-1 text-base text-mypink">{message}</p>
  );
  const router = useRouter();
  return (
    <main className="flex flex-col justify-start h-screen px-10 bg-myblack py-7">
      <h1 className="text-5xl font-title" onClick={()=>router.push("/")}>
        <span className=" text-mygreen">on</span>
        <span className=" text-myyellow">Rent</span>
      </h1>
      <div className="mt-[5rem]">
        <h1 className="text-4xl font-bold text-mywhite">Login</h1>
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
              router.push("/society");
            }}
          >
            {(formik) => (
              <form
                className="flex flex-col justify-start gap-4"
                onSubmit={formik.handleSubmit}
              >
                <InputField
                  name={"email"}
                  label={"E-Mail"}
                  type={"text"}
                  placeholder={"Enter E-Mail"}
                />
                <InputField
                  name={"password"}
                  label={"Password"}
                  type={"password"}
                  placeholder={"Enter Password"}
                />
                <button
                  onClick={() => {
                    router.push("/society");
                  }}
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
                  Login
                </button>
              </form>
            )}
          </Formik>
          <p className="mt-4 font-medium text-mywhite ">
            Don&apos;t have an account{" "}
            <span
              className="font-bold text-myorange hover:cursor-pointer"
              onClick={() => {
                router.push("/auth/register");
              }}
            >
              Register Now !
            </span>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Login;
