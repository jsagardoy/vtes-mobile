import { Card, Rulings, Scans, SetDescription } from '../types/data.types';

const cardMapping = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    adv: data.adv,
    aka:data.aka,
    printed_name: data.printed_name,
    _name: data._name,
    _set: data._set,
    url: data.url,
    types: data.types,
    card_text: data.card_text,
    sets: getSets(data.sets),
    ordered_sets: data.ordered_sets,
    scans: getScans(data.scans),
    artists: data.artists,
    clans: data.clans ?? null,
    capacity: data.capacity ?? null,
    capacity_change: data.capacity_change ?? null,
    disciplines: data.disciplines ?? null,
    combo: data.combo ?? null,
    multidisc: data.multidisc ?? null,
    banned: data.banned ?? null,
    pool_cost: data.pool_cost ?? null,
    blood_cost: data.blood_cost ?? null,
    conviction_cost: data.conviction_cost ?? null,
    burn_option: data.burn_option ?? null,
    flavor_text: data.flavor_text ?? null,
    draft: data.draft ?? null,
    group: data.group ?? null,
    title: data.title ?? null,
    name_variants: data.name_variants ?? null,
    has_advanced: data.has_advanced ?? null,
    is_evolution: data.is_evolution ?? null,
    rulings: getRulings(data.rulings) ?? null,
    _i18n: data._i18n ?? null,
  };
};

const getRulings = (ruling: any) => {
  if (ruling) {
    const list = Object.keys(ruling.links);
    const values = Object.values(ruling.links);
    const links = list.map((elem, index) => {
      return {
        name: elem,
        url: values[index] as string,
      };
    });
    return ruling
      ? {
          text: [...ruling.text],
          links: links,
        }
      : null;
  }
  return null;
};
const getSets = (sets: Object) => {
  const list = Object.keys(sets);
  const newSets = list.map((set) => {
    const details: SetDescription = { ...sets[set] };
    return {
      name: set,
      description: details,
    };
  });
  return newSets;
};
const getScans = (scans: Object) => {
  const list = Object.keys(scans);
  const newScans: Scans[] = list.map((scan) => ({
    name: scan,
    url: list[scan],
  }));
  return newScans;
};

export const getCardTotalInfo = async (cardName: string): Promise<Card> => {
  const url = `https://api.krcg.org/card/${cardName}`;
  const props = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await fetch(url, props);
    const data = await res.json();
    const cardTotalInfo = cardMapping(data);
    return cardTotalInfo;
  } catch (error) {
    console.error(error);
  }
};
