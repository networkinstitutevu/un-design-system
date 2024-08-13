import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { TextBackground } from "./TextBackground";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        header: ["Global", <br />, "Impact"],
        description:
          "Our work in sustainable development, governance, and resilience building.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        header: ["Фінансування", <br />, "та виконання бюджету"],
        description:
          "Для виконання свого мандату ПРООН повністю покладається на добровільні внески держав-членів ООН, багатосторонніх організацій, приватного сектору та інших джерел у формі необмежених регулярних (основних) ресурсів і внесків, виділених для конкретної теми, програми чи проєкту.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        header: ["عالمي", <br />, "تأثير"],
        description:
          "عملنا في التنمية المستدامة والحوكمة وبناء القدرة على الصمود.",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        header: ["ကမ္ဘာလုံးဆိုင်ရာ", <br />, "ထိခိုက်မှု"],
        description:
          "စဉ်ဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်ရေး၊ အုပ်ချုပ်မှုနှင့် ခံနိုင်ရည်ရှိရေး တည်ဆောက်ရေးတို့တွင် ကျွန်ုပ်တို့၏ လုပ်ဆောင်မှုများ။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        header: ["グローバル", <br />, "影響"],
        description:
          "持続可能な開発、ガバナンス、およびレジリエンス構築における私たちの仕事。",
      };
      return japaneseText;
    default:
      return {
        header: ["Global", <br />, "Impact"],
        description:
          "Our work in sustainable development, governance, and resilience building.",
      };
  }
};

export default { 
  title: "Components/UI components/Text/Text background",
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Text Background</h1>

              <p>The Text Background block defines a section of information data with some items - title and description. <code>H2</code> and <code>H4</code> atom tags are used for creating this section.</p>

              <Canvas>
                <Story name="Text background">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <TextBackground
                        headerText={caption.header}
                        descriptionText={caption.description}
                      ></TextBackground>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>

              <ul>
                <li>Take HTML from the HTML tab in canvas.</li>
                <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textbackground.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textbackground.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p>Optional for viewport animation:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
              </ul>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <TextBackground
      headerText={caption.header}
      descriptionText={caption.description}
    ></TextBackground>
  );
}

export const TextBackgroundStory = Template.bind({});
TextBackgroundStory.storyName = "Text background";
