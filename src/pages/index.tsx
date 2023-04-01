import { Inter } from "next/font/google";
import getServerSideProps from "@libs/theme-catcher";
import { setThemer } from "@/utils/utils";
import PageHead from "./PageHead";
import Profile from "@/components/profile";

const inter = Inter({ subsets: ["latin"] });

export { getServerSideProps };

export default function Home(props: object) {
  console.log({ props });

  const themer = setThemer;

  return (
    <>
      <PageHead />
      <div className="wrapper">
        <div className="neko-card neko-wrapper bg-white">
          <Profile />
          <div className="neko-inner">heheh</div>
        </div>
        <div className="neko-card bg-white">
          <div className="relative w-4 h-4">
            <div className="absolute left-0 top-0 bg-primary opacity-100 animate-ping w-4 h-4 rounded-full" />
            <div className="absolute left-0 top-0 bg-primary w-4 h-4 rounded-full" />
          </div>
          <div>Miaw! 248 Neko sedang memasak...</div>
        </div>
      </div>
    </>
  );
}
