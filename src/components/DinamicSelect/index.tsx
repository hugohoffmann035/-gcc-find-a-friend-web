import styled from 'styled-components'
import ChevronSvg from '@/assets/icons/chevron-bottom.svg'
import { useState } from 'react'

type DropdownType = {
  isOpenDropdown?: boolean
}

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`

const List = styled.ul<DropdownType>`
  max-height: 150px;
  overflow-y: scroll;
  display: ${({ isOpenDropdown }) => (isOpenDropdown ? 'block' : 'none')};
  margin-top: 5px;
  width: 100%;
  // background: ${(props) => props.theme.colors.third};
  border-radius: 15px;

  li {
    list-style: none;
    text-align: center;
    height: 60px;
    width: 100%;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: ${(props) => props.theme.colors.third};

    &.selected {
      background: ${(props) => props.theme.colors.secundary};
    }

    &:hover {
      background: ${(props) => props.theme.colors.secundary};
    }

    & + li {
      margin-top: 5px;
    }
  }
`

type ButtonSelectType = {
  isOpenDropdown?: boolean
  background?: string
  borderColor?: string
  borderWidth?: string | number
}

const ButtonSelect = styled.button<ButtonSelectType>`
  height: 60px;
  width: 100%;
  border-radius: 15px;
  background: ${(props) => props.background || props.theme.colors.third};
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  border-width: ${(props) => props.borderWidth || 0};
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 1.2rem;

  font-size: 16px;
  font-weight: 800;
  position: relative;

  img {
    height: 9px;
    position: absolute;
    right: 0;
    margin-right: 18px;
    transform: ${({ isOpenDropdown }) =>
      isOpenDropdown ? `rotate(180deg)` : `rotate(0deg)`};
  }
`

export const FilterLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`

type OptionsTypes = {
  label: string
  value: string | number
}

type DinamicSelectTypes = {
  onSelect: (value: string | number) => void
  value?: string
  options: OptionsTypes[]
  label?: string
  name?: string
  background?: string
  borderColor?: string
  borderWidth?: string | number
}

export function DinamicSelect({
  value,
  options,
  onSelect,
  label,
  name,
  background,
  borderColor,
  borderWidth,
}: DinamicSelectTypes) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <SelectContainer>
      <FilterLabel htmlFor={name}>{label}</FilterLabel>
      <ButtonSelect
        isOpenDropdown={isDropdownOpen}
        onClick={toggleDropdown}
        background={background}
        borderColor={borderColor}
        borderWidth={borderWidth}
      >
        <span>{value}</span>
        <img src={ChevronSvg} />
      </ButtonSelect>
      <List isOpenDropdown={isDropdownOpen}>
        {options?.map((item, idx) => (
          <li
            key={idx}
            onClick={() => onSelect(item?.value)}
            className={item.value === value ? 'selected' : ''}
          >
            {item.label}
          </li>
        ))}
      </List>
    </SelectContainer>
  )
}
