import { StyleSheet, Text, View, Image } from 'react-native';
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
      <View style={styles.bottomContainer}>
      <Image
        source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x27.max-600x600.format-webp.webp' }}
        style={styles.smallLogo}
        resizeMode="contain"
       />
      </View>
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
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
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
  },
  smallLogo:  {
    width: 100,
    height: 100,
  }
});
