import Logo from '../components/Logo';



export default function () {
  return (
    <main
    style={{ maxWidth: '100vw' }}
    className="sm:flex hidden min-h-screen relative scroll-smooth flex-col"
  >
    <div className="fixed flex items-center justify-center z-50 h-screen w-screen bg-opacity-60 bg-black">
      <div className="py-8 flex items-center justify-center flex-col px-20 rounded-xl animate-pulse	 text-white">
        <div className="pb-10 mt-2 sm:mb-0 flex items-center">
        <Logo color="white" /* brandOnly */ animateBrand animateIcon />
        </div>
        <div className="font-bold">لطفا با موبایل یا تبلت وارد سایت شوید</div>
      </div>
    </div>
  </main>
  );
}
