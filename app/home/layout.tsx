import Header from "@/components/header";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-tl from-[#dfe8ff] to-[#7b96f7] min-h-svh w-full">
        <Header />
        {children}
    </div>
  );
}