import React, {useState, useEffect} from 'react';
import {View, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {
  TopContent,
  OptionsContainer,
  OptionContainer,
  Topic,
  TopicTitle,
  TopicDescription,
  CloseModalContainer,
  CloseModalView,
  ModalTitle,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Profile({navigation}) {
  const [topics, setTopics] = useState([
    {
      title: 'Nome de preferência',
      description: 'Matheus',
    },
    {
      title: 'Email',
      description: 'matheus.souzadv@gmail.com',
    },
    {
      title: 'Renda mensal',
      description: '',
    },
    {
      title: 'Alterar senha de acesso',
      description: 'Utilizada para acessar app e site',
    },
    {
      title: 'Senha de 4 dígitos',

      description: 'Utilizada para confirmar movimentações',
    },
    {
      title: 'Autorizar aparelho',
      description: '',
    },
    {
      title: 'Acesso pelo site',
      description: '',
    },
    {
      title: 'Ativar Cadastro Positivo',
      description: '',
    },
  ]);
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
      <View
        style={{
          flex: 9,
          backgroundColor: '#FFF',
          paddingTop: Platform.OS == 'ios' ? getStatusBarHeight() : 10,
        }}>
        <TopContent>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} />
          </TouchableOpacity>
          <ModalTitle>PERFIL</ModalTitle>
        </TopContent>

        <OptionsContainer
          data={topics}
          style={{
            marginTop: 20,
          }}
          keyExtractor={item => item.title}
          renderItem={({item, index}) => (
            <OptionContainer key={item}>
              <View
                style={{
                  flex: 9,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                <TopicTitle>{item.title}</TopicTitle>
                <TopicDescription>{item.description}</TopicDescription>
              </View>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Icon name="keyboard-arrow-right" size={18} color="#8d8d8d" />
              </View>
            </OptionContainer>
          )}
        />
      </View>
    </>
  );
}
