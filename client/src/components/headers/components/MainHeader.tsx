import Logo from "./Logo";

const MainHeader = () => {
  return (
    <div className="hidden lg:flex bg-white shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Logo />
      </div>
    </div>
  );
};

export default MainHeader;
