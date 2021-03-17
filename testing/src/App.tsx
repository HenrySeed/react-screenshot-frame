import React from "react";
import "./App.css";
import { ScreenshotFrame } from "react-screenshot-frame";

function App() {
    const panelStyle: React.CSSProperties = {
        marginBottom: "40px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
    };

    return (
        <div className="App">
            <div
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "fit-content",
                    marginTop: "10vh",
                }}
            >
                <ScreenshotFrame
                    variant="macOS-dark"
                    windowPadding="0px 10px"
                    style={panelStyle}
                >
                    <img src="./pic_2.png" alt="bite-me" width="650px" />
                </ScreenshotFrame>

                <ScreenshotFrame
                    style={{ ...panelStyle, width: "400px" }}
                    variant="macOS-light"
                    windowPadding="10px"
                >
                    <span style={{ fontFamily: "sans-serif" }}>
                        This has a shadow
                    </span>
                </ScreenshotFrame>
                <ScreenshotFrame
                    style={{ ...panelStyle, width: "400px" }}
                    variant="macOS-light"
                    windowPadding="10px"
                    shadow={false}
                >
                    <span style={{ fontFamily: "sans-serif" }}>
                        This has no shadow
                    </span>
                </ScreenshotFrame>

                <ScreenshotFrame
                    style={{ ...panelStyle, width: "400px" }}
                    variant="macOS-classic"
                    windowPadding="10px"
                >
                    <span style={{ fontFamily: "sans-serif" }}>
                        This is a test
                    </span>
                </ScreenshotFrame>
            </div>
        </div>
    );
}

export default App;
