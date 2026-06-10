export interface UserSession {
  nome: string;
  perfil: 'Administrador' | 'Operador';
}

export function getLocalSession(): UserSession {
  return { nome: 'Raphael', perfil: 'Administrador' };
}
