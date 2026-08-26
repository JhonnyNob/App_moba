import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

const Cliente = ({ navigation }) => {

  const [usermat, setUsermat] = useState('');
  const [usernome, setUsernome] = useState('');

  const handleGravar = () => {

    alert(
      'NA PRÓXIMA AULA IREMOS GRAVAR OS REGISTROS EM UMA BASE DE DADOS!'
    );

  };

  const handleVoltar = () => {

    navigation.navigate('Menu');

  };

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image
          style={styles.imagem}
          source={require('./assets/logo.png')}
          resizeMode="contain"
        />

        <Text style={styles.label1}>
          SISTEMA DE CONTROLE DE ALMOXARIFADO
        </Text>

        <View style={{ width: 10 }} />

      </View>

      <View>

        <Text style={styles.label2}>
          CADASTRO
        </Text>

      </View>

      <View style={styles.inputContainer1}>

        <View style={styles.inputGroup}>

          <Text style={styles.labelentrada}>
            Matrícula
          </Text>

          <TextInput
            style={[styles.input, { width: 150 }]}
            value={usermat}
            onChangeText={setUsermat}
          />

        </View>

        <View style={styles.inputGroup}>

          <Text style={styles.labelentrada}>
            Nome
          </Text>

          <TextInput
            style={[styles.input, { width: 300 }]}
            value={usernome}
            onChangeText={setUsernome}
          />

        </View>

      </View>

      <View style={styles.buttonContainer}>

        <View style={styles.buttonArea}>

          <Button
            title="Gravar"
            onPress={handleGravar}
          />

        </View>

        <View style={styles.buttonArea}>

          <Button
            title="Voltar"
            color="#c62e70"
            onPress={handleVoltar}
          />

        </View>

      </View>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'lightblue',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  imagem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },

  label1: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },

  label2: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },

  labelentrada: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  inputContainer1: {
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 15,
    padding: 10,
  },

  inputGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  input: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#111202',
    backgroundColor: '#FFFFFF',
    textAlign: 'left',
    marginBottom: 10,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonArea: {
    width: 150,
    marginBottom: 25,
  },

});

export default Cliente;
