import {
  Container,
  Wrapper,
  Logo,
  Banner,
  Action,
  ButtonSelectState,
  ButtonSelectCity,
  ButtonSearch,
} from './styles'
import LogoSvg from '@/assets/icons/logo.svg'
import DogsSvg from '@/assets/images/dogs.svg'
import ArrowDownSvg from '@/assets/icons/arrow-down.svg'
import SearchSvg from '@/assets/icons/search.svg'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={LogoSvg} />
          <span className="name">FindAFriend</span>
        </Logo>
        <Banner>
          <div className="copy">
            <p>Leve</p>
            <p>a felicidade</p>
            <p>para o seu lar</p>
          </div>
          <div>
            <img src={DogsSvg} />
          </div>
        </Banner>
        <Action>
          <div className="call-to-action">
            <p>Encontre o animal de estimação ideal</p>
            <p>para seu estilo de vida!</p>
          </div>
          <form className="form">
            <span className="label">Busque um amigo:</span>
            <div className="separator" />
            <ButtonSelectState>
              <span>PE</span>
              <img src={ArrowDownSvg} />
            </ButtonSelectState>
            <div className="separator" />
            <ButtonSelectCity>
              <span>Recife</span>
              <img src={ArrowDownSvg} />
            </ButtonSelectCity>
            <div className="separator" />
            <ButtonSearch>
              <img src={SearchSvg} />
            </ButtonSearch>
          </form>
        </Action>
      </Wrapper>
    </Container>
  )
}
