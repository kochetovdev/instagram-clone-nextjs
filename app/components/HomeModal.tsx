"use client";

import { modalState } from "@/atom/modalAtom";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";

const HomeModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <PlusCircleIcon
      onClick={() => setOpen(true)}
      className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
    />
  );
};

export default HomeModal;
