import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getGenre, getTheme} from "./ActionCreators";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import {FormOptions, IGenreOption, IQuestion, IThemeOption} from "../../models/types";

interface IQuestOptionsState {
  isGenreLoading: boolean;
  genreError: null | string;
  isThemeLoading: boolean;
  themeError: null | string;
  genreOptions: IGenreOption[];
  themeOptions: IThemeOption[];
}

const initialState: IQuestOptionsState = {
  isGenreLoading: false,
  genreError: "",
  isThemeLoading: false,
  themeError: "",
  genreOptions: [],
  themeOptions: [],
};

interface IMaxCheckArgs {
  values: CheckboxValueType[];
  options: FormOptions | undefined;
  maxLength: number;
  name: string;
}


export const questOptionsSlice = createSlice({
  name: "questOptions",
  initialState,
  reducers: {
    maxAsyncCheckbox: (
      state: any,
      action: PayloadAction<IMaxCheckArgs>
    ) => {
      const length = action.payload.values.length;
          if (length === action.payload.maxLength) {
            state[action.payload.name].map((item: IGenreOption | IThemeOption) => {
              item.disabled = !action.payload.values.find(
                  (val: CheckboxValueType) => val === item.value
              );
              return item;
            });
          } else {
            state[action.payload.name].map((item: IGenreOption | IThemeOption) => {
              item.disabled = false;
              return item;
            });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenre.pending, (state: IQuestOptionsState) => {
      state.isGenreLoading = true;
    });
    builder.addCase(
      getGenre.fulfilled,
      (state: IQuestOptionsState, action: PayloadAction<IGenreOption[]>) => {
        state.genreOptions = action.payload.map((item: IGenreOption) => {
          return {
            ...item,
            label: `${item.name} (${item.description})`,
            value: item.id,
          };
        });
      }
    );
    builder.addCase(
      getGenre.rejected,
      (state: IQuestOptionsState, action: PayloadAction<any>) => {
        state.genreError = action.payload;
      }
    );
    builder.addCase(getTheme.pending, (state:IQuestOptionsState) => {
      state.isThemeLoading = true;
    });
    builder.addCase(getTheme.fulfilled,(state:IQuestOptionsState,action:PayloadAction<IThemeOption[]>) => {
      state.themeOptions = action.payload.map(item => (
          {...item,label: item.name,value: item.id,disabled: false}
      ));
      builder.addCase(getTheme.rejected,(state:IQuestOptionsState,action:PayloadAction<any>) => {
        state.themeError = action.payload;
      });
    })
  },
});

export const { maxAsyncCheckbox } = questOptionsSlice.actions;
export default questOptionsSlice.reducer;
