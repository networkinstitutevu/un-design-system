import { Meta, Story } from "@storybook/addon-docs";

export default {  
  title: "Getting started/Browser support",
  parameters: {
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  }
};

export const BrowserSupportStory = `
# Browser support

UNDP Design system's components are compatible and tested in major modern browsers. Browsers and devices we support as follow.

### Desktop

List of desktop browsers and OS supported.

| Browser | Version                           | OS             |
| ------- | --------------------------------- | -------------- |
| Chrome  | Latest stable and 2 lower version | Windows, macOS |
| Safari  | Latest stable and 2 lower version | macOS          |
| Firefox | Latest stable and 2 lower version | Windows        |
| Edge    | Latest stable and 2 lower version | Windows        |

### Mobile

List of mobile browsers and OS supported.

| Browser | Version       | OS              |
| ------- | ------------- | --------------- |
| Chrome  | Latest stable | Android and iOS |
| Safari  | Latest stable | Android and iOS |
`;

