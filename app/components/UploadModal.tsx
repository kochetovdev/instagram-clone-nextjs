"use client";

import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";
import Modal from "react-modal";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 outline-none rounded-md shadow-md"
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UploadModal;
