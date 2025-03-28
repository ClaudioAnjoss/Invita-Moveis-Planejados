export interface iData {
  estado: string
  value: string
  cidades: {
    cidade: string
    lojas: {
      nome: string
      value: string
      endereco: string
      telefone: string
    }[]
  }[]
}

export interface iEstado {
  nome: string
  value: string
}

export type Database = iEstado[]
