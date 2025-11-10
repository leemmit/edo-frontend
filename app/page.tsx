import LoginPage from "./pages/loginPage";

export default function Home() {
  return (
    <>
      <div className="bg-[var(--grad-1)] flex min-h-svh w-full items-center justify-center">
        <div className="w-full">
          <LoginPage/>
        </div>
      </div>
    </>
  );
}
