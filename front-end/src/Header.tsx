const Header = () => {
  return (
    <div className="bg-[#141614]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />
        <button className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Header;
