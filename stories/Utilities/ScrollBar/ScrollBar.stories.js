import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs';
import { ScrollBar } from './ScrollBar';

export default {
  title: 'Utilities/Scrollbars',
};

const Template = (args) => <ScrollBar {...args} />;

export const Scrollbars = Template.bind({});

Scrollbars.parameters = {
  docs: {
    description: {
      component: `
# Scrollbar

The Scrollbar component defines a scroll on a div or a container when the information is too long.

### Overview

A scrollbar is a bar usually present at the extreme right or at the bottom of the window. It is used to move the page contents up and down or left and right so that the information on the entire page is visible.

#### When to use:

When the contents of the page are hidden and need scrolling.

### Formatting

### Default

The Scrollbar is a small rectangular bar and the color of the bar shows the position of the content on the page.

### Behaviors

#### States

The scroll bars are of two types: Horizontal and Vertical

Horizontal:
The horizontal scroll bar is usually located at the bottom of the page. It enables the user to move the contents of the page either to the left or to the right.

Vertical:
A vertical scroll bar is usually at the extreme right end of the page. It enables the user to move the contents of the page up or down.

### Usage

- Add custom-scrollbar CSS class on the element which needs to have scrollbars. You can add height on the element for vertical scrollbar and width (higher than parent) on sub element for horizontal scrollbar.

### CSS and JS References

#### CSS:

Add the base style only, located at **dist/css/base-minimal.min.css**, no other css file required for this component.

#### JS:

NA

### Interactions

By clicking on the bar and scrolling it, the contents of the page are moved. As the contents of the page move, the color of the bar changes as well.

### Changelog

1.0 — Released component
`,
    },
  },
};