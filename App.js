
// !Components
import { View, ImageBackground, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import { useState } from 'react'

// !Styles
import { appStyles } from './styles/appStyles'

export default function App() {

  const [userNumber, setUserNumber] = useState(null)

  const startGameHandler = (chosenNumber) => {
    setUserNumber(chosenNumber)
  }

  let screen = <StartGameScreen startGameHandler={startGameHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <View style={appStyles.container}>
      <ImageBackground style={appStyles.image} source={require('./assets/numbers_react.jpg')} resizeMode='cover'>
        <SafeAreaView style={appStyles.image}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
