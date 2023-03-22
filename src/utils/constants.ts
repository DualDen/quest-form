import {ICBOption} from "../models/types";
import {CheckboxValueType} from "antd/es/checkbox/Group";

export const memories = [
    {label: "Какие моменты сразу вспоминаете, думая об этом человеке?", name:"memories_think_about"},
    {label: "Какие моменты были бы не такими яркими друг без друга?", name:"memories_without"},
    {label: "Какие жизненные этапы вы прошли вместе?", name:"life_stages"},
]
export const story = [
    {label: "Как вы познакомились?", name:"how_meet"},
    {label: "Через какие трудности вы прошли вместе?", name:"what_hardships"},
    {label: "Какие у вас совместные планы на будущее?", name:"plans"},
]
export const genreOptions: ICBOption[] = [
    {
        label:
            "Сонграйтер (просто фортепиано или гитара, фокус на повествовании)",
        value: "songwriter",
    },
    {
        label:
            "Рэп/Хип-Хоп (ритмичный вокал, свежее звучание и перкуссионный бит)",
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
        label:
            "Акустический поп (более широкий инструментарий, акцент на мелодии)",
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
    { label: "История Ваших отношений", value: "story" },
    { label: "Любимые совместные воспоминания", value: "memories" },
    { label: "Что эти отношения значат для Вас", value: "what_means" },
    { label: "Любимые совместные занятия", value: "hobbies" },
    { label: "Как эти отношения сформировали Вас", value: "how_shape" },
    { label: "Совместные шутки и смешные истории", value: "jokes" },
    { label: "Другие истории и воспоминания", value: "other_stories" },
];
