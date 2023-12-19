import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <SafeAreaView>
     <View>
      <Text>Kya hal hai Bhai</Text>
     </View>
    </SafeAreaView>
    </NavigationContainer>
  );
}


export default App;
