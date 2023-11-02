
// !Packages
import Title from "../components/Title"
import { Text, View } from "react-native"
import { useEffect, useState } from "react"
import PrimaryButton from "../components/PrimaryButton"

// !Styles
import { gameStyles } from "../styles/gameStyles"

export default function GameScreen({ userNumber, setCurrentScreen }) {

    const [count, setCount] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        if (count == 5) {
            return
        }
        let randNum
        if (count == 0) {
            randNum = generateRandomNumber(1, 99)
        }
        if (randNum < userNumber) {
            setCount(prevCount => prevCount + 1)
            setError("Too Low")
            console.log("Too Low")
        }
        else if (randNum > userNumber) {
            setCount(prevCount => prevCount + 1)
            setError("Too High")
            console.log("Too High")
        }
        else {
            console.log("You got it!!!")
            setError("")
        }
        console.log("random number: ", randNum)
    }, [userNumber])

    const generateRandomNumber = (min, max) => {
        const randomNumber = Math.random()
        const scaledNumber = randomNumber * (max - min + 1) + min
        const finalNumber = Math.floor(scaledNumber)
        return finalNumber
    }

    return (
        <View style={gameStyles.gameContainer}>
            <Title>{userNumber}</Title>
            <View>
                <Text style={gameStyles.title}>{error}</Text>
            </View>
            <View style={gameStyles.buttonViews}>
                <PrimaryButton
                    content={"Try Again"}
                    buttonStyles={gameStyles.button}
                    textStyles={gameStyles.buttonText}
                    onPress={() => setCurrentScreen(0)}
                />
            </View>
        </View>
    )
}
