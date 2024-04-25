import { derived, writable } from "svelte/store";

export const order = writable<{ [key: string]: number }>({});

// #1
export const totalOrderCount = derived(
    order,
    (c) => {
        /**
         * References: 
         * - https://www.w3schools.com/jsref/jsref_reduce.asp
         * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
         */
        return Object.values(c).reduce((prev, curr) => prev + curr, 0);
    }
);