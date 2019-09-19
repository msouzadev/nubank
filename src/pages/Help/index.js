import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {
  CloseButton,
  TopContent,
  TopText,
  OptionsContainer,
  OptionContainer,
  Footer,
  SearchContainer,
  SearchInput,
  Topic,
  TopicTitle,
  TopicDescription,
  FooterText,
  FooterButton,
  RatingContainer,
  RatintTitle,
  RateOptions,
  RateOption,
  RateTitle,
} from './styles';

export default function Help({onClose, navigation}) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showRating, setShowRating] = useState(false);
  const [topics, setTopics] = useState([
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos.',
    },
    {
      title: 'NuConta',
      description: 'Conheça tudo sobre a sua conta digital.',
    },
    {
      title: 'Pagar Fatura',
      description: 'Descubra como e onde pagar a sua fatura',
    },
    {
      title: 'Parcelar Fatura',
      description: 'Veja como parcelar sua fatura',
    },
    {
      title: 'Limite de Crédito',
      description: 'Tire suas dúvidas sobre o limite de crédito',
    },
    {
      title: 'Cartão Virtual',
      description: 'Cartão Virtual',
    },
  ]);
  const ratingOptions = [
    {
      icon: 'warning',
      name: 'Péssimo',
    },
    {
      icon: 'mood-bad',
      name: 'Ruim',
    },
    {
      icon: 'mood',
      name: 'Bom',
    },
    {
      icon: 'hearto',
      name: 'Perfeito',
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
  }, []);
  const handleSearch = text => {
    if (!text) {
      setTopics([
        'Transferir para um novo contato',
        'Matheus Santos de Souza (Você)',
        'Eliezer Marques da Silva Neto',
        'Lucas Pereira Santos',
        'Raimundo Sales de Souza',
        'João Vitor de Oliveira',
      ]);
      return;
    }
    setTopics(
      contacts.filter(contact =>
        contact.toLowerCase().startsWith(text.toLowerCase()),
      ),
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: getStatusBarHeight(),
      }}>
      <TopContent>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="close" size={35} color="#767676" />
        </CloseButton>

        <TopText>ME AJUDA</TopText>
      </TopContent>
      <SearchContainer
        onPress={() => {
          navigation.navigate('SearchModal');
          setShowRating(true);
        }}>
        <SearchInput
          placeholderTextColor="#767676"
          editable={false}
          placeholder="Qual é a  sua dúvida?"
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
          color="#9013c1"
        />
      </SearchContainer>

      {showSkeleton &&
        topics.map((item, index) => (
          <View key={index} style={{marginTop: 12}}>
            <SkeletonPlaceholder>
              <View
                style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
                <View style={{flexDirection: 'column', flex: 9}}>
                  <View style={{width: 100, height: 20}}></View>
                  <View style={{width: 300, height: 20, marginTop: 5}}></View>
                </View>
                <View style={{width: 10, height: 6}}></View>
              </View>
            </SkeletonPlaceholder>
          </View>
        ))}
      {showRating && (
        <RatingContainer>
          <RatintTitle>Como você avalia o Me Ajuda?</RatintTitle>
          <RateOptions>
            {ratingOptions.map(rate => (
              <View key={rate.icon}>
                <RateOption>
                  {rate.icon == 'warning' || rate.icon == 'hearto' ? (
                    <AntDesign name={rate.icon} size={30} color="#8a05be" />
                  ) : (
                    <Icon name={rate.icon} size={30} color="#8a05be"></Icon>
                  )}
                </RateOption>
                <RateTitle>{rate.name}</RateTitle>
              </View>
            ))}
          </RateOptions>
        </RatingContainer>
      )}
      {!showSkeleton && (
        <OptionsContainer
          data={topics}
          style={{
            marginTop: 30,
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
      )}

      {!showSkeleton && (
        <Footer>
          <FooterButton
            style={{
              height: '100%',
              borderRightWidth: 1,
              borderRightColor: '#e5e5e5',
            }}>
            <FooterText>EMAIL</FooterText>
          </FooterButton>
          <FooterButton>
            <FooterText>CHAT</FooterText>
          </FooterButton>
        </Footer>
      )}
    </View>
  );
}
