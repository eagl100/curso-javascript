import React from 'react';
import { StyleSheet, Text, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {({ navigation }) => (
            <LinearGradient colors={['#7FFF00', '#00FFFF']} style={styles.container}>
              <Image
                source={require('./assets/LOG_AMBIENTE.gif')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>Municipalidad de Quinchao</Text>
              <Text style={styles.smallText}>Departamento del medioambiente</Text>
              <Pressable
                style={styles.pressableButton}
                onPress={() => navigation.navigate('Inicio')}
              >
                <Text style={styles.pressableText}>Ir a Inicio</Text>
              </Pressable>
            </LinearGradient>
          )}
        </Stack.Screen>
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'green',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  pressableText: {
    color: 'white',
    fontSize: 16,
  },
});


