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
      <h1 className="text-5xl font-title">
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
                <div className="flex flex-col gap-1">
                  <label className="pl-4 text-xl text-mywhite" htmlFor="name">
                    E-mail
                  </label>
                  <div className="h-[5rem]">
                    <Field
                      name="email"
                      type="text"
                      className="w-full px-4 py-2 text-lg font-medium border-2 rounded-full outline-none text-mywhite bg-myblack border-mywhite"
                      placeholder="enter email"
                    />
                    <ErrorMessage name="email" render={renderError} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="pl-4 text-xl text-mywhite" htmlFor="name">
                    Password
                  </label>
                  <div className="h-[5rem]">
                    <Field
                      name="password"
                      type="password"
                      className="w-full px-4 py-2 text-lg font-medium border-2 rounded-full outline-none text-mywhite bg-myblack border-mywhite"
                      placeholder="enter password"
                    />
                    <ErrorMessage name="password" render={renderError} />
                  </div>
                </div>

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
