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
        <Profile />
      </div>
    </>
  );
}
