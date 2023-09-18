import styled from 'styled-components';

export const TitlePage = styled.div`
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 171.523%;
  letter-spacing: 0.64px;
  background: linear-gradient(180deg, #119DB6 6.92%, #2E71B6 99.86%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin:${props => (props.margin)};
`;