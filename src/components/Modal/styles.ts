import styled from 'styled-components'
import { transparentize, darken } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #030229;
`

export const ButtonClose = styled.button`
  background: ${transparentize(0.9, '#E71D36')};
  height: 40px;
  width: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: none;
  cursor: pointer;
  svg {
    color: #e71d36;
  }
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${transparentize(0.8, '#E71D36')};
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  button {
    margin-left: 7px;
    &.close {
      background: red;
    }
    &.warnning {
      background: orange;
    }
  }
`

export const Content = styled.div`
  height: 100%;
  margin-bottom: 20px;
  padding: 5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${darken(0.1, '#fff')};
    border-radius: 2px;
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: ${(props) => props.theme.colors.secundary};
  padding: 0px 20px;
  height: 45px;
  border-style: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${(props) => transparentize(0.5, props.theme.colors.secundary)};
  }
`
