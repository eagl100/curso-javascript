//Grupo: Exequiel Gallardo Y Brayllan Vidal
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  
      <Image
       source={{uri: 'https://industriamusical.com/wp-content/uploads/2023/06/Bad_Bunny_7488.jpg'} } 
        style={styles.Imagebadbunny}
        resizeMode='contain'
      />
    
      <Text style={styles.text}>Top 1 Bad Bunny </Text>
      <Text style={styles.smalltext}>50 canciones </Text>
        
      <Image
       source={{uri: 'https://www.encancha.cl/resizer/1gM1LNGfPuiV9st7931v4hqNZHo=/arc-photo-palco/arc2-prod/public/WP7TRUUONZH7PHT5X3XHGTJ6N4.png' }  }   
       style={styles.Imagepablo}
        resizeMode='contain'
      />
      <Text style={styles.text}>Top 2 Pablo Chille </Text>
      <Text style={styles.text}> 30 canciones </Text>
      <Image
       source={{uri: 'https://www.prensalibre.com/wp-content/uploads/2020/09/ozuna-03.jpg?quality=52'} } 
        style={styles.Imageozuna}
        resizeMode='contain'
      />
      <Text style={styles.text}>Top 3 Ozuna </Text>
      <Text style={styles.text}>31 canciones </Text>

      <Image
       source={{uri: 'https://www.parlante.cl/wp-content/uploads/2022/06/arcangel12.jpeg'} } 
        style={styles.Imagearcangel}
        resizeMode='contain'
      />
      <Text style={styles.text}>Top 4 arcangel </Text>
      <Text style={styles.text}>55 canciones </Text>
      <Image
       source={{uri: 'https://elcomercio.pe/resizer/v2/APPXJYLB45HGPOFGFHMPMHVA4Y.jpg?auth=7ee3cec94289b3a7e097e63f6fd7845fa8ae01a9a9ea4626b2d64a4a5fd94d64&width=1200&height=810&quality=90&smart=true'} } 
        style={styles.Imagedaddy}
        resizeMode='cover'
      />
      <Text style={styles.text}>Top 5 Daddy Yankee </Text>
      <Text style={styles.text}> 80 canciones </Text>
      <Pressable
        title='Agregar a Playlist'
        style={styles.pressableButton}
        onPress={()=>Alert.alert('Agregar a la Playlist','¿Desea agregar a la playlist?')}
       >
       <Image 
        source={{uri:'https://e7.pngegg.com/pngimages/589/452/png-clipart-apple-music-festival-itunes-computer-icons-music-icon-text-logo-thumbnail.png'}} 
        style={styles.icon}
      />
      <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
      <Pressable
        title='Favoritos'
        style={styles.pressableButton}
        onPress={()=>Alert.alert('Favoritos','¿Desea agregar algunos de estos artistas a favoritos?')}
       >
       <Image 
        source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'}} 
        style={styles.icon}
      />
      <Text style={styles.buttonText}>Favoritos</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imagebadbunny: {
    width: 200,  
    height: 200, 
    marginBottom: 5, 
  },
  Text: {
    fontSize: 40,
    fontWeight: '600',
    color: 'Blue',
    marginBottom: 5, 
  },
  smalltext: {
    color: 'Black',
    fontSize: 14,
    fontWeight: '600',
  },
  Imagepablo: {
    width: 100,  
    height: 100, 
    marginBottom: 20, 
  },
  Imagearcangel: {
    width: 50,  
    height: 50, 
    marginBottom: 20, 
  },  
  Imageozuna: {
    width: 50,  
    height: 50, 
    marginBottom: 20, 
  },
  Imagedaddy: {
    width: 50,  
    height: 50, 
    marginBottom: 20, 
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  imageButton:{
    width: 20,  
    height: 20, 
    marginBottom: 20, 
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    alignItems: 'center',
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText:{
    color: 'white'
  },
  
});










