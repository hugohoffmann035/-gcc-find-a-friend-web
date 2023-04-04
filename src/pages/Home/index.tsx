import {
  Container,
  Wrapper,
  Logo,
  Banner,
  Action,
  ButtonSelect,
  ButtonSelectCity,
  ButtonSearch,
  SelectContainer,
  StateList,
  CitieList,
} from './styles'
import { useNavigate } from 'react-router-dom'

import LogoSvg from '@/assets/icons/logo.svg'
import DogsSvg from '@/assets/images/dogs.svg'
import ArrowDownSvg from '@/assets/icons/arrow-down.svg'
import SearchSvg from '@/assets/icons/search.svg'

import { useLocation, IState, ICity } from '@/hooks/useLocation'
import { useEffect, useState } from 'react'

export function Home() {
  const navigate = useNavigate()
  const { getStates, getCitiesByState } = useLocation()
  const [stateList, setStateList] = useState<IState[]>([])
  const [cityList, setCityList] = useState<ICity[]>([])
  const [isOpenSelectState, setIsOpenSelectState] = useState(false)
  const [isOpenSelectCitie, setIsOpenSelectCitie] = useState(false)
  const [stateSelected, setStateSelected] = useState('')
  const [citieSelected, setCitieSelected] = useState('')
  // const [isLoadCities, setIsLoadCities] = useState(false)

  function handleToggleSelectState() {
    setIsOpenSelectState((prev) => !prev)
  }

  function handleCloseSelectState() {
    setIsOpenSelectState(false)
  }

  async function onLoadCities(value: string) {
    const list = await getCitiesByState(value)
    setCityList(list)
  }

  async function handleSelectState(value: string) {
    setCitieSelected('')
    setStateSelected(value)
    handleCloseSelectState()
    await onLoadCities(value)
  }

  function handleToggleSelectCitie() {
    setIsOpenSelectCitie((prev) => !prev)
  }

  function handleCloseSelectCitie() {
    setIsOpenSelectCitie(false)
  }

  async function load() {
    const states = await getStates()
    setStateList(states)
  }

  function handleSelectCitie(value: string) {
    setCitieSelected(value)
    handleCloseSelectCitie()
  }

  useEffect(() => {
    load()
  }, [])

  function handleSearchPets() {
    navigate('/map')
  }

  // function handleChangeState() {
  //   // TO DO
  // }

  // function handleChangeCity() {
  //   // TO DO
  // }

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
          <div className="form">
            <span className="label">Busque um amigo:</span>
            <div className="separator" />
            <SelectContainer>
              <ButtonSelect
                isOpenDropdown={isOpenSelectState}
                onClick={handleToggleSelectState}
              >
                <span>{stateSelected || 'UF'}</span>
                <img src={ArrowDownSvg} />
              </ButtonSelect>
              <StateList isOpenDropdown={isOpenSelectState}>
                {stateList?.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSelectState(item.sigla)}
                    className={item.sigla === stateSelected ? 'selected' : ''}
                  >
                    {item.sigla}
                  </li>
                ))}
              </StateList>
            </SelectContainer>
            <div className="separator" />
            <SelectContainer>
              <ButtonSelectCity
                isOpenDropdown={isOpenSelectCitie}
                onClick={handleToggleSelectCitie}
              >
                <span>{citieSelected || 'Cidade'}</span>
                <img src={ArrowDownSvg} />
              </ButtonSelectCity>
              <CitieList isOpenDropdown={isOpenSelectCitie}>
                {cityList?.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSelectCitie(item.name)}
                    className={item.name === stateSelected ? 'selected' : ''}
                  >
                    {item.name}
                  </li>
                ))}
              </CitieList>
            </SelectContainer>
            <div className="separator" />
            <ButtonSearch onClick={handleSearchPets}>
              <img src={SearchSvg} />
            </ButtonSearch>
          </div>
        </Action>
      </Wrapper>
    </Container>
  )
}
