import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import button from '../../button';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#06172A',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0e2a50',
    padding: 8,
  },
  indicatorStyle: {
    backgroundColor: 'white',
  },
  handleStyle: {
    backgroundColor: '#0e2a50',
  }
});

const OptionsButton = styled(button)`
  background-color: ${Colors.lightGray200}
  color: ${Colors.lightGray400};
  font-size: 16px;
  font-weight: 400;
  padding: 12px;
  border-radius: 12px;
  width: 100%;

  ${({ selected }) => selected
  && `
      background-color: #003399;
      color: ${Colors.white};
  `}
`;

const ButtonContainer = styled.View`
  width: 100%;
  padding: 24px 0;
  margin: 0;
  border-radius: 16px;
`;

export default {
  styles,
  OptionsButton,
  ButtonContainer,
};
