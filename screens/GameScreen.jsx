
// !Packages
import { Pressable, Text, View } from "react-native"

// !Styles
import { gameStyles } from "../styles/gameStyles"

export default function GameScreen() {
    return (
        <View style={gameStyles.gameContainer}>
            <Text>Opponent's Guess</Text>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                <Pressable android_ripple={{ color: "#000041" }}>
                    <Text>+</Text>
                </Pressable>
            </View>
            <View>
                <Pressable android_ripple={{ color: "#000041" }}>
                    <Text>-</Text>
                </Pressable>
            </View>
        </View>
    )
}
