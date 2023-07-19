import { User } from "./User";

export interface Endereco {
  id: number;
  logradouro: string;
  numero: string;
  complemento: string;
  cep: string;
  referencia: string;
  uf: string;
  cidade: string;
  bairro: string;

  usuario: User;
}