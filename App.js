
// !Components
import { View, ImageBackground } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'

// !Styles
import { appStyles } from './styles/styles'

export default function App() {
  return (
    <View style={appStyles.container}>
      <ImageBackground style={appStyles.image} source={require('./assets/numbers_react.jpg')} resizeMode='cover'>
        <StartGameScreen />
      </ImageBackground>
    </View>
  )
}
