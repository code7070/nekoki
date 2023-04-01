import { Inter } from "next/font/google";
import getServerSideProps from "@libs/theme-catcher";
import { setThemer } from "@/utils/utils";
import PageHead from "./PageHead";
import Profile from "@/components/profile";
import Recipes from "@/components/carousel/recipes";

const recipes = [
  {
    title: "Potato & Fish BBQ Americano asdasdasdas",
    portion: 2,
    price: 38000,
    time: 45,
  },
  {
    title: "Potato & Fish BBQ  Americano asdasdasdas",
    portion: 2,
    price: 38000,
    time: 45,
  },
  {
    title: "Potato & Fish BBQ  Americano asdasdasdas",
    portion: 2,
    price: 38000,
    time: 45,
  },
];

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
            <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-1.5 h-1.5 bg-base-100 rounded-full" />
          </div>
          <div>Miaw! 248 Neko sedang memasak...</div>
        </div>
        <Recipes title="Resep Masakan Hari Ini" list={recipes} />
      </div>
    </>
  );
}
