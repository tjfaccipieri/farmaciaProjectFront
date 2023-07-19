import { Categoria } from "./Categoria";
import { Marca } from "./Marca";

export interface Produto {
  id: number;
  nome: string;
  descricaoBasica: string;
  sobre: string;
  quantidade: number;
  principioAtivo: string;
  generico: boolean;
  registroMedico: string;
  codigoBarras: string;
  dosagem: string;
  peso: string;
  avisoMedico: string;
  preco: number;
  valorCompra: number;
  foto: string;

  categoria: Categoria;
  marca: Marca;
}