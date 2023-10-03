import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({theme, isDisable}) => isDisable ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5rem;

  max-width: 19.75rem;
  border-radius: 5px;
  padding: 0.75rem 2rem;
  height: 48px;
  cursor: pointer;

  display: flex;
  gap: 0.6rem;
  align-items: center;

  &:hover{
    background-color: ${({theme}) => theme.COLORS.TOMATO_200};
    transition: 0.2s;
  }

`