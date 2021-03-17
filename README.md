# react-screenshot-frame

easily frame screenshots with custom frames, emulating terminal windows, browsers etc

![Demo](https://i.imgur.com/lTLo4BY.png)

## Usage

```javascript
import { ScreenshotFrame } from "react-screenshot-frame";

<ScreenshotFrame variant="macOS-dark" windowPadding="10px" shadow={false}>
    <span>It has Dark Mode!</span>
</ScreenshotFrame>;
```

## Props

| Name          | Optional | Type                | Default      |
| ------------- | -------- | ------------------- | ------------ |
| variant       | `yes`    | FrameVariant        | `macOS-dark` |
| shadow        | `yes`    | boolean             | `true`       |
| windowPadding | `yes`    | string              | `0px`        |
| style         | `yes`    | React.CSSProperties |              |
| children      | `yes`    | React.ReactElement  |              |

## Current Themes (FrameVariant)

-   macOS-dark
-   macOS-light
-   macOS-classic
