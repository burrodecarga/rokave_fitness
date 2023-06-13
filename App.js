import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FitnessContext } from './src/context/Context';
import StackNavigator from './src/screens/StackNavigator';

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator/>     
    </FitnessContext>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
