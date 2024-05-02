import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StoryList } from './StoryList/StoryList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingRight:5,
    paddingLeft:5,

  },
});
