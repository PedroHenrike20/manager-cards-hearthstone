export interface Card {
  id?: number,
  name: string,
  level: number,
  description: string,
  attack: number,
  defense: number,
  avatarUrl: string,
  type: 'Criatura' | 'Magia' | '',
  class: 'Mago' | 'Paladino' | 'Caçador' | 'Druida' | 'Outros' | ''
}