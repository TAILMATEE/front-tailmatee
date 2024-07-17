import logo from "../assets/img/logo.svg";

export const Nav = () => {
  return (
    <nav className="w-full h-14 bg-white flex items-center m-6">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="w-[41px] h-[41px] mr-2.5" />
        <h1 className="font-sansita text-h3 text-blue">tailmatee</h1>
      </div>
    </nav>
  );
};
