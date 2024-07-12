import { Meta, Story, Canvas, Source } from "@storybook/addon-docs";
import { ImageRevealCards } from "./ImageRevealCards";
import img from "../../../assets/images/shop.png";
import img2 from "../../../assets/images/donate.png";
import img3 from "../../../assets/images/explore.png";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "SHOP",
            link: "#",
            size: "medium-4",
            imageback: img,
            Hovercolors: "green",
          },
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "DONATE",
            link: "#",
            size: "medium-4",
            imageback: img2,
            Hovercolors: "green",
          },
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "EXPLORE",
            link: "#",
            size: "medium-4",
            imageback: img3,
            Hovercolors: "green",
          },
        ],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        data: [
          {
            contentname:
              "Програма ПРООН із підвищення стійкості та відновлення ",
            btnlabel: "Читати далі",
            link: "#",
            size: "medium-4",
            imageback: img,
            Hovercolors: "green",
          },
          {
            contentname:
              "Програма ПРООН із підвищення стійкості та відновлення ",
            btnlabel: "Читати далі",
            link: "#",
            size: "medium-4",
            imageback: img2,
            Hovercolors: "green",
          },
          {
            contentname:
              "Програма ПРООН із підвищення стійкості та відновлення ",
            btnlabel: "Читати далі",
            link: "#",
            size: "medium-4",
            imageback: img3,
            Hovercolors: "green",
          },
        ],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        data: [
          {
            contentname: "الألم هو الحب نفسه",
            btnlabel: "متجر",
            link: "#",
            size: "medium-4",
            imageback: img,
            Hovercolors: "green",
          },
          {
            contentname: "الألم هو الحب نفسه",
            btnlabel: "يتبرع",
            link: "#",
            size: "medium-4",
            imageback: img2,
            Hovercolors: "green",
          },
          {
            contentname: "الألم هو الحب نفسه",
            btnlabel: "يكتشف",
            link: "#",
            size: "medium-4",
            imageback: img3,
            Hovercolors: "green",
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        data: [
          {
            contentname: "နာကျင်မှုကအချစ်ပါဘဲ",
            btnlabel: "ဆိုင်",
            link: "#",
            size: "medium-4",
            imageback: img,
            Hovercolors: "green",
          },
          {
            contentname: "နာကျင်မှုကအချစ်ပါဘဲ",
            btnlabel: "လှူဒါန်းပါ။",
            link: "#",
            size: "medium-4",
            imageback: img2,
            Hovercolors: "green",
          },
          {
            contentname: "နာကျင်မှုကအချစ်ပါဘဲ",
            btnlabel: "စူးစမ်းပါ။",
            link: "#",
            size: "medium-4",
            imageback: img3,
            Hovercolors: "green",
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        data: [
          {
            contentname: "痛みは愛そのものです",
            btnlabel: "店",
            link: "#",
            size: "medium-4",
            imageback: img,
            Hovercolors: "green",
          },
          {
            contentname: "痛みは愛そのものです",
            btnlabel: "寄付",
            link: "#",
            size: "medium-4",
            imageback: img2,
            Hovercolors: "green",
          },
          {
            contentname: "痛みは愛そのものです",
            btnlabel: "見る",
            link: "#",
            size: "medium-4",
            imageback: img3,
            Hovercolors: "green",
          },
        ],
      };
      return japaneseText;
    default:
      const dummy = {
        data: [
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "SHOP",
            link: "#",
            size: "medium-4",
            imageback: img,
            Hovercolors: "green",
          },
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "DONATE",
            link: "#",
            size: "medium-4",
            imageback: img2,
            Hovercolors: "green",
          },
          {
            contentname:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
            btnlabel: "EXPLORE",
            link: "#",
            size: "medium-4",
            imageback: img3,
            Hovercolors: "green",
          },
        ],
      };
      return dummy;
  }
};

export default { 
  title: "Patterns/Card grids/Image reveal cards"
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <ImageRevealCards data={caption.data} label={caption.label} {...args}></ImageRevealCards>;
}

export const ImageRevealCardsStory = Template.bind({});
ImageRevealCardsStory.args = {
};

ImageRevealCardsStory.parameters = {
  docs: {
    description: {
      component: `

# Image Reveal Cards

This is just collection of the [Featured card](/docs/components-ui-components-cards-image-reveal-card--image-reveal-card)

<Canvas>
  <Story name="Image reveal cards">
    {(args, { globals: { locale, accent } }) => {
      const caption = getCaptionForLocale(locale);
      return (
        <ImageRevealCards
          data={caption.data}
          label={caption.label}
          {...args}
        ></ImageRevealCards>
      );
    }}
  </Story>
</Canvas>

###

### Usage

- Copy the HTML from the canvas
- Include the CSS and JS resource defined in the Image reveal card
- Include the dist/css/components/image-reveal-cards.min.css file

`,
    },
  },
};