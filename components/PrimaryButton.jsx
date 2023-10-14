
// !Components
import { Pressable, Text, View } from "react-native"

export default function PrimaryButton({ content, buttonStyles, textStyles }) {
    return (
        <View style={{width: "50%", height: 36, borderRadius: 12}}>
            <Pressable style={buttonStyles} android_ripple={{ color: "#000041" }}>
                <Text style={textStyles}>{content}</Text>
            </Pressable>
        </View>
    )
}
