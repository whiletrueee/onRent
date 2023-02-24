import { useRole } from "@/context/rolte";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "./inputField";

function FlatMates({ id }: { id: number }) {
  return (
    <section className="flex-col justify-start gap-2 mt-6">
      <Formik
        initialValues={{
          name: "Ethan Hunt",
          register: "RA2011026010185",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          register: Yup.string().required(),
        })}
        onSubmit={(values) => {}}
      >
        {(formik) => (
          <form
            className="flex flex-col justify-start gap-2"
            onSubmit={formik.handleSubmit}
          >
            <div className="p-2 bg-black rounded-md ">
              <span className="text-mywhite">{id+1}</span>
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
              <button
                type="submit"
                className="px-6 py-1 mt-4 text-xl font-bold rounded-md text-myblack bg-mygreen"
              >
                + Add Data
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default FlatMates;
