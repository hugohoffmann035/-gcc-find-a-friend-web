import { createGlobalStyle, keyframes } from 'styled-components'
import { transparentize } from 'polished'

const blur = keyframes`
    from {
        -webkit-backdrop-filter: blur(0px);
        backdrop-filter: blur(0px);
    }
    to {
        -webkit-backdrop-filter: blur(1px);
        backdrop-filter: blur(1px);
    }
`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFFFFF;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea, select  {
    font: 400 16px 'Nunito', sans-serif;
  }

  html {
    @media(min-width: 1080px) {
        font-size: 93.75%;
    }
    @media(min-width: 720px) {
        font-size: 87.5%;
    }
  }

  .modal-overlay {
        position: absolute;
        background: ${(props) =>
          transparentize(0.4, props.theme.colors.secundary)};
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: ${blur} 300ms ease-in both;
        z-index: 999;
    }
    .modal-content {
        background: #fff;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.10) 0px 0px 10px;
        padding: 30px;
        max-height: 92vh;
        min-height: 30vh;
    }
    .modal-overlay-right {
        position: absolute;
        background: ${transparentize(0.8, '#030229')};
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }
    .modal-content-right {
        background: #fff;
        border-radius: 0px;
        height: 100vh;
        box-shadow: rgba(0, 0, 0, 0.10) 0px 0px 10px;
        padding: 30px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.secundary};
      border-radius: 100px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.primary};
    }

    ::-webkit-scrollbar {
      width: 5px;
    }
`
