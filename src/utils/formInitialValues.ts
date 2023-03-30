import dayjs from "dayjs";

export const initialValues = (name:string) => {
    const initialValues = JSON.parse(localStorage.getItem(name)!);
    if (initialValues) {
        if (initialValues.date) {
            return { ...initialValues, date: dayjs(initialValues.date) };
        } else {
            return initialValues;
        }
    } else {
        return null;
    }
};