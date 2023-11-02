
// !Packages
import { Pressable, Text, View } from "react-native"

// !Styles
import { gameStyles } from "../styles/gameStyles"
import Title from "../components/Title"
import { useEffect, useState } from "react"

//next we want to write a function that generates a random number
//then we will want to compare the input from the user with that random number
//this will probably be inside a while loop because we need the value to persist

export default function GameScreen({ userNumber }) {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if(count == 0){
            const randNum = generateRandomNumber(1, 99)
        }
        setCount(prevCount => prevCount + 1)
        if(randNum < userNumber){
            console.log("Try again")
        }


    }, [userNumber])

    const generateRandomNumber = (min, max) => {
        const randomNumber = Math.random()
        const scaledNumber = randomNumber * (max - min + 1) + min
        const finalNumber = Math.floor(scaledNumber)
        return finalNumber
    }

    return (
        <View style={gameStyles.gameContainer}>
            <Title>Opponent's Guess</Title>
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
