import React, {useState, useEffect} from 'react';
import {View, Platform, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Switch} from 'react-native';

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
      id: 1,
      title: 'Vencimendo',
      description: '12/10',
      checked: false,
      switchable: false,
    },
    {
      id: 2,
      title: 'Ajustar Limite',
      description: 'R$ 9.670,00',
      checked: false,
      switchable: false,
    },
    {
      id: 3,
      title: 'Informações sobre seus juros',
      description: '',
      checked: false,
      switchable: false,
    },
    {
      id: 4,
      title: 'Aviso viagem',
      description: '',
      checked: false,
      switchable: true,
    },
    {
      id: 5,
      title: 'Compras por aproximação (contactless)',
      description: 'Desative para não permitir compras por aproximação',
      checked: false,
      switchable: true,
    },
  ]);
  const handleCheck = option => {
    console.log(option);
    setTopics(
      topics.map(topic => {
        topic.checked = topic.id == option ? !topic.checked : topic.checked;
        return topic;
      }),
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
          <ModalTitle>CONFIGURAR CARTÃO</ModalTitle>
        </TopContent>

        <OptionsContainer
          data={topics}
          style={{
            marginTop: 20,
          }}
          keyExtractor={item => item.title}
          renderItem={({item, index}) => (
            <OptionContainer
              key={item}
              onPress={() => handleCheck(item.id)}
              style={{
                borderTopColor: index == 0 ? '#cccccc' : '',
                borderTopWidth: index == 0 ? StyleSheet.hairlineWidth : 0,
              }}>
              <View
                style={{
                  flex: 9,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                <TopicTitle style={{flexWrap: 'wrap'}}>{item.title}</TopicTitle>
                <TopicDescription>{item.description}</TopicDescription>
              </View>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                {item.switchable ? (
                  <Switch
                    onValueChange={() => {
                      setTopics(
                        topics.map(topic => {
                          topic.checked =
                            topic.id == item.id
                              ? !topic.checked
                              : topic.checked;
                          return topic;
                        }),
                      );
                    }}
                    value={item.checked}
                    thumbColor={item.checked ? '#82269e' : '#FFF'}
                  />
                ) : (
                  <Icon name="keyboard-arrow-right" size={18} color="#8d8d8d" />
                )}
              </View>
            </OptionContainer>
          )}
        />
      </View>
    </>
  );
}
