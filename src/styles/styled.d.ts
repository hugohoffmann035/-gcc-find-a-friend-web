import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secundary: string
      third: string
      background: string
      auth_bg: string
      button_primary_bg: string
      button_primary_label: string
      button_secundary_bg: string
      button_secundary_label: string
      label_primary: string
      input_primary_bg: string
      input_primary_border: string
      input_primary_value: string
    }
  }
}
