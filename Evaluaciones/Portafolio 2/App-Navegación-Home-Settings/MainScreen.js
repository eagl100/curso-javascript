import React from'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione una opción</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.leftButton} onPress={() => navigation.navigate('Home')}>
            <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/previews/004/220/756/non_2x/home-silhouette-button-free-vector.jpg' }}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Home</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.rightButton} onPress={() => navigation.navigate('Settings')}>
            <Image
              source={{ uri: 'https://cdn.icon-icons.com/icons2/1458/PNG/512/settingsbutton_99706.png' }}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  leftButton: {
    padding: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  rightButton: {
    padding: 10,
    borderRadius: 5,
    marginLeft: 15,
  },
  buttonText: {
    fontSize: 18,
  },
  buttonImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default MainScreen;