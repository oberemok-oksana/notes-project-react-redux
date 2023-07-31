import { CategoryType } from "../types";

const imageProps = {
  Task: { src: "./public/images/icons8-cart-30.png", alt: "Task" },
  "Random Thought": {
    src: "./public/images/icons8-mind-30.png",
    alt: "random thought",
  },
  Idea: { src: "./public/images/icons8-light-on-30.png", alt: "idea" },
  Quote: { src: "./public/images/icons8-get-quote-30.png", alt: "quote" },
};

type CategoryImgPropsType = {
  category: CategoryType;
};

const CategoryImg = ({ category }: CategoryImgPropsType) => {
  return <img src={imageProps[category].src} alt={imageProps[category].alt} />;
};

export default CategoryImg;
