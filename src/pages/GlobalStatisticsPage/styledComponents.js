import { Checkbox, Input, Typography, Button } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 90vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 90vh;
`;

export const ShowTradersCheckbox = styled(Checkbox)`
  width: 15%;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 29%;
  margin-bottom: 15px;
`;

export const PriceInput = styled(Input)`
  width: 80px;
`;

export const FilterText = styled(Text)`
  line-height: 30px;
`;

export const ButtonStyle = styled(Button)`
  border-radius: 3px;
`;
