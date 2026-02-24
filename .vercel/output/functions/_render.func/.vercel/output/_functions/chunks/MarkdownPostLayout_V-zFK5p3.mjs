import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderSlot, e as renderTemplate, f as createAstro } from './astro/server_D73hCsTj.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="" class="text-onyx"> <div id="back-btn-wrapper" class="pl-[72px] ml-0 pt-5 text-lg bg-munsell"> <a href="/" class="underline hover:text-white"> ${"<---"} back to home
</a> </div> <div id="post-header-grid" class="grid 2xl:grid-cols-2 grid-cols-1 bg-munsell drop-shadow-xl"> <div id="left-sq" class="flex items-center 2xl:justify-center"> <div class="2xl:pr-5 ml-2 py-2 px-5 my-[50px] w-3/4"> <h1 class="md:text-5xl text-3xl pb-2 mt-1 text-onyx"> ${frontmatter.title} </h1> <p class="md:text-2xl pl-1 pt-1 pr-3 text-onyx opacity-75"> ${frontmatter.description} </p> </div> </div> <div id="left-sq" class="flex items-center bg-onyx border border-rosyBrown dropshadow-2xl rounded-tl-2xl"> <a${addAttribute(frontmatter.websiteUrl, "href")}> <img${addAttribute(frontmatter.image.url, "src")}${addAttribute(frontmatter.image.alt, "alt")} class="rounded-tl-2xl"> </a> </div> </div> <div id="body-content" class="text-munsel mt-[45px] 2xl:ml-[450px] lg:ml-[250px] ml-5 mr-[50px] mb-[55px] text-black"> <p class="text-2xl font-bold">${frontmatter.pubDate.slice(0, 10)}</p> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
