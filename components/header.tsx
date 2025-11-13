'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <div className="bg-white w-full min-h-[100px] flex flex-row justify-between items-center px-20 shadow-xl">
        <Image src="/mipk.png" alt="mipk_logo" width={110} height={1} className="xl:w-26"/>
        <h3 className="text-[var(--dark-blue)] text-3xl 2xl:text-5xl">Информационная система <span className="text-[var(--dark-gray)]">«ЭДО»</span></h3>
        <Button variant="icon" size="lg" onClick={() => router.replace("/login")}>
            Выйти из системы 
            <FiLogOut className="scale-150" style={{ strokeWidth: 2.5 }}/>
        </Button>
    </div>
  )
}