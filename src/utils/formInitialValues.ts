import dayjs from "dayjs";

export const initialValues = (name:string) => {
    const initialValues = JSON.parse(localStorage.getItem(name)!);
    if (initialValues) {
        if (initialValues.deadline) {
            return { ...initialValues, deadline: dayjs(initialValues.deadline) };
        } else {
            return initialValues;
        }
    } else {
        return null;
    }
};