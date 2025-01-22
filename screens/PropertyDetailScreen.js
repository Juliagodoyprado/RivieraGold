import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Button, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PropertyDetailScreen({ route, navigation }) {
  const { property } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const handleContactSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados de contato
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={property.image} style={styles.image} />
        <Text style={styles.name}>{property.name}</Text>
        <Text style={styles.description}>{property.description}</Text>
        <Button title="Contato" onPress={() => setModalVisible(true)} color="#000" />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contato</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={contactName}
              onChangeText={setContactName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={contactEmail}
              onChangeText={setContactEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              value={contactPhone}
              onChangeText={setContactPhone}
              keyboardType="phone-pad"
            />
            <View style={styles.buttonRow}>
              <Button title="Enviar" onPress={handleContactSubmit} color="#000" />
              <View style={styles.buttonSpacer} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#000" />
            </View>
          </View>
        </View>
      </Modal>
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
  contentContainer: {
    paddingTop: 100, // Ajusta a margem superior para mover o conteúdo para baixo
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 16, // Adiciona bordas arredondadas
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonSpacer: {
    width: 10, // Espaçamento entre os botões
  },
});