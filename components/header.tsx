import Image from "next/image";
import { Button } from "./ui/button";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  return (
    <div className="bg-white w-full min-h-[100px] flex flex-row justify-between items-center px-30 shadow-xl">
        <Image src="/mipk.png" alt="mipk_logo" width={110} height={0}/>
        <h3 className="text-[var(--dark-blue)]">Информационная система <span className="text-[var(--dark-gray)]">«ЭДО»</span></h3>
        <Button variant="icon" size="lg">
            Выйти из системы 
            <FiLogOut className="scale-150" style={{ strokeWidth: 2.5 }}/>
        </Button>
    </div>
  )
}