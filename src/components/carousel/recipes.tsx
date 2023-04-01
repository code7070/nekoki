import { Swiper, SwiperSlide } from "swiper/react";
import Section from "@/components/section";
import Recipe from "@/components/cards/recipe";

interface RecipeItem {
  title: string;
  [key: string]: any;
}

interface Recipes {
  title: string;
  list: Array<RecipeItem>;
}

export default function Recipes({ title, list }: Recipes) {
  return (
    <Section title={title}>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
        className="!-mx-4 sm:mx-0"
        slidesOffsetBefore={12}
        slidesOffsetAfter={12}
      >
        {list.map((item: RecipeItem, index) => (
          <SwiperSlide key={index}>
            <Recipe {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
