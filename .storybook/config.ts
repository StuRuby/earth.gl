import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

addParameters({
    isFullscreen: false,
    showAddonsPanel: false,
    showSearchBox: false,
    panelPosition: 'bottom',
    hierarchySeparator: /\./,
    enableShortcuts: true,
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
