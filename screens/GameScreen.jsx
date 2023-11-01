
// !Packages
import { Pressable, Text, View } from "react-native"

// !Styles
import { gameStyles } from "../styles/gameStyles"

//next we want to write a function that generates a random number
//then we will want to compare the input from the user with that random number
//this will probably be inside a while loop because we need the value to persist

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
