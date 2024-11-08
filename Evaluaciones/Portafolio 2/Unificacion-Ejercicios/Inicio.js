import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo</Text>
      <Button
        title="Volver a Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Inicio;
