import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#141614]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />
        
        <Link to="/login">
          <button className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
