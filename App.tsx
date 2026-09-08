import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do código</Text>
          <Text style={styles.headerSub}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name='person' size={20} color="#2f2d2c"></Ionicons>
        </View>
      </View>

      <View style={styles.content}>
          <View>
            <Text style={styles.contentText}>Bom dia!</Text>
            <Text style={styles.contentSub}>Que tal um café hoje?</Text>
          </View>  


          <View style={styles.featured}>
            <Image source={require('./assets/coffee.jpg')} style={styles.image}></Image>

            <Text>Cappucino Especial</Text>
            <Text>Cremoso e delicioso</Text>
            <Text>R$ 12,90</Text>
      </View>  
      </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  header:{
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerTitle:{
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  headerSub:{
    fontSize: 14,
    color: '#9d9d9b',
    marginTop: 4
  },

  avatarPlaceholder:{
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },

  content:{
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 24,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },

  contentText:{
    fontSize: 32,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  contentSub:{
    fontSize: 16,
    color: '#9d9d9b',
    marginTop: 8
  },

  featured:{
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom:32,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.05,
    elevation: 4
  },

  image:{
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  }
})