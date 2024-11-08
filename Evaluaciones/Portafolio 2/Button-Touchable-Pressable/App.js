import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#7FFF00', '#00FFFF']}
      style={styles.container}
    >
      <Image
        source={require('./assets/LOG_AMBIENTE.gif')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Municipalidad de Quinchao</Text>
      <Text style={styles.smallText}>Departamento del medioambiente</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="PULSA AQUÍ"
          color="green"
          onPress={() => Alert.alert('Alerta desde Button')}
        />
      </View>

      <TouchableHighlight
        style={styles.touchableButton}
        underlayColor="#b2ff59"
        onPress={() => Alert.alert('Alerta desde TouchableHighlight')}
      >
        <Text style={styles.touchableText}>Presiona Aquí</Text>
      </TouchableHighlight>

      <Pressable
        style={styles.pressableButton}
        onPress={() => Alert.alert('Alerta desde Pressable')}
      >
        <Image
          source={{ uri: 'https://img.icons8.com/?size=512&id=17949&format=png' }}
          style={styles.icon}
        />
        <Text style={styles.pressableText}>Enviar</Text>
      </Pressable>
    </LinearGradient>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  touchableButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  touchableText: {
    color: 'white',
    fontSize: 16,
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
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  pressableText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
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
  }
});

