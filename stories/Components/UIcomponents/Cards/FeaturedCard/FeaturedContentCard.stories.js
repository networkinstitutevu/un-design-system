import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { FeaturedContentCard } from './FeaturedContentCard';
import img from '../../../../assets/images/card2.jpg';

export default {
  title: 'Components/UI components/Cards/Featured card',
  argTypes: {
    image: {
      name: 'Image',
      options: ['image', 'color'],
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'Size variant',
      options: ['large', 'medium', 'small'],
      control: { type: 'inline-radio' },
    },
    hovercolor: {
      name: 'Hover accent color',
      options: ['global', 'yellow', 'red', 'green', 'blue'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    image: 'image',
    size: 'medium',
    hovercolor: 'global',
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <FeaturedContentCard
      data={caption.featuredcontentdata}
      headertext={caption.headertext}
      {...args}
    ></FeaturedContentCard>
  );
};

export const FeaturedContentCardStory = Template.bind({});

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
          },
        ],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        featuredcontentdata: [
          {
            contenttile: "ТЕГ ВМІСТУ",
            contentname: "Програма ПРООН із підвищення стійкості та відновлення",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
            button: "ЧИТАТИ ДАЛІ",
            imgback: img,
          },
        ],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        featuredcontentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            imgback: img,
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        featuredcontentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            imgback: img,
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        featuredcontentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            imgback: img,
          },
        ],
      };
      return japaneseText;
    default:
      const dummy = {
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
          },
        ],
      };
      return dummy;
  }
};

// Documentation content
FeaturedContentCardStory.parameters = {
  docs: {
    description: {
      component: `
# Feature Content Card

The Featured Content Card components are cards with information and/or image.

### Overview

The Featured Content Card component defines a card of information with some items- Tag, Title, Image, Paragraph, and CTA Link. It uses a grid system to manage the different sizes. It is a multi-usage component that creates boxes that are usually teasing some kind of content.

#### When to use:

When a card with data, CTA link and image is to be displayed.

### Formatting

#### Default

It consists of a grid with title, paragraph, cta link, and/or image.

### Content

There are two types of featured card components: Featured Card with Image and Featured Card without Image. It consists of three sizes: Small, Default, and Large.

1. Small
2. Default
3. Large

### Behaviors

#### States

There are two states in Featured Cards: Default, Hover.

1. Default: It shows the title, paragraph, CTA link, and image for Featured Card with Image and title, paragraph, and CTA Link for Featured Card without Image.
2. Hover: In hover state, when the mouse hovers over the Featured Card with Image, image is displayed. While for Featured Cards without Image, when the mouse hovers over it, yellow color is displayed without image.

### Usage

- From the control tab of canvas, choose Image control either Image or Color, Size control either Large, Medium or Small and Hover color from Yellow, Red, Green or Blue.
- Copy the HTML from the HTML tab and include the css and js files listed below.
- If you want to add left-right animation then add data-viewport=”true” attribute to your HTML element and include viewport.min.js.

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- Include dist/css/components/cta-link.min.css
- Include dist/css/components/featured-content-card.min.css

#### JS:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js

### Interactions

- Hover state applies to the image only.
- By clicking on the CTA Link, the associated page is opened.

### Changelog

1.0 — Released component
`,
    },
  },
};