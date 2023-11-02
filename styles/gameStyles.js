import { StyleSheet } from "react-native"

export const gameStyles = StyleSheet.create({
    gameContainer: {
        width: "90%",
        backgroundColor: "#0d47a1",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
        flex: .75,
        marginTop: 50
    },
    title: {
        color: "#ddb52f",
        fontSize: 24,
        textAlign: "center",
        borderWidth: 3,
        borderColor: "white",
        padding: 5,
        marginVertical: 5,
        borderRadius: 10
    },
    buttonViews: {
        marginTop: 10,
        height: 35,
        elevation: 4,
        shadowRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#ffc107",
        borderRadius: 16,
        marginHorizontal: 3,
        textAlign: "center"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
})

