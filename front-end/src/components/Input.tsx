const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
    {...props}
      className="w-[350px] rounded-sm bg-white px-2 py-2.5 text-xs outline-none text-[#32343E] placeholder-[#32343E]"
    ></input>
  );
};

export default Input;
