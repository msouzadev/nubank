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
      title: 'Historico de localização',
      description: '',
      checked: false,
    },
    {
      id: 2,
      title: 'Proteção do app',
      description: 'Solicitar senha de desbloqueio do aparelho',
      checked: false,
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
                <TopicTitle>{item.title}</TopicTitle>
                <TopicDescription>{item.description}</TopicDescription>
              </View>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Switch
                  onValueChange={() => {
                    setTopics(
                      topics.map(topic => {
                        topic.checked =
                          topic.id == item.id ? !topic.checked : topic.checked;
                        return topic;
                      }),
                    );
                  }}
                  value={item.checked}
                  thumbColor={item.checked ? '#82269e' : '#FFF'}
                />
              </View>
            </OptionContainer>
          )}
        />
      </View>
    </>
  );
}
