import { Field } from "formik";

function DropdownSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
}) {
  return (
    <div>
      <label className="text-xl font-semibold text-mywhite/70" htmlFor={name}>
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        className="w-full px-4 py-1 text-lg font-medium border-2 border-gray-400 rounded-md outline-none text-mywhite bg-myblack"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="">
            {option.label}
          </option>
        ))}
      </Field>
    </div>
  );
}

export default DropdownSelect;
