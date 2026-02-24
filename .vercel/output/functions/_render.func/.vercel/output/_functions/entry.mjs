import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C29V2DDM.mjs';
import { manifest } from './manifest_C3P64iaj.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/websites/generations-backflow.astro.mjs');
const _page3 = () => import('./pages/websites/hovey-roofing.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/websites/generations-backflow.md", _page2],
    ["src/pages/websites/hovey-roofing.md", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f072a20d-49cf-4d28-8b59-dbec12a2a4b0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
