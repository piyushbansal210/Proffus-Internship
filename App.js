import { StatusBar as SB } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import Router from './source/navigation';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Black: require('./source/assets/fonts/Nunito-Black.ttf'),
    Bold: require('./source/assets/fonts/Nunito-Bold.ttf'),
    ExtraBold: require('./source/assets/fonts/Nunito-ExtraBold.ttf'),
    ExtraLight: require('./source/assets/fonts/Nunito-ExtraLight.ttf'),
    Light: require('./source/assets/fonts/Nunito-Light.ttf'),
    Medium: require('./source/assets/fonts/Nunito-Medium.ttf'),
    Regular: require('./source/assets/fonts/Nunito-Regular.ttf'),
    SemiBold: require('./source/assets/fonts/Nunito-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Router />
      <SB style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
