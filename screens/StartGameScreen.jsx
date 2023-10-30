
// !Components
import { TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

// !Styles
import { appStyles } from "../styles/styles"

export default function StartGameScreen() {
    return (
        <View style={appStyles.inputLayout}>
            <TextInput style={appStyles.input} maxLength={2} keyboardType={"number-pad"}/>
            <View style={appStyles.buttonLayout}>
                <PrimaryButton content={"Reset"} buttonStyles={appStyles.button} textStyles={appStyles.textStyles} />
                <PrimaryButton content={"Submit"} buttonStyles={appStyles.button} textStyles={appStyles.textStyles} />
            </View>
        </View>
    )
}
