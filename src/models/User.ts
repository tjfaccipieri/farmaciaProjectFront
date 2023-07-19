import { Endereco } from "./Endereco";

export interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  tipo: string;
  contato1: string;
  contato2: string;
  dataNascimento: string;

  endereco?: Endereco[]
}