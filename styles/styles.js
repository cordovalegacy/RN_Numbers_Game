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
        width: "90%",
        backgroundColor: "#000041",
        height: 120,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
        flex: .20
    },
    buttonLayout: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        margin: "auto"
    },
    buttonViews: {
        flex: 1,
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
        alignSelf: "stretch",
        width: "100%"
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
    errorText: {
        color: "red",
        fontWeight: 500,
        paddingBottom: 10,
        textAlign: "center"
    }
})