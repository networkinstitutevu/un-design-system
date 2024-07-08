import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { CtaButton } from './CtaButton';

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'english':
      return { detail1: 'READ MORE' };
    case 'ukrainian':
      return { detail1: 'ЧИТАТИ ДАЛІ' };
    case 'arabic':
      return { detail1: 'اقرأ أكثر' };
    case 'burmese':
      return { detail1: 'ပိုပြီးဖတ်ပါ' };
    case 'japanese':
      return { detail1: '続きを読む' };
    default:
      return { detail1: 'READ MORE' };
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  args['button_option'] = args['Type'];
  delete args['Type'];
  return <CtaButton label={caption.detail1} {...args}></CtaButton>;
};

export const CtaButtonStory = Template.bind({});
CtaButtonStory.args = {
  Type: 'Primary',
  State: 'Active',
  Icon: 'Arrow',
};

// Documentation content
CtaButtonStory.parameters = {
  docs: {
    description: {
      component: `
# Buttons and Labels

A button describes what action will be performed when a user clicks or touches it.

### Overview

A button describes the call to action that will be performed when the user clicks/touches it. It has a label and an optional animation.

#### When to use:

- Buttons should be used as primary or secondary calls to actions
- Ideally, a page should have one or two primary buttons only. Other call-to-actions should be shown as secondary buttons
- Examples of buttons can be to “VIEW MORE” or “READ MORE” or “SIGN UP”
- If there are multiple choices for an action item, one default button should be active and the other buttons inactive

### Formatting

#### Default

There are multiple button types in our design system

1. Primary button with arrow and without arrows
2. Secondary buttons without the arrow
3. CTA links with and without expanding arrows
4. Chips

### Content

Button”s color and text indicate the default setting and call of action of the button.
Primary CTA: Dark Red: Default call of action button
Red: Hover overcall of action button
Gray: Disabled call of action button
Secondary Button: Blue-600: Default secondary button
Blue-400: Hover over the secondary button
Gray-400: Disabled secondary button

### Behaviors

#### States

The following size modifiers are available:

Primary CTA:
The Dark Red Primary button with an arrow is the default button displayed on the website with default breakpoint which indicates the main task to be completed.

CSS

The Red Primary button with an arrow is a hover over button with a default breakpoint which changes its appearance once a mouse hovers over it, even if it is not selected.

The Gray-400 Primary button is disabled with an arrow and default breakpoint which will be disabled if there is an error and the error needs to be cleared for abling it.

Secondary Buttons:
The Blue-600 Secondary Button is the default secondary button which is used as an alternative to the primary button. Its color is different from the Primary button as the viewers won’t get confused with the Primary button.

The Blue-400 Secondary button is a hover button that changes its appearance once the mouse hovers over it.

The Gray-400 Secondary button is in a disabled state and will require error corrections for enabling it to select the alternative option.

<Canvas>
  <Story name="Buttons">
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return <CtaButton label={caption.detail1} {...args}></CtaButton>;
    }}
  </Story>
</Canvas>

### Usage

- Copy the HTML from the HTML Tab of canvas for either Chips, CTA Button, and CTA Link from the controls.
- Include the CSS files listed below concerning the button you choose.

### CSS and JS References

#### CSS:

Add the base layout style from dist/css/base-minimal.min.css

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css

Use above CSS concerning CTA Button

#### JS:

NA

### Interactions

- The hover state is applied to the entire button.

### Changelog

1.0 — Released component
`,
    },
  },
};
