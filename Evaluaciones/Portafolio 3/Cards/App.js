import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Primera Tarjeta */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://i.scdn.co/image/ab6761610000e5eb4159f85a5a40c655380821da',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Hollywood Undead</Text>
        <Text style={styles.subtitle}>Grupo de Rapcore/Nu Metal</Text>
        <Text style={styles.description}>
        Hollywood Undead es una banda estadounidense de rapcore originaria de Los Ángeles (California). Lanzaron su álbum debut Swan Songs, el 2 de septiembre de 2008, y sus CD/DVD en vivo Desperate Measures, el 10 de noviembre de 2009.
        </Text>
      </View>

      {/* Segunda Tarjeta */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2010/12/23/3954.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Eminem</Text>
        <Text style={styles.subtitle}>Artista de rap y hip-hop</Text>
        <Text style={styles.description}>
        Marshall Bruce Mathers III, conocido artísticamente como Eminem, es un rapero, productor y actor estadounidense. Se le atribuye la popularización del hip hop en las clases medias y altas de Estados Unidos y es aclamado por la crítica como uno de los mejores raperos de todos los tiempos.​
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe0e8',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9, 
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    textAlign: 'justify',
  },
});
