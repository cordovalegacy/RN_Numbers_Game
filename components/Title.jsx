
// !Packages
import { Text } from "react-native"

// !Styles
import { gameStyles } from "../styles/gameStyles"

export default function Title({ children }) {
    return (
        <Text style={gameStyles.title}>{children}</Text>
    )
}
