import {CheckboxValueType} from "antd/es/checkbox/Group";
import {IAboutHintsForm} from "../models/types";
import {hobbies, how_shape, jokes, memories, other_stories, story, what_means} from "./constants";

export const aboutHintsCheck = (values: CheckboxValueType[],state:IAboutHintsForm[] | undefined,setState:Function | undefined) => {
    const docListener = (e:any) => {
        if(state != undefined && setState != undefined) {
            console.log(25)
        if(e.target.className != "ant-checkbox-input") return;
        const {value} = e.target;
        if(value === "story" && values.includes("story")) {
            setState([...state,...story]);
        }
        else if(value === "story" && !values.includes("story")) {
            const filteredHints = state.filter(item => !story.includes(item));
            setState(filteredHints);
        }
        if(value === "memories" && values.includes("memories")) {
            setState([...state,...memories]);
        }
        else if(value === "memories" && !values.includes("memories")) {
            const filteredHints = state.filter(item => !memories.includes(item));
            setState(filteredHints);
        }
        if(value === "what_means" && values.includes('what_means')) {
            setState([...state,...what_means]);
        }
        else if(value === "what_means" && !values.includes('what_means')) {
            const filteredHints = state.filter(item => !what_means.includes(item));
            setState(filteredHints);
        }
        if(value === "hobbies" && values.includes('hobbies')) {
            setState([...state,...hobbies]);
        }
        else if(value === "hobbies" && !values.includes('hobbies')) {
            const filteredHints = state.filter(item => !hobbies.includes(item));
            setState(filteredHints);
        }
        if(value === "how_shape" && values.includes('how_shape')) {
            setState([...state,...how_shape]);
        }
        else if(value === "how_shape" && !values.includes('how_shape')) {
            const filteredHints = state.filter(item => !how_shape.includes(item));
            setState(filteredHints);
        }
        if(value === "jokes" && values.includes('jokes')) {
            setState([...state,...jokes]);
        }
        else if(value === "jokes" && !values.includes('jokes')) {
            const filteredHints = state.filter(item => !jokes.includes(item));
            setState(filteredHints);
        }
        if(value === "other_stories" && values.includes('other_stories')) {
            setState([...state,...other_stories]);
        }
        else if(value === "other_stories" && !values.includes('other_stories')) {
            const filteredHints = state.filter(item => !other_stories.includes(item));
            setState(filteredHints);
        }
    }
    }
    document.addEventListener('click',docListener);
    setTimeout(() => {
        document.removeEventListener('click',docListener,false);
    },0)
};