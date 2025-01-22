import * as React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddPropertyScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProperty = () => {
    // Aqui você pode adicionar a lógica para enviar os dados, se necessário
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/imobiliaria-riviera-gold-logo.png')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do imóvel"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.descriptionInput]} // Adiciona um estilo adicional para o campo de descrição
          placeholder="Descrição do imóvel"
          value={description}
          onChangeText={setDescription}
          multiline={true} // Permite múltiplas linhas
        />
        <Button title="Adicionar imóvel" onPress={handleAddProperty} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50, // Ajusta a posição vertical da seta de retorno
    left: 16,
    zIndex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 120, // Ajuste o tamanho conforme necessário
    height: 120, // Ajuste o tamanho conforme necessário
    resizeMode: 'contain',
  },
  formContainer: {
    marginTop: 20, // Adiciona margem superior para mover os itens para baixo
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  descriptionInput: {
    height: 80, // Aumenta a altura do campo de descrição
  },
});