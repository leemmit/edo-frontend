import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { LoginForm } from "@/components/shared/login-form"

export default function Home() {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="absolute right-95">
            <ModeToggle/>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
