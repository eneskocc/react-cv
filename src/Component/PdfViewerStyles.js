
import {
    Font,
    StyleSheet,
} from "@react-pdf/renderer";
export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#112131",
        borderBottomStyle: "solid",
        alignItems: "stretch",
    },
    detailColumn: {
        flexDirection: "column",
        flexGrow: 9,
        textTransform: "uppercase",
    },
    linkColumn: {
        flexDirection: "column",
        flexGrow: 2,
        alignSelf: "flex-end",
        justifySelf: "flex-end",
    },
    name: {
        fontSize: 24,
        fontFamily: "Lato Bold",
    },
    subtitle: {
        fontSize: 10,
        justifySelf: "flex-end",
        fontFamily: "Lato",
    },
    link: {
        fontFamily: "Lato",
        fontSize: 10,
        color: "black",
        textDecoration: "none",
        alignSelf: "flex-end",
        justifySelf: "flex-end",
    },
});

export const titleStyles = StyleSheet.create({
    title: {
        fontFamily: "Lato Bold",
        fontSize: 14,
        marginBottom: 10,
        textTransform: "uppercase",
    },
});

export const listStyles = StyleSheet.create({
    item: {
        flexDirection: "row",
        marginBottom: 5,
    },
    bulletPoint: {
        width: 10,
        fontSize: 10,
    },
    itemContent: {
        flex: 1,
        fontSize: 10,
        fontFamily: "Lato",
    },
});

export const skilsStyles = StyleSheet.create({
    title: {
        fontFamily: "Lato Bold",
        fontSize: 11,
        marginBottom: 10,
    },
    skills: {
        fontFamily: "Lato",
        fontSize: 10,
        marginBottom: 10,
    },
});

export const educationStyles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    school: {
        fontFamily: "Lato Bold",
        fontSize: 10,
    },
    degree: {
        fontFamily: "Lato",
        fontSize: 10,
    },
    candidate: {
        fontFamily: "Lato Italic",
        fontSize: 10,
    },
});


export const expStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        "@media max-width: 400": {
            paddingTop: 10,
            paddingLeft: 0,
        },
    },
    entryContainer: {
        marginBottom: 10,
    },
    date: {
        fontSize: 11,
        fontFamily: "Lato Italic",
    },
    detailContainer: {
        flexDirection: "row",
    },
    detailLeftColumn: {
        flexDirection: "column",
        marginLeft: 10,
        marginRight: 10,
    },
    detailRightColumn: {
        flexDirection: "column",
        flexGrow: 9,
    },
    bulletPoint: {
        fontSize: 10,
    },
    details: {
        fontSize: 10,
        fontFamily: "Lato",
    },
    headerContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: "column",
        flexGrow: 9,
    },
    rightColumn: {
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "flex-end",
        justifySelf: "flex-end",
    },
    title: {
        fontSize: 11,
        color: "black",
        textDecoration: "none",
        fontFamily: "Lato Bold",
    },
});

export const resumeStyles = StyleSheet.create({
    page: {
        padding: 30,

    },
    container: {
        flex: 1,
        flexDirection: "row",
        "@media max-width: 400": {
            flexDirection: "column",
        },
    },
    image: {
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: "column",
        width: 170,
        paddingTop: 30,
        paddingRight: 15,
        "@media max-width: 400": {
            width: "100%",
            paddingRight: 0,
        },
        "@media orientation: landscape": {
            width: 200,
        },
    },
    footer: {
        fontSize: 12,
        fontFamily: "Lato Bold",
        textAlign: "center",
        marginTop: 15,
        paddingTop: 5,
        borderWidth: 3,
        borderColor: "gray",
        borderStyle: "dashed",
        "@media orientation: landscape": {
            marginTop: 10,
        },
    },
});



Font.register({
    family: "Lato",
    src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});

Font.register({
    family: "Lato Italic",
    src: "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf",
});

Font.register({
    family: "Lato Bold",
    src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});