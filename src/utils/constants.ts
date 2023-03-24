import {IAboutHintsForm, ICBOption, IDetailOption} from "../models/types";

export const memories:IAboutHintsForm[] = [
  {
    label: "Какие моменты сразу вспоминаете, думая об этом человеке?",
    name: "memories_think_about",
  },
  {
    label: "Какие моменты были бы не такими яркими друг без друга?",
    name: "memories_without",
  },
  {
    label: "Какие жизненные этапы вы прошли вместе?",
    name: "life_stages",
  },
];
export const story:IAboutHintsForm[] = [
  { label: "Как вы познакомились?", name: "how_meet" },
  {
    label: "Через какие трудности вы прошли вместе?",
    name: "what_hardships",
  },
  {
    label: "Какие у вас совместные планы на будущее?",
    name: "plans",
  },
];
export const what_means:IAboutHintsForm[] = [
  {
    label: "Какие чувства вы испытываете в этих отношениях?",
    name: "what_feelings",
  },
  {
    label: "Опишите самый запоминающийся совместный момент",
    name: "most_memorable_moment",
  },
  {
    label: "Что бы Вы хотели, чтобы этот человек точно знал?",
    name: "what_want_to_know",
  },
];
export const hobbies:IAboutHintsForm[] = [
  {
    label: "Какие места или занятия вы любите разделять вместе?",
    name: "which_places",
  },
  {
    label: "Какие моменты становятся ярче рядом с этим человеком?",
    name: "which_moments",
  },
  {
    label: "Если бы у вас была свободная неделя, что бы вы сделали?",
    name: "if_last_week",
  },
];
export const how_shape:IAboutHintsForm[] = [
  {
    label: "Как эти отношения повлияли на Вас, как на личность?",
    name: "relationships_impact",
  },
  {
    label: "Какой была бы Ваша жизнь без этого человека?",
    name: "life_without",
  },
  {
    label: "Какие возможности для Вас открываются рядом с ним?",
    name: "which_opportunities",
  },
];
export const jokes:IAboutHintsForm[] = [
  {
    label: "Какие фразы и воспоминания заставляют вас смеяться?",
    name: "which_phrases",
  },
  {
    label: "Над чем смеётесь только вы и никто больше? :)",
    name: "local_jokes",
  },
  {
    label: "Какой случай Вы не представляете без этого человека?",
    name: "which_happening",
  },
];
export const other_stories:IAboutHintsForm[] = [
  { label: "Свободно расскажите о том, о чём хотите :)", name: "free_talk" },
];
export const genreOptions: ICBOption[] = [
  {
    label: "Сонграйтер (просто фортепиано или гитара, фокус на повествовании)",
    value: "songwriter",
  },
  {
    label: "Рэп/Хип-Хоп (ритмичный вокал, свежее звучание и перкуссионный бит)",
    value: "rap",
  },
  {
    label: "R&B (проникновенный вокал, грув и крутая атмосфера)",
    value: "r&b",
  },
  {
    label: "Рок (энергичное электрическое звучание для любителей оторваться)",
    value: "rock",
  },
  {
    label: "Акустический поп (более широкий инструментарий, акцент на мелодии)",
    value: "acoustic_pop",
  },
];
export const moodOptions: ICBOption[] = [
  {
    label: "Душевной (подчеркнёт эмоциональные моменты, истории и чувства)",
    value: "soulful",
  },
  {
    label: "Романтической (близкие и личные моменты, медленный темп)",
    value: "romantic",
  },
  {
    label: "Смешной (подчеркнёт комические моменты из вашей жизни)",
    value: "funny",
  },
  {
    label: "Воодушевляющей (слова ободрения и вдохновения для Ваших близких)",
    value: "inspiring",
  },
  {
    label: "Счастливой (весёлые и позитивные моменты, вызовет улыбку)",
    value: "happy",
  },
  { label: "Беззаботной (весёлая и спокойная)", value: "carefree" },
  {
    label: "Серьёзной (эмоциональный и серьёзный тон, более медленный темп)",
    value: "serious",
  },
];
export const aboutHintsOptions: ICBOption[] = [
  { label: "История Ваших отношений", value: "story", disabled: false },
  {
    label: "Любимые совместные воспоминания",
    value: "memories",
    disabled: false,
  },
  {
    label: "Что эти отношения значат для Вас",
    value: "what_means",
    disabled: false,
  },
  { label: "Любимые совместные занятия", value: "hobbies", disabled: false },
  {
    label: "Как эти отношения сформировали Вас",
    value: "how_shape",
    disabled: false,
  },
  {
    label: "Совместные шутки и смешные истории",
    value: "jokes",
    disabled: false,
  },
  {
    label: "Другие истории и воспоминания",
    value: "other_stories",
    disabled: false,
  },
];

export const detailOptions:IDetailOption[] = [
  {detailLabel: "Деталь 1 (в нескольких словах)", detailMainName: "detail_1", detailDescriptionName: "detail_1_description"},
  {detailLabel: "Деталь 2 (в нескольких словах)", detailMainName: "detail_2", detailDescriptionName: "detail_2_description"},
  {detailLabel: "Деталь 3 (в нескольких словах)", detailMainName: "detail_3", detailDescriptionName: "detail_3_description"},
];
