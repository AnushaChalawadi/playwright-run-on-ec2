import { test as base } from '@playwright/test';


export const test = base.extend({
    helloWorld: async ({ }, use) => {
        console.log("Hello World Fixtures");
        await use();
        console.log("Goodbye World Fixtures");
    }
});