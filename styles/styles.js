import { StyleSheet } from "react-native"

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 4,
        shadowColor: "black",
        backgroundColor: "#0d47a1",
        marginHorizontal: 0,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5,
        backgroundColor: "#37474f"
    },
    inputLayout: {
        width: "90%"
    },
    buttonLayout: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        margin: "auto"
    },
    button: {
        flex: 1,
        height: 35,
        elevation: 4,
        shadowRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#ffc107",
        borderRadius: 12,
        marginHorizontal: 3
    },
    buttonText: {
        textAlign: "center",
        fontWeight: 10,
        borderRadius: 12
    },
    input: {
        borderBottomWidth: 2,
        elevation: 3,
        color: "#1e1e1e",
        height: 50,
        width: "100%",
        fontSize: 24,
        textAlign: "center",
        borderBottomColor: "#ffc107",
        marginVertical: 8,
        fontWeight: "bold",
        paddingHorizontal: 10,
        borderRadius: 5,
        color: "white"
    },
    image: {
        flex: 1,
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: "center",
        paddingTop: 50,
    },
})