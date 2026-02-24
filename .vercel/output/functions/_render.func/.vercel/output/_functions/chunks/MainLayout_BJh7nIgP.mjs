import { c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderTemplate, g as renderComponent, r as renderSlot, h as renderHead, f as createAstro } from './astro/server_D73hCsTj.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Blog", href: "/#blog" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="border-b border-onyx w-full pt-4 text-onyx"> <nav class="pl-5 pr-5 pt-1 h-[100%] grid grid-cols-2 pb-3"> <div class="flex justify-start items-end pl-1"> <div id="logo" class="text-4xl font-bold"> <a href="/">SANDBOX-astro </a> </div> </div> <ul class="flex justify-end items-end text-3xl"> ${links.map((link) => renderTemplate`<a class="mx-5"${addAttribute(link.href, "href")}> <li>${link.label}</li> </a>`)} </ul> </nav> </header>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-teal text-center w-full border-t-2 border-black"> <div>made by Elsa Hovey</div> <div class="">
Copyright &copy; ${today.getFullYear()} </div> </footer>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/Footer.astro", void 0);

const SITE_TITLE = "Laughing Coyote Dev";
const SITE_DESCRIPTION = "Web Development and Design";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Articles, Stores & Tutorials for Tech People" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><title>', " - ", "</title>", '</head> <body class="bg-parchment"> ', " ", " ", " </body></html>"])), addAttribute(SITE_DESCRIPTION, "content"), SITE_TITLE, title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/elsahv/Desktop/sandbox-astro/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
