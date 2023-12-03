import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: "#0e2149",
        height: 115,
        marginTop: 52,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 25,
        color: "white",
        margin: 8,
    },
    img: {
        height: 25,
        width: 25,
        margin: 8,
    },
});