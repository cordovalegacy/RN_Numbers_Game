
// !Components
import { View, ImageBackground, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import { useState } from 'react'

// !Styles
import { appStyles } from './styles/appStyles'

export default function App() {

  const [userNumber, setUserNumber] = useState(null)
  const [currentScreen, setCurrentScreen] = useState(0)

  const startGameHandler = (chosenNumber) => {
    setUserNumber(chosenNumber)
    setCurrentScreen(1)
  }

  let screen = <StartGameScreen startGameHandler={startGameHandler} />

  if (currentScreen === 1) {
    screen = <GameScreen userNumber={userNumber} setCurrentScreen={setCurrentScreen} />
  }
  else if (currentScreen === 0) {
    screen = <StartGameScreen startGameHandler={startGameHandler} />
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
