"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { firebaseConfig } from "@/firebase/config";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export default function Home() {
  const router = useRouter();
  const [loginState, setLoginState] = useState(false);
  function signInWithGoogle() {
    setLoginState(true);
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        setLoginState(false);
      });
  }

  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <button
        onClick={() => {
          loginState! ? {} : signInWithGoogle();
        }}
        className="px-8 py-2 z-10 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
      >
        Login With Google &nbsp;
        <Image
          className="inline"
          src="/google.png"
          width={25}
          height={25}
          alt="google logo"
        ></Image>
      </button>
    </div>
  );
}
