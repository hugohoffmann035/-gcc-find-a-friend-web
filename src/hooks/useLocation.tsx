import React, { createContext, useContext } from 'react'
import api from '@/services/api'

interface IStateRegiao {
  id: number
  nome: string
  sigla: string
}

export interface IState {
  id: number
  nome: string
  regiao: IStateRegiao
  sigla: string
}

export interface ICity {
  code: string
  name: string
}

interface ILocationContextProps {
  getStates(): Promise<IState[]>
  getCitiesByState(uf: string): Promise<ICity[]>
}

const locationContext = createContext({} as ILocationContextProps)

interface ILocationProps {
  children: React.ReactNode
}

function LocationProvider({ children }: ILocationProps) {
  async function getStates() {
    try {
      const result = await api.get('/location/states')
      return result.data?.states || []
    } catch (err) {}
  }

  async function getCitiesByState(uf: string) {
    try {
      const result = await api.get('/location/citys/' + uf)
      return result.data?.citys || []
    } catch (err) {
      return []
    }
  }

  return (
    <locationContext.Provider
      value={{
        getStates,
        getCitiesByState,
      }}
    >
      {children}
    </locationContext.Provider>
  )
}

function useLocation() {
  const context = useContext(locationContext)
  return context
}

export { LocationProvider, useLocation }
