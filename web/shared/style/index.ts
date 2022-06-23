import styled from "styled-components";
import { Button, Card as AntCard } from "antd";


export const ContentWrapper = styled.section`
  height: 100vh;
  padding: 0 20%;
  width: 100vw;
`;

export const SimpleCard = styled(AntCard)`
  border: 1px solid var(--dark-gray);
`;
