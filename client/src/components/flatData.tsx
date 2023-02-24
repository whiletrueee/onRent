import { useRole } from "@/context/rolte";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import InputField from "./inputField";

function FlatData() {
  const [furnished, setFurnished] = useState("");
  const [bhk, setBHK] = useState<number | null>();
  const [bathrooms, setBathrooms] = useState<number | null>();
  const [availablity, setAvailablity] = useState<boolean>(true);
  const { setFlatData, flatNumber } = useRole();
  return (
    <section className="flex-col justify-start gap-2 mt-6">
      <Formik
        enableReinitialize
        initialValues={{
          bhk,
          bathrooms,
          furnished,
          availablity,
          flat:flatNumber
        }}
        validationSchema={Yup.object({
          bhk: Yup.number().required(),
          bathrooms: Yup.number().required(),
          furnished: Yup.string().required(),
          availablity: Yup.boolean().required(),
        })}
        onSubmit={(values) => {
          setFlatData(values);
        }}
      >
        {(formik) => (
          <form
            className="flex flex-col justify-start gap-2"
            onSubmit={formik.handleSubmit}
          >
            <InputField name="bhk" label="BHK" type="number" placeholder="3" />
            <div className="flex items-center justify-start gap-4 text-sm">
              <button
                onClick={() => setBHK(3)}
                className="px-3 py-1 font-bold rounded-md bg-myyellow text-myblack"
              >
                3
              </button>
              <button
                onClick={() => setBHK(2.5)}
                className="px-3 py-1 font-bold rounded-md bg-myyellow text-myblack"
              >
                2.5
              </button>
            </div>
            <InputField
              name="bathrooms"
              label="Bathrooms"
              type="number"
              placeholder="2"
            />
            <div className="flex items-center justify-start gap-4 text-sm">
              <button
                onClick={() => setBathrooms(3)}
                className="px-3 py-1 font-bold rounded-md bg-myyellow text-myblack"
              >
                3
              </button>
              <button
                onClick={() => setBathrooms(2)}
                className="px-3 py-1 font-bold rounded-md bg-myyellow text-myblack"
              >
                2
              </button>
            </div>
            <InputField
              name="furnished"
              label="Furnish type"
              type="text"
              placeholder="semi-furnished"
            />
            <div className="flex items-center justify-between text-sm">
              <button
                onClick={() => setFurnished("semi-furnished")}
                className="px-3 py-1 font-bold rounded-md bg-myyellow text-myblack"
              >
                semi-furnished
              </button>
              <button
                onClick={() => setFurnished("fully-furnished")}
                className="px-3 py-1 font-bold rounded-md bg-myyellow text-myblack"
              >
                fully-furnished
              </button>
              <button
                onClick={() => setFurnished("non-furnished")}
                className="px-3 py-1 font-bold rounded-md bg-myyellow text-myblack"
              >
                non-furnished
              </button>
            </div>
            <div className="mt-4 text-lg font-bold text-mywhite">
              Available:{" "}
              {availablity ? (
                <span className="font-bold text-mygreen">Yes</span>
              ) : (
                <span className="font-bold text-mypink">No</span>
              )}
            </div>
            <div className="flex items-center justify-start gap-4 text-sm">
              <button
                onClick={() => setAvailablity(true)}
                className="px-3 py-1 font-bold rounded-md bg-mygreen text-myblack"
              >
                Yes
              </button>
              <button
                onClick={() => setAvailablity(false)}
                className="px-3 py-1 font-bold rounded-md bg-mypink text-myblack"
              >
                No
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default FlatData;
