import LoginPage from "./pages/login/loginPage";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-tl from-[#dfe8ff] to-[#7b96f7] flex min-h-svh w-full items-center justify-center">
        <div className="w-[1280px]">
          <LoginPage/>
        </div>
      </div>
    </>
  );
}
