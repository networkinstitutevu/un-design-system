import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { BlockquoteComponent } from "./BlockquoteComponent";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        blockquote:
          "“UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion.”",
        cite: "—Firstname Lastname",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        blockquote:
          "“Мудра людина залишається на задньому плані й саме завдяки цьому опиняється попереду інших.”",
        cite: "—Лао Цзи",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        blockquote:
          "“يعمل برنامج الأمم المتحدة الإنمائي في حوالي 170 دولة ومنطقة ، مما يساعد على تحقيق القضاء على الفقر ، والحد من عدم المساواة والإقصاء”",
        cite: "-الاسم الاول الاسم الاخير",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        blockquote:
          "“UNDP သည်နိုင်ငံနှင့်နယ်မြေ ၁၇၀ ခန့်တွင်အလုပ်လုပ်ပြီးဆင်းရဲမွဲတေမှုပပျောက်ရေး၊ မညီမျှမှုများနှင့်ဖယ်ထုတ်မှုလျော့ချရန်ကူညီသည်။”",
        cite: "—ပထမနာမည် မျိုးနွယ်အမည်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        blockquote:
          "“UNDPは約170の国と地域で活動しており、貧困の撲滅と不平等と排除の削減を支援しています”",
        cite: "—名前苗字",
      };
      return japaneseText;
    default:
      return {
        blockquote:
          "“UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion.”",
        cite: "—Firstname Lastname",
      };
  }
};

export default {
  title: "Components/UI components/Text/Callout",
  component: {BlockquoteComponent},
  argTypes: {
    Colors: {
      name: "Accent color",
      options: ["default", "global", "yellow", "red", "green", "blue", "gray"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Colors: "default",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Callout</h1>

              <p>The Callout component indicates that the enclosed text is an extended quotation or information. It is rendered visually by a surrounding box. <code>Blockquote</code> and <code>Cite</code> atoms tags are used for creating this section.</p>

              <Canvas>
                <Story name="Callout">
                  {(args, { globals: { locale, accent } }) => {
                    const caption = getCaptionForLocale(locale);
                    args.accent = accent;
                    return (
                      <BlockquoteComponent
                        blockquoteText={caption.blockquote}
                        citeText={caption.cite}
                        Colors={accent}
                        {...args}
                      ></BlockquoteComponent>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>

              <ul>
                  <li>Take HTML from the HTML tab in canvas whichever background color you like.</li>
                  <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/blockquotecomp.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/blockquotecomp.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p>NA</p>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale, accent } }) => {
  const caption = getCaptionForLocale(locale);
  args.accent = accent;
  return (
    <BlockquoteComponent
      blockquoteText={caption.blockquote}
      citeText={caption.cite}
      Colors={accent}
      {...args}
    ></BlockquoteComponent>
  );
}

export const BlockquoteStory = Template.bind({});
BlockquoteStory.storyName = "Callout";
