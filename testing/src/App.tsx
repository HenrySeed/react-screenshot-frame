import React from "react";
import "./App.css";
import { ScreenshotFrame } from "react-screenshot-frame";

function App() {
    const panelStyle: React.CSSProperties = {
        margin: "20px ",
        display: "inline-block",
        width: "400px",
        verticalAlign: "top",
    };

    return (
        <div className="App">
            <div
                style={{
                    width: "890px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "10vh",
                    marginBottom: "10vh",
                }}
            >
                <ScreenshotFrame
                    variant="macOS-dark"
                    windowPadding="0px 15px"
                    style={panelStyle}
                >
                    <span style={{ fontFamily: "monospace" }}>
                        It has Dark Mode!
                    </span>
                </ScreenshotFrame>

                <ScreenshotFrame
                    style={{ ...panelStyle, width: "400px" }}
                    variant="macOS-light"
                    windowPadding="10px"
                >
                    <span style={{ fontFamily: "sans-serif" }}>
                        It can have shadows
                    </span>
                </ScreenshotFrame>
                <ScreenshotFrame
                    style={panelStyle}
                    variant="macOS-light"
                    windowPadding="10px"
                    shadow={false}
                >
                    <span style={{ fontFamily: "sans-serif" }}>
                        Or no shadows
                    </span>
                </ScreenshotFrame>

                <ScreenshotFrame
                    style={panelStyle}
                    variant="macOS-classic"
                    windowPadding="10px"
                >
                    <span style={{ fontFamily: "sans-serif" }}>
                        It can even do mac classic
                    </span>
                </ScreenshotFrame>
                <ScreenshotFrame
                    style={panelStyle}
                    variant="windows-10-light"
                    windowPadding="10px"
                >
                    <span style={{ fontFamily: "sans-serif", padding: "12px" }}>
                        It can be Windows 10
                    </span>
                </ScreenshotFrame>
                <ScreenshotFrame
                    style={panelStyle}
                    variant="windows-10-dark"
                    windowPadding="10px"
                >
                    <span style={{ fontFamily: "sans-serif", padding: "12px" }}>
                        Even windows 10 dark mode
                    </span>
                </ScreenshotFrame>
                <ScreenshotFrame
                    style={panelStyle}
                    variant="windows-98"
                    windowPadding="10px"
                >
                    <span style={{ fontFamily: "sans-serif", padding: "12px" }}>
                        It has some of that good good 98 energy
                    </span>
                </ScreenshotFrame>
                <ScreenshotFrame
                    style={panelStyle}
                    variant="windows-XP"
                    windowPadding="20px"
                >
                    <span style={{ fontFamily: "sans-serif", padding: "12px" }}>
                        But can it play Crisis?
                    </span>
                </ScreenshotFrame>
            </div>
        </div>
    );
}

export default App;
