import { Avatar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { hide } from '../../store/redux/slices/wide-app/notification-bar';
import Styled from './styles';
import Colors from '../../constants/colors';

const NotificationBar = () => {
  const dispatch = useDispatch();

  // select the UI states from the redux store
  const notificationBarStore = useSelector((state) => state.notificationBar);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleIcon = () => {
    switch (notificationBarStore.icon) {
      case 'hand':
        return <Avatar.Icon size={36} icon="hand-back-left-outline" />;
      case 'poll':
        return <Avatar.Icon size={36} icon="poll" />;
      case 'recording-started':
        return <Avatar.Icon size={36} icon="radiobox-marked" color={Colors.orange}/>;
      case 'recording-stopped':
        return <Avatar.Icon size={36} icon="radiobox-marked" />;
      // other icons...
      default:
        return null;
    }
  };

  if (!notificationBarStore.isShow) {
    return null;
  }

  return (
    <Styled.NotificationsBarPressable
      onPress={() => {
        if (notificationBarStore.icon === 'poll') {
          navigation.navigate('PollScreen');
        }
        dispatch(hide());
      }}
    >
      {handleIcon()}
      <Styled.TextContainer>
        <Styled.TitleText numberOfLines={1}>
          {t(notificationBarStore.messageTitle)}
        </Styled.TitleText>
        <Styled.SubtitleText numberOfLines={1}>
          {t(notificationBarStore.messageSubtitle)}
        </Styled.SubtitleText>
      </Styled.TextContainer>
    </Styled.NotificationsBarPressable>
  );
};

export default NotificationBar;
