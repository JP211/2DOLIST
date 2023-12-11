import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: "#000",
        height: 115,
        marginTop: 20,
        shadowColor: "#76E2F6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
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