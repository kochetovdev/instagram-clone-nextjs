"use client";

import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Upload Modal</h1>
      {open && <h1>The Modal is open</h1>}
    </div>
  );
};

export default UploadModal;
