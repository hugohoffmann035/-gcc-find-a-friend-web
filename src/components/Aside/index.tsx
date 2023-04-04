import logo from '@/assets/icons/logo.svg'

import { DinamicSelect } from '~/DinamicSelect'

import {
  Container,
  AsideHeader,
  AsideContent,
  ContentHeader,
  ContentFilters,
  Logo,
  CityContainer,
} from './styles'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

export function Aside() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeSearchFilters() {
    // TO DO
  }

  return (
    <Container>
      <AsideHeader>
        <Logo>
          <img src={logo} />
        </Logo>
        <CityContainer>
          <DinamicSelect
            value="UF"
            options={ageOptions}
            onSelect={() => {}}
            label=""
            name="age"
            borderColor="#F15156"
            background="transparent"
            borderWidth={1}
          />
          <DinamicSelect
            value="Cidade"
            options={ageOptions}
            onSelect={() => {}}
            label=""
            name="age"
            borderColor="#F15156"
            background="transparent"
            borderWidth={1}
          />
        </CityContainer>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <DinamicSelect
            value="Selecione"
            options={ageOptions}
            onSelect={() => {}}
            label="Idade"
            name="age"
          />

          <DinamicSelect
            value="Selecione"
            options={energyOptions}
            onSelect={() => {}}
            label="Nível de energia"
            name="energy"
          />

          <DinamicSelect
            value="Selecione"
            options={sizeOptions}
            onSelect={() => {}}
            label="Porte do animal"
            name="size"
          />

          <DinamicSelect
            value="Selecione"
            options={independencyOptions}
            onSelect={() => {}}
            label="Nível de independência"
            name="independency"
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
