import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const Login = ({ navigation }) => {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {

    if (
      usuario.toLowerCase() === 'jhonny' &&
      senha === '123'
    ) {

      navigation.navigate('Menu');

    } else {

      alert('Usuário ou senha incorretos!');

    }

  };

  return (

    <View style={styles.container}>

      <View style={styles.loginBox}>

        <Text style={styles.title}>
          Login
        </Text>

        <Text style={styles.label}>
          Usuario
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
          placeholderTextColor="#777777"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777777"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <View style={styles.buttonArea}>

          <Button
            title="ENTRAR"
            onPress={handleLogin}
          />

        </View>

      </View>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#FFFFFF',
  },

  loginBox: {
    width: '100%',
    maxWidth: 400,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 7,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },

  buttonArea: {
    width: '100%',
  },

});

export default Login;
