import React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  const [previsao, setPrevisao] = useState(0);
  const [cidade, setCidade] = useState(0);

  async function buscaCidade(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,forecast,description,max,min,date&key=e1d77565&city_name=${cidade},SP`);
    setPrevisao(response.data.forecast[0]);
  }

  return (
      <View style={styles.container}>
          <Text style={styles.title}> Previsão do Tempo </Text>

          <Text style={styles.textBlock}>Informe sua Cidade:</Text>
          <TextInput style={styles.input}
            placeholder='Cidade...'
            onChangeText={data=>setCidade(data)}
          />
            
          <TouchableOpacity style={styles.btn} onPress={buscaCidade}>
            <Text style={styles.textbtn}>Buscar</Text>
          </TouchableOpacity>	 
          
            <Tempo data={previsao}/>   
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center'
  },
  title: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    fontWeight: 'bold',
	  marginTop: 60,
    marginBottom: 30
  },	
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center'
  },
  textBlock: {
    fontSize: 20,
	  justifyContent: 'center',
    marginBottom: 15
  },
  btn: {
	  width: '80%',
  	marginTop: 10,
  	marginBottom: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderBottomColor: 'black'
  },
  textbtn: {
	  fontSize: 20,
	  textAlign: 'center'
  },
});