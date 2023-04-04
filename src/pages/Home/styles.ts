import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1216px;
  max-width: 90%;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
  }

  .name {
    margin-left: 0.5rem;
    font-weight: 700;
    font-size: 1.5rem;
  }
`

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;

  align-items: center;

  .copy {
    p {
      font-size: 4rem;
      font-weight: 800;
      line-height: 4rem;
    }
  }

  .media {
  }
`

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;

  .call-to-action {
    p {
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.6rem;
    }
  }

  .form {
    display: flex;
    flex-direction: row;
    align-items: center;

    .label {
      font-size: 1rem;
    }

    .separator {
      margin: 0px 0.4rem;
    }
  }
`

export const ButtonSelectState = styled.button`
  height: 72px;
  width: 72px;
  border: 1px solid #fff;
  border-radius: 20px;
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 700;

  img {
    margin-left: 6px;
  }
`

export const ButtonSelectCity = styled.button`
  height: 72px;
  min-width: 280px;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.secundary};
  border-style: none;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 700;

  img {
    margin-left: 6px;
  }
`

export const ButtonSearch = styled.button`
  height: 72px;
  min-width: 72px;
  border-radius: 20px;
  border-style: none;
  background: #f4d35e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
