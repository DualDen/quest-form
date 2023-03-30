import { Dayjs } from "dayjs";

export interface Types {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface ICBOption extends IRadioOption {
  disabled?: boolean;
  id?: number,
}
export interface IUser {
  email: string;
  password: string;
}
export interface IOrderFields {
  name: string;
  recipient_name: string;
  who_has_to: string;
  event: string;
  date: string | Dayjs;
  artist: string;
  genre: string[];
  vocal: string;
  mood: string[];
  temp: string;
  about: string;
  about_hints: string[];
  how_meet?: string;
  what_hardships?: string;
  plans?: string;
  something_else?: string;
  memories_think_about?: string;
  memories_without?: string;
  life_stages?: string;
  what_feelings?: string;
  most_memorable_moment?: string;
  what_want_to_know?: string;
  which_places?: string;
  which_moments?: string;
  if_last_week?: string;
  relationships_impact?: string;
  life_without?: string;
  which_opportunities?: string;
  which_phrases?: string;
  local_jokes?: string;
  which_happening?: string;
  free_talk?: string;
}

export interface IOrder {
  order: IOrderFields;
}
export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface IAboutHintsForm {
  label: string;
  name: string;
}
export interface IDetailOption {
  detailLabel: string;
  detailMainName: string;
  detailDescriptionName: string;
}
export interface IFormItem {
  label: string;
  name: string;
  type: "input" | "checkbox" | "radio" | "textarea" | "datepicker";
  placeholder?: string;
  options?: any;
  required?: boolean;
}
export interface IRadioOption {
  label: string;
  value: string;
}
export type FormOptions = ICBOption[] | IRadioOption[];

interface IFirstQuest {
  name: string;
  recipient_name: string;
  who_has_to: string;
  event: string;
  date: string;
}
interface ISecondQuest {
  artist: string;
  genre: string[];
  vocal: string;
  mood: string[];
  temp: string;
}

interface IThirdQuest {
  about: string;
  about_hints: string[];
  how_meet?: string;
  what_hardships?: string;
  plans?: string;
  something_else?: string;
  memories_think_about?: string;
  memories_without?: string;
  life_stages?: string;
  what_feelings?: string;
  most_memorable_moment?: string;
  what_want_to_know?: string;
  which_places?: string;
  which_moments?: string;
  if_last_week?: string;
  relationships_impact?: string;
  life_without?: string;
  which_opportunities?: string;
  which_phrases?: string;
  local_jokes?: string;
  which_happening?: string;
  free_talk?: string;
}

export type QuestValues = IFirstQuest | ISecondQuest | IThirdQuest;

export interface IGenreOption {
  id: number;
  name: "string";
  description: string;
  value?: number;
  label?: string;
  disabled?: boolean;
}

export interface IThemeOption {
  id: number;
  name: string;
  label?: string;
  value: number;
  questions: IQuestion[];
  disabled?: boolean;
}
export interface IQuestion {
  id: number;
  name: string;
  label?: string;
  value?: number;
  theme_id: number;
}
