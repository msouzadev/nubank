import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {
  Container,
  CloseModalContainer,
  CloseModalView,
  CloseButton,
  TopContent,
  TopText,
  Strong,
  OptionsContainer,
  OptionContainer,
  OptionText,
  Footer,
  InvitedText,
  ButtonBox,
  ButtonBoxText,
  EmailBadge,
  EmailBadgeText,
  SearchContainer,
  SearchInput,
  Topic,
  TopicTitle,
  TopicDescription,
  FooterText,
  FooterButton,
  Skeleton,
} from './styles';

export default function Transfer({onClose, navigation}) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [topics, setTopics] = useState([
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
    {
      title: 'Novidades',
      description: 'Tudo sobre o Nubank e nossos produtos',
    },
  ]);
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
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <TopContent>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="close" size={35} color="#767676" />
        </CloseButton>

        <TopText>ME AJUDA</TopText>
      </TopContent>
      <SearchContainer>
        <SearchInput
          placeholder="Qual é sua dúvida?"
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
                <View style={{flexDirection: 'column'}}>
                  <View style={{width: 100, height: 20}}></View>
                  <View style={{width: 300, height: 20, marginTop: 5}}></View>
                </View>
              </View>
            </SkeletonPlaceholder>
          </View>
        ))}
      {!showSkeleton && (
        <OptionsContainer
          data={topics}
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
            <FooterText>CONFIRMAR</FooterText>
          </FooterButton>
        </Footer>
      )}
    </View>
  );
}
