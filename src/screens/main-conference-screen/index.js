import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import withPortal from '../../components/high-order/with-portal';
import VideoGrid from '../../components/video/video-grid';
import BottomSheetActionsBar from '../../components/actions-bar/bottom-sheet-actions-bar';
import ChatPopupList from '../../components/chat/chat-popup';
import Styled from './styles';

const MainConferenceScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const initialChatMsgsFetched = useSelector((state) => state.client.initialChatMsgsFetched);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      if (initialChatMsgsFetched) {
        setIsLoading(false);
      }
    }, [initialChatMsgsFetched])
  );

  /* view components */
  const renderGridLayout = () => {
    return (
      <Styled.ContainerView>
        <VideoGrid />
        <BottomSheetActionsBar />
        <ChatPopupList />
      </Styled.ContainerView>
    );
  };

  if (isLoading) {
    return (
      <Styled.GridItemSkeletonLoading />
    );
  }

  return renderGridLayout();
};

export default withPortal(MainConferenceScreen);
