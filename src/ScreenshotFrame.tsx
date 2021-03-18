import React, { CSSProperties } from "react";

const frameStyles: {
    name: string;
    windowStyle: CSSProperties;
    header: JSX.Element;
}[] = [
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
    {
        name: "windows-10-light",
        windowStyle: {
            boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.2)",
            border: "2px solid #FFFFFF",
            minWidth: "200px",
            minHeight: "200px",
        },
        header: (
            <div
                style={{
                    padding: "10px 20px 10px 7px",
                    height: "17px",
                    backgroundColor: "#FFF",
                    fontFamily: "sans-serif",
                    fontSize: "10pt",
                }}
            >
                <span style={{ float: "right" }}>
                    <span
                        style={{
                            borderBottom: "2px solid #666",
                            width: "15px",
                            marginTop: "-5px",
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    ></span>
                    <span
                        style={{
                            border: "2px solid #666",
                            width: "8px",
                            height: "8px",
                            marginLeft: "30px",
                            marginTop: "-5px",
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    ></span>
                    <span>
                        <span
                            style={{
                                borderBottom: "2px solid #666",
                                width: "15px",
                                marginLeft: "30px",
                                marginTop: "-5px",
                                display: "inline-block",
                                verticalAlign: "middle",
                                transform: "rotate(45deg)",
                                marginRight: "-35px",
                            }}
                        ></span>
                        <span
                            style={{
                                borderBottom: "2px solid #666",
                                width: "15px",
                                marginLeft: "20px",
                                marginTop: "-5px",
                                display: "inline-block",
                                verticalAlign: "middle",
                                transform: "rotate(-45deg)",
                            }}
                        ></span>
                    </span>
                </span>
            </div>
        ),
    },
    {
        name: "windows-10-dark",
        windowStyle: {
            boxShadow: "5px 5px 20px 0px rgba(0,0,0,0.2)",
            minWidth: "200px",
            minHeight: "200px",
            background: "black",
            color: "white",
        },
        header: (
            <div
                style={{
                    padding: "10px 20px 10px 7px",
                    height: "17px",
                    fontFamily: "sans-serif",
                    fontSize: "10pt",
                }}
            >
                <span style={{ float: "right" }}>
                    <span
                        style={{
                            borderBottom: "1px solid #fff",
                            width: "15px",
                            marginTop: "-5px",
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    ></span>
                    <span
                        style={{
                            border: "1px solid #fff",
                            width: "8px",
                            height: "8px",
                            marginLeft: "30px",
                            marginTop: "-5px",
                            display: "inline-block",
                            verticalAlign: "middle",
                        }}
                    ></span>
                    <span>
                        <span
                            style={{
                                borderBottom: "1px solid #fff",
                                width: "15px",
                                marginLeft: "30px",
                                marginTop: "-5px",
                                display: "inline-block",
                                verticalAlign: "middle",
                                transform: "rotate(45deg)",
                                marginRight: "-35px",
                            }}
                        ></span>
                        <span
                            style={{
                                borderBottom: "1px solid #fff",
                                width: "15px",
                                marginLeft: "20px",
                                marginTop: "-5px",
                                display: "inline-block",
                                verticalAlign: "middle",
                                transform: "rotate(-45deg)",
                            }}
                        ></span>
                    </span>
                </span>
            </div>
        ),
    },
    {
        name: "windows-98",
        windowStyle: {
            minWidth: "200px",
            minHeight: "200px",
            background: "#c0c0c0",
            border: "4px outset",
            borderColor: "#eee #0a0a0a #0a0a0a #eee",
            boxSizing: "border-box",
        },
        header: (
            <div
                style={{
                    margin: "4px",
                    padding: "8px 4px",
                    height: "17px",
                    background: "linear-gradient(90deg, #000080, #1084d0)",
                }}
            >
                <span style={{ float: "right" }}>
                    <span
                        style={{
                            background: "#c0c0c0",
                            border: "3px outset",
                            borderColor: "#dfdfdf #0a0a0a #0a0a0a #dfdfdf",
                            marginRight: "1px",
                        }}
                    >
                        <span
                            style={{
                                margin: "10px 7px 5px 3px",
                                width: "10px",
                                display: "inline-block",
                                verticalAlign: "middle",
                                borderBottom: "4px solid #000",
                            }}
                        ></span>
                    </span>
                    <span
                        style={{
                            background: "#c0c0c0",
                            border: "3px outset",
                            borderColor: "#dfdfdf #0a0a0a #0a0a0a #dfdfdf",
                            marginRight: "5px",
                        }}
                    >
                        <span
                            style={{
                                border: "2px solid #000",
                                borderTopWidth: "4px",
                                margin: "0px 3px 5px 3px",
                                width: "10px",
                                height: "8px",
                                display: "inline-block",
                                verticalAlign: "middle",
                            }}
                        ></span>
                    </span>

                    <span
                        style={{
                            background: "#c0c0c0",
                            border: "3px outset",
                            borderColor: "#dfdfdf #0a0a0a #0a0a0a #dfdfdf",
                        }}
                    >
                        <span style={{ margin: "6px 2px 0px 2px" }}>
                            <span
                                style={{
                                    borderBottom: "2px solid #000",
                                    width: "15px",
                                    marginTop: "-2px",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    transform: "rotate(45deg)",
                                    marginRight: "-35px",
                                }}
                            ></span>
                            <span
                                style={{
                                    borderBottom: "2px solid #000",
                                    width: "15px",
                                    marginLeft: "20px",
                                    marginTop: "-2px",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    transform: "rotate(-45deg)",
                                }}
                            ></span>
                        </span>
                    </span>
                </span>
            </div>
        ),
    },
    {
        name: "windows-XP",
        windowStyle: {
            minWidth: "200px",
            minHeight: "200px",
            background: "#ece9d8",
            margin: "0px",
            border: "4px solid",
            borderColor: "#125be9 #001ea0 #001ea0 #125be9",
            borderRadius: "20px 20px 0px 0px",
            boxSizing: "border-box",
        },
        header: (
            <div
                style={{
                    padding: "10px 8px",
                    height: "17px",
                    background: "linear-gradient(180deg, #0053ee, #0066ff)",
                    borderRadius: "10px 10px 0px 0px",
                    borderBottom: "2px solid #003dd7",
                    borderTop: "2px solid #057bf8",
                    margin: "-4px -4px 0px -4px",
                }}
            >
                <span style={{ float: "right" }}>
                    <span
                        style={{
                            padding: "3px 2px",
                            marginRight: "3px",
                            borderRadius: "4px",
                            border: "1px solid white",
                            background:
                                "radial-gradient(farthest-corner at 1px 1px, #94adf7, #0548df)",
                        }}
                    >
                        <span
                            style={{
                                margin: "10px 7px 5px 3px",
                                width: "10px",
                                display: "inline-block",
                                verticalAlign: "middle",
                                borderBottom: "4px solid #FFF",
                            }}
                        ></span>
                    </span>
                    <span
                        style={{
                            padding: "3px 2px",
                            marginRight: "5px",
                            borderRadius: "4px",
                            border: "1px solid white",
                            background:
                                "radial-gradient(farthest-corner at 1px 1px, #94adf7, #0548df)",
                        }}
                    >
                        <span
                            style={{
                                border: "2px solid #FFF",
                                borderTopWidth: "4px",
                                margin: "0px 3px 5px 3px",
                                width: "10px",
                                height: "8px",
                                display: "inline-block",
                                verticalAlign: "middle",
                            }}
                        ></span>
                    </span>

                    <span
                        style={{
                            padding: "3px 2px",
                            borderRadius: "4px",
                            border: "1px solid white",
                            background:
                                "radial-gradient(farthest-corner at 1px 1px, #eea48f, #af3111)",
                        }}
                    >
                        <span style={{ margin: "6px 2px 0px 2px" }}>
                            <span
                                style={{
                                    borderBottom: "3px solid #FFF",
                                    width: "15px",
                                    marginTop: "-2px",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    transform: "rotate(45deg)",
                                    marginRight: "-35px",
                                }}
                            ></span>
                            <span
                                style={{
                                    borderBottom: "3px solid #FFF",
                                    width: "15px",
                                    marginLeft: "20px",
                                    marginTop: "-2px",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    transform: "rotate(-45deg)",
                                }}
                            ></span>
                        </span>
                    </span>
                </span>
            </div>
        ),
    },
];

type FrameVariant =
    | "macOS-dark"
    | "macOS-light"
    | "macOS-classic"
    | "windows-10-dark"
    | "windows-10-light"
    | "windows-98"
    | "windows-XP";

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
                boxShadow: shadow !== false ? styles.windowStyle.boxShadow : "",
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
