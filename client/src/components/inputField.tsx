import { ErrorMessage, Field } from "formik";

function InputField({
  name,
  label,
  type,
  placeholder,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  const renderError = (message: string | undefined) => (
    <p className="pl-4 mt-1 text-base text-mypink">{message}</p>
  );
  return (
    <div className="flex flex-col gap-1">
      <label
        className="pl-4 text-xl font-semibold text-mywhite/70"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="h-[4rem]">
        <Field
          name={name}
          type={type}
          className="w-full px-4 py-1 text-lg font-medium border-2 border-gray-400 rounded-full outline-none placeholder:text-mywhite/40 text-mywhite bg-myblack"
          placeholder={placeholder}
        />
        <ErrorMessage name={name} render={renderError} />
      </div>
    </div>
  );
}

export default InputField;
