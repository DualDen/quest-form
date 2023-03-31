import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getGenre, getProduct, getTheme } from "./ActionCreators";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import {
  FormOptions,
  IGenreOption,
  IProductOption,
  IThemeOption,
} from "../../models/types";

interface IQuestOptionsState {
  isGenreLoading: boolean;
  genreError: null | string;
  isThemeLoading: boolean;
  themeError: null | string;
  isProductLoading: boolean;
  productError: string | null;
  genreOptions: IGenreOption[];
  themeOptions: IThemeOption[];
  productOptions: IProductOption[];
}

const initialState: IQuestOptionsState = {
  isGenreLoading: false,
  genreError: "",
  isThemeLoading: false,
  themeError: "",
  isProductLoading: false,
  productError: "",
  genreOptions: [],
  themeOptions: [],
  productOptions: [],
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
    maxAsyncCheckbox: (state: any, action: PayloadAction<IMaxCheckArgs>) => {
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
    builder.addCase(getTheme.pending, (state: IQuestOptionsState) => {
      state.isThemeLoading = true;
    });
    builder.addCase(
      getTheme.fulfilled,
      (state: IQuestOptionsState, action: PayloadAction<IThemeOption[]>) => {
        state.themeOptions = action.payload.map((item) => ({
          ...item,
          label: item.name,
          value: item.id,
          disabled: false,
        }));
      }
    );
    builder.addCase(
        getTheme.rejected,
        (state: IQuestOptionsState, action: PayloadAction<any>) => {
          state.themeError = action.payload;
        }
    );
    builder.addCase(getProduct.pending, (state: IQuestOptionsState) => {
      state.isProductLoading = true;
    });
    builder.addCase(
        getProduct.fulfilled,
        (
            state: IQuestOptionsState,
            action: PayloadAction<IProductOption[]>
        ) => {
          state.productOptions = action.payload.map((item) => {
            const price = parseInt(item.price.toString().slice(0,-2));
            return { ...item, label: `${item.name} - ${price}`, value: item.id };
          });
        }
    );
    builder.addCase(
        getProduct.rejected,
        (state: IQuestOptionsState, action: PayloadAction<any>) => {
          state.productError = action.payload;
        }
    );
  },
});

export const { maxAsyncCheckbox } = questOptionsSlice.actions;
export default questOptionsSlice.reducer;
