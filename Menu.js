import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

const Menu = ({ navigation }) => {

  const handleCliente = () => {

    navigation.navigate('Cliente');

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

      <Text style={styles.label2}>
        TELA DE MENU
      </Text>

      <View style={styles.buttonContainer}>

        <View style={styles.buttonArea}>

          <Button
            title="Cadastro"
            onPress={handleCliente}
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
    marginBottom: 20,
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

  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonArea: {
    width: 250,
    marginBottom: 25,
  },

});

export default Menu;
