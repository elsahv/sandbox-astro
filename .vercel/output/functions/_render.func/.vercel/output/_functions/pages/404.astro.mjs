/* empty css                                 */
import { c as createComponent, g as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D73hCsTj.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BJh7nIgP.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-items-center gap-7"> <h1 class="text-5xl">Page Not Found</h1> <p class="text-2xl mb-10">
Sorry, we couldn't find the page you were looking for!!!.
</p> <a href="/" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Go Back Home</a> </div> ` })}`;
}, "/home/elsahv/Desktop/sandbox-astro/src/pages/404.astro", void 0);

const $$file = "/home/elsahv/Desktop/sandbox-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
