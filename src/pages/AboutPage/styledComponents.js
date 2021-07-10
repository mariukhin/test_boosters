import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 90vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  padding: 20px;
`;
