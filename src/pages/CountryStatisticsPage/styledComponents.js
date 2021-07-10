import { Checkbox, Input, Typography, Button } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;
const { Search } = Input;

export const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 80vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 80vh;
`;

export const ShowTradersCheckbox = styled(Checkbox)`
  width: 15%;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const FilterInput = styled(Search)`
  width: 25%;
  margin-left: 10px;
`;

export const FilterText = styled(Text)`
  line-height: 30px;
`;

export const ResetButton = styled(Button)`
  margin-left: 10px;
  border-radius: 3px;
`;
