import React, {useState} from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Brands from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {
  CloseModalContainer,
  CloseModalView,
  CloseButton,
  TopContent,
  TopText,
  OptionsContainer,
  OptionContainer,
  OptionText,
  SearchContainer,
  SearchInput,
} from './styles';

export default function Transfer({navigation}) {
  const [contacts, setContacts] = useState([
    'Transferir para um novo contato',
    'Matheus Santos de Souza (Você)',
    'Eliezer Marques da Silva Neto',
    'Lucas Pereira Santos',
    'Raimundo Sales de Souza',
    'João Vitor de Oliveira',
  ]);
  const [showIcon, setShowIcon] = useState(true);
  const handleSearch = text => {
    if (!text) {
      setShowIcon(true);
      setContacts([
        'Transferir para um novo contato',
        'Matheus Santos de Souza (Você)',
        'Eliezer Marques da Silva Neto',
        'Lucas Pereira Santos',
        'Raimundo Sales de Souza',
        'João Vitor de Oliveira',
      ]);
      return;
    }
    setShowIcon(false);
    setContacts(
      contacts.filter(contact =>
        contact.toLowerCase().startsWith(text.toLowerCase()),
      ),
    );
  };
  return (
    <>
      <CloseModalContainer
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseModalView
          style={{flex: 1, backgroundColor: '#222', opacity: 0.3}}
        />
      </CloseModalContainer>
      <View style={{flex: 9, backgroundColor: '#FFF'}}>
        <TopContent>
          <CloseButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="close" size={35} color="#767676" />
          </CloseButton>

          <TopText>TRANSFERIR</TopText>
          <Brands name="cubes" size={35} color="#767676" />
        </TopContent>
        <SearchContainer>
          <SearchInput
            placeholder="Buscar Contato"
            style={{flex: 9}}
            onChangeText={handleSearch}
          />
          <Icon
            name="search"
            size={30}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              paddingRight: 10,
            }}
            color="#767676"
          />
        </SearchContainer>
        <OptionsContainer
          data={contacts}
          style={{
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: '#CCCCCC',
            marginTop: 20,
          }}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <OptionContainer
              key={item}
              style={{
                backgroundColor: index >= 1 && showIcon ? '#f7f7f7' : '#FFFFFF',
              }}>
              {index == 0 && showIcon && (
                <AntDesign name="adduser" size={28} color="#8d3dc8" />
              )}
              <OptionText>{item}</OptionText>

              <Icon name="keyboard-arrow-right" size={18} />
            </OptionContainer>
          )}
        />
      </View>
    </>
  );
}
