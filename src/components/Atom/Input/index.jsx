const Input = ({ ...props }) => {
  return (
    <input
      type="text"
      className="w-full rounded-md outline-red-flix border border-red-flix bg-black/90 text-white py-4 px-6"
      {...props}
    />
  );
};

export default Input;
