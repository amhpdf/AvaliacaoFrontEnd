export type Convenio = {
  id: number;
  apelido: string;
  codigo: number;
  suspenso: boolean;
  divulgarSite: boolean;
  nomeDivulgacao: string;
  codigoSite: number;
};

export type ConveniosOrganizados = {
  [letraInicial: string]: Item[];
};
