import React from "react";
import "./App.css";
import { ScreenshotFrame } from "react-screenshot-frame";

function App() {
    const panelStyle: React.CSSProperties = {
        margin: "20px ",
        display: "inline-block",
        width: "400px",
    };

    return (
        <div className="App">
            <div
                style={{
                    width: "890px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "10vh",
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
            </div>
        </div>
    );
}

export default App;
