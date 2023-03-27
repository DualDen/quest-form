import {
  IAboutHintsForm,
  ICBOption,
  IDetailOption,
  IFormItem,
  IRadioOption,
} from "../models/types";

export const memories: IAboutHintsForm[] = [
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
export const story: IAboutHintsForm[] = [
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
export const what_means: IAboutHintsForm[] = [
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
export const hobbies: IAboutHintsForm[] = [
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
export const how_shape: IAboutHintsForm[] = [
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
export const jokes: IAboutHintsForm[] = [
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
export const other_stories: IAboutHintsForm[] = [
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

export const detailOptions: IDetailOption[] = [
  {
    detailLabel: "Деталь 1 (в нескольких словах)",
    detailMainName: "detail_1",
    detailDescriptionName: "detail_1_description",
  },
  {
    detailLabel: "Деталь 2 (в нескольких словах)",
    detailMainName: "detail_2",
    detailDescriptionName: "detail_2_description",
  },
  {
    detailLabel: "Деталь 3 (в нескольких словах)",
    detailMainName: "detail_3",
    detailDescriptionName: "detail_3_description",
  },
];
export const artistOptions: IRadioOption[] = [
  { label: "Выберу самостоятельно", value: "by_myself" },
  { label: "Помогите мне выбрать", value: "with_help" },
];
export const vocalOptions: IRadioOption[] = [
  { label: "Женский", value: "female" },
  { label: "Мужской", value: "male" },
  { label: "Два голоса", value: "both" },
  { label: "Нет предпочтений", value: "any" },
];
export const tempOptions: IRadioOption[] = [
  {
    label:
      "Нет предпочтений (артист сам выберет лучший темп исходя\n" +
      "                        из Ваших ответов)",
    value: "none",
  },
  {
    label:
      "Медленный (ощущение близости, лиричность, подойдёт для\n" +
      "                        медленного танца)",
    value: "slow",
  },
  {
    label:
      "Умеренный (ощущение сбалансированности, для большинства\n" +
      "                        песен)",
    value: "middle",
  },
  {
    label: "Быстрый (энергичный, идеален для торжеств и гимнов)",
    value: "fast",
  },
];
export const validateMessages = {
  required: "Это обязательное поле!",
};

export const firstQuestItems: IFormItem[] = [
  { label: "Как вас зовут?", name: "name", type: "input", required: true },
  {
    label: "Как зовут получателя подарка?",
    name: "recipient_name",
    type: "input",
    required: true,
  },
  {
    label: "Кем вам приходится получатель?",
    name: "who_has_to",
    type: "input",
    required: true,
  },
  {
    label: "На какое событие вы хотите подарить песню?",
    name: "event",
    type: "input",
    required: true,
  },
  {
    label: "К какой дате необходима песня?",
    name: "date",
    type: "datepicker",
    placeholder: "Выберите дату",
  },
];
export const secondQuestItems: IFormItem[] = [
  {
    label: "Выбор артиста",
    name: "artist",
    type: "radio",
    options: artistOptions,
    required: true,
  },
  {
    label: "Какой жанр вы предпочитаете?",
    name: "genre",
    type: "checkbox",
    options: genreOptions,
    required: true,
  },
  {
    label: "Какой вокал вы бы хотели услышать в песне?",
    name: "vocal",
    type: "radio",
    options: vocalOptions,
    required: true,
  },
  {
    label: "Какой по настроению должна получиться песня?",
    name: "mood",
    type: "checkbox",
    options: moodOptions,
    required: true,
  },
  {
    label: "Выберите темп",
    name: "temp",
    type: "radio",
    options: tempOptions,
    required: true,
  },
];
export const thirdQuestItems: IFormItem[] = [
  {label: "О ком эта песня? Подробно опишите получателя", name: "about", type: "textarea", required: true},
  {label: "О чем вы хотите рассказать?", name: "about_hints", type: "checkbox",options: aboutHintsOptions, required: true},
]
