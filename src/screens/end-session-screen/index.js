import React, { useEffect, useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import useEndReason from '../../hooks/use-end-reason';
import Styled from './styles';

const EndSessionScreen = (props) => {
  const { onLeaveSession } = props;
  const { t } = useTranslation();

  const title = useEndReason();
  const subtitle = t('mobileSdk.endSession.subtitle');
  const leaveText = t('app.leaveModal.confirm');
  const navigation = useNavigation();

  const [orientation, setOrientation] = useState(Dimensions.get('window').width > Dimensions.get('window').height ? 'LANDSCAPE' : 'PORTRAIT');

  useEffect(() => {
    console.log('END SCREEN MOUNT');

    const updateOrientation = () => {
      const newOrientation = Dimensions.get('window').width > Dimensions.get('window').height ? 'LANDSCAPE' : 'PORTRAIT';
      setOrientation(newOrientation);
    };

    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      console.log('END SCREEN UNMOUNT');
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  const handleLeaveSessionButtonPress = () => {
    console.log('calling onLeaveSession BUTTON');
    if (!onLeaveSession()) navigation.navigate('DrawerNavigator');
  };

  const getImageSize = () => {
    if (orientation === 'LANDSCAPE') {
      return { width: 150, height: 150 }; // Ajuste para modo paisagem
    } else {
      return { width: 250, height: 250 }; // Tamanho padrão
    }
  };

  const imageSize = getImageSize();

  return (
    <Styled.ContainerView>
      <Styled.ContainerEndSessionCard>
        <Image
          source={require('../../assets/endSessionImage.png')}
          resizeMode="contain"
          style={imageSize}
        />
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        <Styled.ButtonContainer>
          <Styled.ConfirmButton onPress={handleLeaveSessionButtonPress}>
            {leaveText}
          </Styled.ConfirmButton>
        </Styled.ButtonContainer>
      </Styled.ContainerEndSessionCard>
    </Styled.ContainerView>
  );
};

export default EndSessionScreen;
