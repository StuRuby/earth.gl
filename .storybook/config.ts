import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

addParameters({
    options: {
        theme: create({
            base: "light",
            brandTitle: "Earth.gl",
        }),
    },
});

const req = require.context("../stories", true, /(.?stories|story)\.(?:j|t)sx?$/);

configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);
