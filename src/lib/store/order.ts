import { derived, writable } from "svelte/store";

export const order = writable <{ [key: string]: number number}>({});

// #1
export const totalOrderCount = derived(
    order,
    (o) => {
        return Object.values(o).reduce((prev, curr) => prev + curr, 0);;
    }
);