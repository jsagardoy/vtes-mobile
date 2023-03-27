export interface Card {
  id: number;
  name: string;
  printed_name: string;
  _name: string;
  _set: string;
  url: string;
  aka?: string[];
  adv?: boolean;
  types: string[];
  card_text: string;
  sets: Sets[];
  ordered_sets: string[];
  scans: Scans[];
  clans?: string[];
  artists: string[];
  capacity?: number;
  capacity_change?: string;
  disciplines?: string[];
  combo?: boolean;
  multidisc?: boolean;
  banned?: string;
  pool_cost?: string;
  blood_cost?: string;
  conviction_cost?: string;
  burn_option?: string;
  flavor_text?: string;
  draft?: string;
  group?: string;
  title?: string;
  name_variants?: string[];
  has_advanced?: boolean;
  is_evolution?: boolean;
  rulings?: Rulings;
  _i18n?: Language;
}
export interface Language {
  language: string;
  name: string;
  card_text: string;
  flavor_text?: string;
  sets: Sets;
  url?: string;
}
export interface SetDescription {
  copies?: number;
  precon?: string;
  release_date?: string;
  rarity?: string;
  frequency?: number;
}
export interface Sets {
  name: string;
  description: SetDescription;
}

export interface Scans {
  name: string;
  url: string;
}

export interface Rulings {
  links: Links[];
  text: string[];
}

export interface Links {
  name: string;
  url: string;
}

export type CardType = 'crypt' | 'library';
export type CardCostType = 'blood' | 'pool' | 'conviction';
