
// !Components
import { TextInput, View, Text, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"

// !Styles
import { appStyles } from "../styles/styles"

export default function StartGameScreen() {

    const [numberInput, setNumberInput] = useState("")
    const [error, setError] = useState("")
    const errorText = "Please enter a number from 1 to 99"

    //text is event built in to React Native
    const numberInputHandler = (text) => {
        console.log("look at me: ", text)
        setNumberInput(text)
    }

    const hardReset = () => {
        resetNumberInput()
        resetErrorState()
    }

    const resetNumberInput = () => {
        setNumberInput("")
    }

    const resetErrorState = () => {
        setError("")
    }

    const submitNumberInput = () => {
        numberValidator(numberInput)
        alertHandler()
    }

    const alertHandler = () => {
        Alert.alert(
            "Success!!", //title
            "You have submitted a guess", //message
                { //button
                    text: "OK",
                    onPress: () => console.log("OK Pressed")
                }
        )
    }

const numberValidator = (num) => {
    if (num < 1 || num > 99) {
        setError(errorText)
        return
    }
    else {
        resetErrorState()
    }
    resetNumberInput()
}

return (
    <View style={appStyles.inputLayout}>
        <TextInput
            style={appStyles.input}
            maxLength={2}
            keyboardType={"number-pad"}
            onChangeText={numberInputHandler}
            value={numberInput}
        />
        <View style={appStyles.buttonLayout}>
            <View style={appStyles.buttonViews}>
                <PrimaryButton
                    content={"Reset"}
                    buttonStyles={appStyles.button}
                    textStyles={appStyles.buttonText}
                    onPress={hardReset}
                />
            </View>
            <View style={appStyles.buttonViews}>
                <PrimaryButton
                    content={"Submit"}
                    buttonStyles={appStyles.button}
                    textStyles={appStyles.buttonText}
                    onPress={submitNumberInput}
                />
            </View>
        </View>
        <Text style={appStyles.errorText}>{error}</Text>
    </View>
)
}
