export interface iStore {
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
