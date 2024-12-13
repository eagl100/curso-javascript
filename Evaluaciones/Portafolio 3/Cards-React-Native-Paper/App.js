import React from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Tarjeta de Hollywood Undead */}
      <Card style={styles.card}>
        <Card.Title
          title="Artista N°1"
          subtitle="Género Musical: Rapcore, Nu Metal"
          left={(props) => <Avatar.Icon {...props} icon="music" style={styles.icon} />}
        />
        <Card.Content style={styles.cardContent}>
          <Title>Hollywood Undead</Title>
          <Paragraph>
            Hollywood Undead es una banda estadounidense de rapcore originaria de Los Ángeles (California). Lanzaron su álbum debut Swan Songs, el 2 de septiembre de 2008, y sus CD/DVD en vivo Desperate Measures, el 10 de noviembre de 2009.
          </Paragraph>
        </Card.Content>
        <View style={styles.imageContainer}>
          <Card.Cover
            source={{
              uri: 'https://i.scdn.co/image/ab6761610000e5eb4159f85a5a40c655380821da',
            }}
            style={styles.image}
          />
        </View>
        {/* Botones en la parte inferior */}
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={() => {
              Linking.openURL('https://open.spotify.com/intl-es/artist/0CEFCo8288kQU7mJi25s6E');
            }}
          >
            Spotify
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              Linking.openURL('https://es.wikipedia.org/wiki/Hollywood_Undead');
            }}
          >
            Más Info
          </Button>
        </Card.Actions>
      </Card>

      {/* Tarjeta de Eminem */}
      <Card style={styles.card}>
        <Card.Title
          title="Artista N°2"
          subtitle="Género Musical: Rap, Hip-Hop"
          left={(props) => <Avatar.Icon {...props} icon="music" style={styles.icon} />}
        />
        <Card.Content style={styles.cardContent}>
          <Title>Eminem</Title>
          <Paragraph>
            Marshall Bruce Mathers III, conocido artísticamente como Eminem, es un rapero, productor y actor estadounidense. Se le atribuye la popularización del hip hop en las clases medias y altas de Estados Unidos y es aclamado por la crítica como uno de los mejores raperos de todos los tiempos.
          </Paragraph>
        </Card.Content>
        <View style={styles.imageContainer}>
          <Card.Cover
            source={{
              uri: 'https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2010/12/23/3954.jpg',
            }}
            style={styles.image}
          />
        </View>
        {/* Botones inferiores */}
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={() => {
              Linking.openURL('https://open.spotify.com/intl-es/artist/7dGJo4pcD2V6oG8kP0tJRR');
            }}
          >
            Spotify
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              Linking.openURL('https://es.wikipedia.org/wiki/Eminem');
            }}
          >
            Más Info
          </Button>
        </Card.Actions>
      </Card>
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
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  cardContent: {
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  icon: {
    backgroundColor: '#a569bd',
  },
  actions: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
