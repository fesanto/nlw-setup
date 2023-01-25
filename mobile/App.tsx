import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Loading } from './src/assets/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
  });
  //para garantir que as fontes estarão carregadas quando da renderização e da exibição do app. Então o loading só aparecerá se as fontes não forem carregadas.
  if (!fontsLoaded) {
    return(
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oi, Fernanda. Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
  }
});
