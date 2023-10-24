import {
  StyleSheet, View,
} from 'react-native';

import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
      <View style={styles.container}>
        <ViewImageScreen image={require('./app/assets/chair.jpg')}/>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {

    }
});
