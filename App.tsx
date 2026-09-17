import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CoffeeCard from './Components/CoffeeCard';
import CustomButton from './Components/CustomButton';
import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === "") {
      setMessage("Por favor, informe seu nome!")
    } else {
      setMessage(`Olá ${name}! Seu pedido foi recebido`)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Header></Header>
        {/* Header */}
        {/* Content */}
        <View style={styles.Main}>
          <View>
            <Text style={styles.MainTitle}>Bom Dia!</Text>
            <Text style={styles.MainSubtitle}>Que tal um café hoje?</Text>
          </View>

          <View style={styles.featured}>
            <Image
              source={require('./assets/coffee.jpg')} style={styles.image}>
            </Image>
            <Text style={styles.produto}>Cappucino Especial</Text>
            <Text style={styles.descricao}>Cremoso e delicioso</Text>
            <Text style={styles.valor}>R$ 12,90</Text>
          </View>

          <Text style={styles.sectionTitle}>Nosso Cardápio</Text>
          
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            <CoffeeCard name='Expresso' description='Puro e Forte' price='7,90'></CoffeeCard>
            <CoffeeCard name='Cappuccino' description='Clássico com espuma' price='12,90'></CoffeeCard>
            <CoffeeCard name='Late' description='Leite cremoso' price='11,50'></CoffeeCard>
            <CoffeeCard name='Mocha' description='Toque de chocolate' price='13,50'></CoffeeCard>
          </View>

          <View style={styles.orderSection}>
            <Text style={styles.questionName}>Qual é o seu nome?</Text>
            <TextInput placeholder='Digite seu nome' style={styles.input} value={name} onChangeText={setName}></TextInput>

            <CustomButton title='Fazer seu pedido' onPress={handleOrder}></CustomButton>
            {message !== '' && <Text style={styles.messageText}>{message}</Text>}
          </View>
        </View>
        {/* Content */}
        {/* Footer */}
        <Footer></Footer>
        {/* Footer */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7ff'
  },
  MainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: "#2f2d2c"
  },
  Main: {
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: 24,
    paddingBottom: 10,
  },
  MainSubtitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8,
    marginBottom: 16
  },
  featured: {
    backgroundColor: "#ffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  },
  produto: {
    fontSize: 20,
    fontWeight: '800',
    color: "#2f2d2c"
  },
  descricao: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },
  valor: {
    fontSize: 20,
    fontWeight: '800',
    color: "#c67c4e",
    marginTop: 12
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c",
    marginBottom: 16
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  orderSection: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    padding: 24,
    marginTop: 10
  },
  questionName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    width: "100%",
    paddingHorizontal: 20,
    height: 56,
    fontSize: 16
  },
  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c67c4e",
    marginTop: 20,
    alignItems: "center"
  }
}
)