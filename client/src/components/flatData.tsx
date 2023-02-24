import { useRole } from "@/context/rolte";
import { Formik } from "formik";
import * as Yup from "yup";
import DropdownSelect from "./dropDownSelect";
import InputField from "./inputField";

function FlatData() {
  const options = [
    { value: "non-furnished", label: "non-furnished" },
    { value: "semi-furnished", label: "semi-furnished" },
    { value: "fully-furnished", label: "fully-furnished" },
  ];
  return (
    <section className="flex-col justify-start gap-2 mt-6">
      <Formik
        initialValues={{
          bhk: 3,
          bathrooms: 2,
          furnished: "",
          availablity: false,
        }}
        validationSchema={Yup.object({
          bhk: Yup.number().required(),
          bathrooms: Yup.number().required(),
          furnished: Yup.string().required(),
          availablity: Yup.boolean().required(),
        })}
        onSubmit={(values) => {}}
      >
        {(formik) => (
          <form
            className="flex flex-col justify-start gap-2"
            onSubmit={formik.handleSubmit}
          >
            <InputField name="bhk" label="BHK" type="number" placeholder="3" />
            <InputField
              name="bathrooms"
              label="Bathrooms"
              type="number"
              placeholder="2"
            />
            <DropdownSelect label="Select Furnish Type" name="dropdown" options={options} />
            <button
              type="submit"
              className="px-6 py-1 mt-4 text-xl font-bold rounded-md text-myblack bg-mygreen"
            >
              + Add Data
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default FlatData;
