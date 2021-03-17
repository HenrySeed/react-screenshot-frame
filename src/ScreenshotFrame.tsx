import React from "react";

const frameStyles = [
    {
        name: "macOS-dark",
        windowStyle: {
            borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.2)",
            minWidth: "200px",
            minHeight: "200px",
            backgroundColor: "#191919",
            boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.2)",
            color: "#FFFFFF",
        },
        header: (
            <div
                style={{
                    padding: "12px",
                    width: "100%",
                }}
            >
                <span
                    style={{
                        backgroundColor: "#ff5c5b",
                        height: "12px",
                        width: "12px",
                        marginRight: "9px",
                        borderRadius: "15px",
                        display: "inline-block",
                    }}
                ></span>
                <span
                    style={{
                        backgroundColor: "#ffbc4e",
                        height: "12px",
                        width: "12px",
                        marginRight: "9px",
                        borderRadius: "15px",
                        display: "inline-block",
                    }}
                ></span>
                <span
                    style={{
                        backgroundColor: "#00ca59",
                        height: "12px",
                        width: "12px",
                        marginRight: "9px",
                        borderRadius: "15px",
                        display: "inline-block",
                    }}
                ></span>
            </div>
        ),
    },
    {
        name: "macOS-light",
        windowStyle: {
            borderRadius: "7px",
            border: "1px solid rgba(0,0,0,0.15)",
            minWidth: "200px",
            minHeight: "200px",
            backgroundColor: "#FFFFFF",
            boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.2)",
        },
        header: (
            <div
                style={{
                    padding: "4px 7px",
                    width: "100%",
                    background: "linear-gradient(#e3e4e5, #cecece)",
                    borderRadius: "7px 7px 0px 0px",
                    boxSizing: "border-box",
                    borderBottom: "1px solid #a7a8a7",
                    borderTop: "1px solid #f4f5f4",
                }}
            >
                <span
                    style={{
                        backgroundColor: "#ff5c5b",
                        height: "12px",
                        width: "12px",
                        marginRight: "9px",
                        borderRadius: "15px",
                        display: "inline-block",
                    }}
                ></span>
                <span
                    style={{
                        backgroundColor: "#ffbc4e",
                        height: "12px",
                        width: "12px",
                        marginRight: "9px",
                        borderRadius: "15px",
                        display: "inline-block",
                    }}
                ></span>
                <span
                    style={{
                        backgroundColor: "#00ca59",
                        height: "12px",
                        width: "12px",
                        marginRight: "9px",
                        borderRadius: "15px",
                        display: "inline-block",
                    }}
                ></span>
            </div>
        ),
    },
    {
        name: "macOS-classic",
        windowStyle: {
            border: "2px solid #2b2b2b",
            minWidth: "200px",
            minHeight: "200px",
            backgroundColor: "#FFFFFF",
        },
        header: (
            <div
                style={{
                    border: "2px solid #2b2b2b",
                    padding: "4px",
                    margin: "-2px",
                    height: "17px",
                }}
            >
                <span
                    style={{
                        border: "2px solid #2b2b2b",
                        height: "12px",
                        width: "12px",
                        display: "inline-block",
                    }}
                ></span>
                <div
                    style={{
                        display: "inline-block",
                        width: "calc(100% - 44px)",
                        margin: "0px 6px",
                        verticalAlign: "top",
                    }}
                >
                    <div
                        style={{
                            borderTop: "2px solid rgb(43, 43, 43)",
                            verticalAlign: "top",
                            marginBottom: "1px",
                            width: "100%",
                        }}
                    ></div>
                    <div
                        style={{
                            borderTop: "2px solid rgb(43, 43, 43)",
                            verticalAlign: "top",
                            marginBottom: "1px",
                            width: "100%",
                        }}
                    ></div>
                    <div
                        style={{
                            borderTop: "2px solid rgb(43, 43, 43)",
                            verticalAlign: "top",
                            marginBottom: "1px",
                            width: "100%",
                        }}
                    ></div>
                    <div
                        style={{
                            borderTop: "2px solid rgb(43, 43, 43)",
                            verticalAlign: "top",
                            marginBottom: "1px",
                            width: "100%",
                        }}
                    ></div>
                    <div
                        style={{
                            borderTop: "2px solid rgb(43, 43, 43)",
                            verticalAlign: "top",
                            marginBottom: "1px",
                            width: "100%",
                        }}
                    ></div>
                    <div
                        style={{
                            borderTop: "2px solid rgb(43, 43, 43)",
                            verticalAlign: "top",
                            marginBottom: "1px",
                            width: "100%",
                        }}
                    ></div>
                </div>
                <span
                    style={{
                        border: "2px solid #2b2b2b",
                        float: "right",
                        height: "12px",
                        width: "12px",
                        display: "inline-block",
                    }}
                >
                    <span
                        style={{
                            border: "2px solid #2b2b2b",
                            height: "6px",
                            width: "6px",
                            position: "absolute",
                            marginTop: "-2px",
                            marginLeft: "-2px",
                        }}
                    ></span>
                </span>
            </div>
        ),
    },
];

type FrameVariant = "macOS-dark" | "macOS-light" | "macOS-classic";

export function ScreenshotFrame({
    variant,
    shadow,
    windowPadding,
    style,
    children,
}: {
    variant?: FrameVariant;
    shadow?: boolean;
    windowPadding?: string;
    style?: React.CSSProperties;
    children?: React.ReactElement;
}) {
    const styles = frameStyles.find(
        (val) => val.name === (variant || "macOS-dark")
    );

    return (
        <span
            style={{
                ...styles.windowStyle,
                ...style,
                boxShadow:
                    shadow !== false ? styles.windowStyle.boxShadow : "none",
            }}
        >
            {styles.header}
            <div
                style={{
                    padding: windowPadding,
                }}
            >
                {children}
            </div>
        </span>
    );
}
