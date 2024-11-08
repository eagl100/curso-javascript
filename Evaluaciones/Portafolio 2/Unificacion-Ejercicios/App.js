import React from 'react';
import { StyleSheet, Button, Text, View, Image, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home">
          {({ navigation }) => (
            <LinearGradient style={styles.container} colors={["#7FFF00", "#00FFFF"]}>
              <Image
                source={require('./assets/logoanimado.gif')}
                style={styles.logoQuinchao}
                resizeMode="contain"
              />
              <Text style={styles.text}>Municipalidad de Quinchao</Text>
              <Text style={styles.smallText}>Departamento del medioambiente</Text>
              
              <View style={styles.buttonContainer}>
                {/*
                <Button 
                  title="Presiona aqui"
                  onPress={() => Alert.alert('Boton simple presionado')}
                />
                
                <TouchableHighlight
                  onPress={() => Alert.alert('Alerta', 'Contenido de la alerta')}
                  underlayColor="#cce7cc"
                  style={styles.touchableButton}
                >
                  <Text style={styles.touchableButtonText}>Presiona Aquí</Text>
                </TouchableHighlight>
                */}

                <Pressable
                  onPress={() => navigation.navigate('Inicio')}
                  style={styles.pressableButton}
                >
                  <Text style={styles.pressableButtonText}>Ir a Inicio</Text>
                </Pressable>
              </View>

              <View style={styles.bottomImageContainer}>
                <Image
                  source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x27.max-600x600.format-webp.webp' }}
                  style={styles.googleLogo}
                  resizeMode="contain"
                />
              </View>
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
    color: 'green',
    fontSize: 14,
    fontWeight: '600',
  },
  logoQuinchao: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  googleLogo: {
    width: 100,
    height: 100,
  },
  bottomImageContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  touchableButton: {
    padding: 10,
    backgroundColor: '#19CC98',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  touchableButtonText: {
    color: '#fff',
  },
  pressableButton: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  pressableButtonText: {
    color: '#fff',
  },
});
