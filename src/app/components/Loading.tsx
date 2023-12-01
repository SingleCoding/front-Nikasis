import Logo from "./Logo";

export default function () {

  return (
    <div className="fixed flex items-center justify-center z-50 h-screen w-screen bg-transparent">
      <div style={{padding: "50px"}} className="animate-pulse py-16 flex items-center justify-center flex-col px-20 rounded-xl bg-black bg-opacity-80">
        <div className="pb-10 mt-2 sm:mb-0 flex items-center">
        <Logo color="white" /* brandOnly */ animateBrand animateIcon />
        </div>
      </div>
    </div>
  );
};