"use client";

import { CameraIcon } from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const filePickerRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const captionRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  function addImageToPost(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();

    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      const result = readerEvent?.target?.result;

      if (typeof result === "string") {
        setSelectedFile(result);
      } else {
        console.error("Invalid file type");
      }
    };
  }

  async function uploadPost() {
    if (loading) {
      return;
    }

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current?.value,
      username: session?.user?.name,
      profileImg: session?.user?.image,
      timeStamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile as string, "data_url").then(
      async (snapshot) => {
        const downLoadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downLoadUrl,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  }

  return (
    <div className="relative">
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
          className="max-w-xl w-[90%] h-[400px] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 outline-none rounded-md shadow-md"
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <div className="max-w-fit h-[100%]">
                <img
                  onClick={() => setSelectedFile(null)}
                  src={selectedFile}
                  alt="image-photo"
                  className="w-full max-h-[250px] object-cover cursor-pointer"
                />
              </div>
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current?.click()}
                className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              maxLength={150}
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center w-full focus:ring-0"
              ref={captionRef}
            />
            <button
              disabled={!selectedFile || loading}
              onClick={uploadPost}
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UploadModal;
