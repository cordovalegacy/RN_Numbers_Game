
// !Components
import { Pressable, Text, View } from "react-native"

export default function PrimaryButton({ content, buttonStyles, textStyles, onPress }) {
    return (
        <View style={{width: "100%", height: 36, marginTop: -2, borderRadius: 12}}>
            <Pressable style={buttonStyles} android_ripple={{ color: "#000041" }} onPress={onPress}>
                <Text style={textStyles}>{content}</Text>
            </Pressable>
        </View>
    )
}
