import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {
  CancelText,
  CancelButton,
  TopContent,
  OptionsContainer,
  OptionContainer,
  SearchInput,
  Topic,
  TopicTitle,
  TopicDescription,
} from './styles';

export default function SearchModal({navigation}) {
  const [topics, setTopics] = useState([
    {
      title: 'Agora no nubank emite boletos?',
      description: 'Pagar Fatura',
    },
    {
      title: 'O Nubank agora é um banco?',
      description: 'NuConta',
    },
    {
      title: 'O Nubank possui um programa de fidelidade?',
      description: 'Rewards',
    },
    {
      title: 'O Nubank agora tem débito e saque?',
      description: 'Nuconta',
    },
    {
      title: 'O Nubank vai poder compartilhar meus dados com qualquer site?',
      description: 'Dados da sua conta',
    },
    {
      title: 'Com oassino o Nubank Rewards?',
      description: 'Rewards',
    },
  ]);
  const [showTopics, setShowTopics] = useState(false);
  const handleSearch = text => {
    if (text.length < 3) {
      setShowTopics(false);
    } else if (
      !topics.filter(topic =>
        topic.title.toLowerCase().includes(text.toLowerCase()),
      ).length
    ) {
      setShowTopics(false);
    } else {
      setTopics(
        topics.filter(topic =>
          topic.title.toLowerCase().includes(text.toLowerCase()),
        ),
      );
      setShowTopics(true);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: getStatusBarHeight(),
      }}>
      <TopContent>
        <Icon name="search" size={30} style={{flex: 0.4}} />
        <SearchInput
          placeholderTextColor="#767676"
          placeholder="Qual é a sua dúvida?"
          style={{flex: 8}}
          onChangeText={handleSearch}
          autoFocus={true}
          autoCapitalize={'none'}
        />
        <CancelButton onPress={() => navigation.goBack()}>
          <CancelText>Cancelar</CancelText>
        </CancelButton>
      </TopContent>

      <OptionsContainer
        data={showTopics ? topics : []}
        style={{
          marginTop: 20,
        }}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => (
          <OptionContainer
            style={{
              backgroundColor: '#FFFFFF',
            }}>
            <Topic>
              <TopicTitle>{item.title}</TopicTitle>
              <TopicDescription>{item.description}</TopicDescription>
            </Topic>

            <Icon name="keyboard-arrow-right" size={18} />
          </OptionContainer>
        )}
      />
    </View>
  );
}
