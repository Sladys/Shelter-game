import { CardInfo } from "./types/types";

export const getRandomElement = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const professions = [
  "Врач",
  "Инженер",
  "Учитель",
  "Повар",
  "Фермер",
  "Психолог",
  "Строитель",
  "Электрик",
];
const bios = [
  "Мужчина, 45 лет",
  "Женщина, 32 года",
  "Мужчина, 50 лет",
  "Женщина, 38 лет",
];
const hobbies = ["Чтение", "Моделирование", "Игра на гитаре", "Кулинария"];
const inventories = [
  "Медицинский набор",
  "Набор инструментов",
  "Учебные материалы",
  "Набор специй",
];
const phobias = ["Клаустрофобия", "Аэрофобия", "Арахнофобия", "Кинофобия"];
const healthConditions = [
  "Здоров",
  "Аллергия на орехи",
  "Слабое зрение",
  "Аллергия на лактозу",
];
const additionals = [
  "Знание первой помощи",
  "Опыт работы с электроникой",
  "Знание истории и литературы",
  "Мастер в приготовлении блюд",
];
const actionsFirst = [
  "Может вылечить одного игрока от болезни",
  "Может починить генератор",
  "Может обучить навыкам других игроков",
  "Может приготовить еду из ограниченных ресурсов",
];
const actionsSecond = [
  "Может провести операцию",
  "Может создать импровизированное оружие",
  "Может вести переговоры",
  "Может развеселить команду",
];

export const generateNewCardInfo = (key: keyof CardInfo): Partial<CardInfo> => {
  switch (key) {
    case "profession":
      return { profession: getRandomElement(professions) };
    case "bio":
      return { bio: getRandomElement(bios) };
    case "hobby":
      return { hobby: getRandomElement(hobbies) };
    case "inventory":
      return { inventory: getRandomElement(inventories) };
    case "phobia":
      return { phobia: getRandomElement(phobias) };
    case "health":
      return { health: getRandomElement(healthConditions) };
    case "additional":
      return { additional: getRandomElement(additionals) };
    case "actionFirst":
      return { actionFirst: getRandomElement(actionsFirst) };
    case "actionSecond":
      return { actionSecond: getRandomElement(actionsSecond) };
    default:
      throw new Error(`Unknown key: ${key}`);
  }
};

export const generateNewValueForKey = (key: keyof CardInfo): string => {
  switch (key) {
    case "profession":
      return getRandomElement(professions);
    case "bio":
      return getRandomElement(bios);
    case "hobby":
      return getRandomElement(hobbies);
    case "inventory":
      return getRandomElement(inventories);
    case "phobia":
      return getRandomElement(phobias);
    case "health":
      return getRandomElement(healthConditions);
    case "additional":
      return getRandomElement(additionals);
    case "actionFirst":
      return getRandomElement(actionsFirst);
    case "actionSecond":
      return getRandomElement(actionsSecond);
    default:
      throw new Error(`Unknown key: ${key}`);
  }
};
