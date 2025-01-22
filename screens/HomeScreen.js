import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TextInput, Animated } from 'react-native';
import PropertyCard from '../components/PropertyCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const properties = [
  { id: '1', name: 'Casa na Riviera', description: 'Casa Terrea de alto padrão a venda em riviera de são lourenço lindissima com amplo espaço', image: require('../assets/casa-na-riviera.jpg') },
  { id: '2', name: 'Villagio na Riviera', description: 'Lindo Villagio a venda na riviera', image: require('../assets/villagio-na-riviera.jpg') },
  // Adicione mais imóveis conforme necessário
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [fadeAnim] = useState(new Animated.Value(0)); // Valor inicial para a opacidade

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = properties.filter(property =>
      property.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/imobiliaria-riviera-gold-logo.png')} style={styles.image} />
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar Imóveis"
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <FlatList
          data={filteredProperties}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PropertyCard
              property={item}
              onPress={() => navigation.navigate('PropertyDetail', { property: item })}
            />
          )}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Adicionar Imóvel"
            onPress={() => navigation.navigate('AddProperty')}
            color="#000" // Define a cor do botão como preto
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16, // Adiciona espaçamento abaixo do campo de pesquisa
    paddingHorizontal: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 16,
    width: '100%',
  },
});