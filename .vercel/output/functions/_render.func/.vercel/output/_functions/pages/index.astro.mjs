/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, e as renderTemplate, d as addAttribute, f as createAstro, g as renderComponent, F as Fragment } from '../chunks/astro/server_D73hCsTj.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BJh7nIgP.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="/" class=""> <div id="" class="2xl:pt-[120px] pt-[90px]"> <div class="grid 2xl:grid-cols-2 grid-cols-1 h-screen"> <section class="2xl:px-5 px-1 flex items-center"> <div class="w-full lg:pl-[70px] px-5"> <div class="py-1 mb-1"> <h1 class="md:text-5xl text-4xl py-1 my-1 font-bold">
Laughing Coyote Dev
</h1> <p class="text-lg pl-1 pt-1">
A subscription website service for busy small-businesses owners.
</p> </div>  <ul class="md:text-lg text-md pt-1"> <li> <b>-</b> Increased potential customers, easier to find on Google
</li> <li> ${" "} <b>-</b> The ablity to tell your story and brand
</li> <li> ${" "} <b>-</b> Peace of mind... for business owners who ${"don't"}${" "}
have time to build with software
</li> <li> ${" "} <b>-</b> A custom website that fits your business, personality, goals...
              and you alone.
</li> </ul> <div class="p-1 mt-5 text-parchment text-lg"> <button class="dropshadow-lg bg-teal hover:text-white mr-1 px-2 py-1 dropshadow-md"> <a href="/#about">About</a> </button> <button class="dropshadow-lg bg-carribean hover:text-orange ml-1 px-2 py-1 dropshadow-md"> <a href="/#contact">Contact</a> </button> </div> </div> </section> <section class="pt-[25px]"> <img src="https://images.pexels.com/photos/32907278/pexels-photo-32907278.jpeg?_gl=1*63lshe*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM1NDAyJGoxNSRsMCRoMA.." alt="" class=""> </section> </div> </div> </section>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/sections/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center"> <section id="about" class="w-1/2 pt-5 mt-[100px] bg-"> <div class="my-5"> <div class="bg- grid grid-cols-4 mr-5"> <div id="test1" class="col-span-2 bg-test1 flex justify-center"> <img class="bg-onyx py-1 pl-1 pr-2 drop-shadow-md border border-black" src="https://images.pexels.com/photos/35572940/pexels-photo-35572940.jpeg?_gl=1*1jg1wwm*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM1NDAyJGoxNSRsMCRoMA.." alt=""> </div> <div id="" class="bg- col-span-2 bg- p-5 ml-3 mt-[55px] text-lg"> <div class="bg-teal text-lavender border border-black p-5"> <h2 class="text-3xl underline">About</h2> <p class="pt-2">
Hi there, and welcome! ${"I'm"} Elsa, and I love creating colorful and
              unconventional websites.
</p>${" "}  <p class="">
As someone who has started a creative career from the ground up, I
              know what its like to be overwhelmed with figuring out web design,
              selling strategies, and marketing.
</p> </div> <div class="bg-test2 border border-black mt-[50px] p-5"> <p class="">
This was what Laughing Coyote Dev was created for, to save you
              some headaches that come with learning about:
</p> <ul> <li class="">- how to design a website</li> <li class="">- how to pick a domain and use hosting</li> <li class="">
- and etc! See
<a href="/#services" class="pl-1 underline"> services below!</a> </li> </ul> </div> </div>  </div>  </div> </section> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/sections/About.astro", void 0);

const $$Astro$3 = createAstro();
const $$DynamicAbout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DynamicAbout;
  const { title, paragraph1, paragraph2, mainImg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="about-me-wrapper" class="bg- my-5 px-3"> <div id="about-me-container" class=""> <div id="img-container" class="bg-"> <h2 id="dynamic-title" class="font-bold"> ${title} </h2> <div id="img-wrapper" class=""> <img${addAttribute(mainImg, "src")} id="img-icon" alt="" width="65" class="bg-munsell border border-[#88B7B5] rounded-lg opacity-90 2xl:w-1/2 w-3/4"> </div> </div> <div class="py- px-1"> <p id="about-paragraph2" class="bg-">-${paragraph1}</p> <p id="" class="">${paragraph2}</p> </div> </div> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/DynamicAbout.astro", void 0);

const $$MySkills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="skills-wrapper" class="w-1/4 flex justify-center bg- my-5 p-5"> <div id="skills-container"> <h2 class="text-3xl pl-2 pb-1 mt-5">My Skills</h2> <p class="text-xl pl-2 pb-1 mt-5">What I've used and ...</p> <div id="skills-grid" class="bg grid 2xl:grid-cols-2 grid-cols-1 gap-5 text-sm"> <div id="skill-sq1" class="skills-sq"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "https://logo.svgcdn.com/devicon-plain/astro-plain-wordmark.png", "title": "React", "paragraph1": " ", "paragraph2": " " })} </div> <div id="skill-sq2" class="skills-sq"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "https://logo.svgcdn.com/devicon-plain/php-plain.png", "title": "PHP", "paragraph1": "", "paragraph2": "" })} </div> <div id="skill-sq3" class="skills-sq"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "https://logo.svgcdn.com/logos/sanity.png", "title": "sanity", "paragraph1": "MERN", "paragraph2": "" })} </div> <div id="skill-sq4" class="skills-sq"> ${renderComponent($$result, "DynamicAbout", $$DynamicAbout, { "mainImg": "https://logo.svgcdn.com/logos/wordpress.png", "title": "wordpress", "paragraph1": " ", "paragraph2": " " })} </div> </div> </div> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/MySkills.astro", void 0);

const $$ListsGrid = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      title: "Minimal Distractions",
      p1: "Avoid autoplay** videos, pop-ups, or flickering elements.",
      p2: "Limit animation or make it easy to pause/disable.",
      p3: " Use clean layouts with generous whitespace."
    },
    {
      title: "Clear Visual Hierarchy",
      p1: "Use **bold headings**, **short paragraphs**, and **bullet points** to chunk information.",
      p2: "Highlight key actions (e.g. buttons, forms) clearly with contrast and spacing.",
      p3: " Consistent layout and predictable placement of elements."
    },
    {
      title: "Simple, Intuitive Navigation",
      p1: " Use a **sticky nav bar** or breadcrumb trail.",
      p2: "Keep navigation labels clear and concise (e.g., \u201CWork\u201D instead of \u201COur Portfolio of Past Collaborations\u201D).",
      p3: "Avoid hiding important links in drop-downs or hamburger menus unless necessary."
    },
    {
      title: " Focus Aids",
      p1: "Use **progress indicators**, **checklists**, or **step-by-step flows** when relevant",
      p2: "Let users **collapse or expand content** (like accordions).",
      p3: "  Provide clear CTAs (Call-to-Action) with one main goal per page."
    },
    {
      title: "Accessible, Soothing Design",
      p1: " Gentle color palette with **high contrast** options for readability.",
      p2: " Dyslexia-friendly fonts or defaults like **sans-serif** (e.g., Inter, Arial).",
      p3: " Font size should be legible (16px+ body text)."
    },
    {
      title: "Customizability (if possible)",
      p1: "Let users toggle **dark/light mode**, **font size**, or **reduced motion**.",
      p2: " Give control over how much information is shown at once.",
      p3: " \u201CI don\u2019t just build websites\u2014I co-create digital experiences that feel like an extension of your creative work, and using thoughtful design."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="MAIN-GOALS-SECTION" class="2xl:pl-4 m-5"> <div class="p-5 m-5" id="MAIN GOAL OF SITE"> <h2 class="text-2xl pb-2">All sites are built with:</h2> <div class="grid grid-cols-2 gap-5"> ${items.map((item) => renderTemplate`<div id="sq" class="bg-teal text-papaya border border-black p-4"> <h2 class="font-semibold">${item.title}</h2> <p>${item.p1}</p> <p>${item.p2}</p> <p>${item.p3}</p> </div>`)} </div> </div> </section>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/ListsGrid.astro", void 0);

const $$FourSqGallery = createComponent(($$result, $$props, $$slots) => {
  const websiteImages = [
    {
      item: "https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      p: "1"
    },
    {
      item: "https://dl.dropboxusercontent.com/scl/fi/g23z3n6u9joennznyqxc4/lc-9-20-24.png?rlkey=q75joo6od6ixkfoxr9q57kfkb&st=19kz2kwm&dl=0",
      p: "2"
    },
    {
      item: "https://dl.dropboxusercontent.com/scl/fi/r2memu9vr71tw03oe57kz/IMG_0300.jpg?rlkey=k9upvwvx4vudmyv88f8srhxlu&st=g5s7cqo5&dl=0",
      p: "3"
    },
    {
      item: "https://images.pexels.com/photos/2893525/pexels-photo-2893525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      p: "4"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="websites-grid-wrapper" class="w-1/2 m-5 my-[50px] px-5 pl-1"> <div id="HIGHLIGHTS THE paragraph5 AND AUDIENCE MESSAGE SECTIONS" class="bg-"> <div id="websites-grid" class="grid lg:grid-cols-2 gap-12"> <!-- ?GALLERY- make into key features?? --> <!-- TODO: THESE IMAGES WILL BE PREVIEWS FOR THE FEATURED WEBSITES ON LC! A ONE -AGE GLANCE AT THESE WORKS --> ${websiteImages.map((websiteImage) => renderTemplate`<div class=""> <p class="pl-1">website image ${websiteImage.p}</p> <img class="border border-onyx"${addAttribute(websiteImage.item, "src")} alt=""> </div>`)} </div> </div> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/FourSqGallery.astro", void 0);

const $$Packages = createComponent(($$result, $$props, $$slots) => {
  const templates = [
    {
      id: 1,
      title: "A. business card layout",
      siteImg: "https://images.pexels.com/photos/23744625/pexels-photo-23744625.jpeg?_gl=1*xgstfw*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM2ODk4JGoxJGwwJGgw",
      p: "Perfect starter for a business starting out. Voluptates commodi pariatur modi saepe assumenda accu sdam hic? Velit dolore ullam aliquam suscipit.",
      url: "https://template-left-nav-journal-layout-1.vercel.app/"
    },
    {
      id: 2,
      title: "B. Three page/ components",
      siteImg: "https://images.pexels.com/photos/17866368/pexels-photo-17866368.jpeg?_gl=1*xgstfw*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM2ODk4JGoxJGwwJGgw",
      p: "A three page template with all important things covered. Lorem iaepe assumenda accusamus cupiditate, eum doloribus atque explicabo adipisci consequatur quos quibusdam hic? Velit dolore ullam aliquam suscipit.",
      url: "https://lc-fish-expo-demo.vercel.app/"
    },
    {
      id: 3,
      title: "C. single pg journal",
      siteImg: "https://images.pexels.com/photos/158832/giraffe-reticulated-giraffe-neck-beautiful-158832.jpeg?_gl=1*dwowmo*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM2OTU1JGo1MyRsMCRoMA..",
      p: "A single pg portfolio which covers all three comp, perfect for online art studio, or journal. Lorem iaepe assumenda accusamus cupiditate, eum doloribus atque explicabo adipisci consequatur quos quibusdam hic? Velit dolore ullam aliquam suscipit.",
      url: "https://template-left-nav-journal-layout-1.vercel.app/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="packages-section" class="bg-"> <div id="section-wrapper" class="p-auto flex justify-center"> <div id="section-container" class=""> <div class="2xl:p-5 p-1"> <h2 class="font-semibold 2xl:text-4xl text-3xl">
Which website would be best for my business?
</h2> <p class="pt-1 pl-1 pb-5 my-1">
Sometimes it can be difficult to settle on a design, or page layout.
          Laughing Coyote takes away this dilemna by offering three select
          templates. Each one is customizable.
</p> </div> <div id="grid-container" class="2xl:px-5 px-1"> <div id="grid" class="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-16 gap-8"> ${templates.map((template) => renderTemplate`<div id="sq" class="rounded text-onyx border border-black bg-lavender"> <div id="top-bar-container" class="flex pl-3 pt-3"> <h2 class="2xl:text-lg text-medium capitalize font-semibold"> ${template.title} </h2> <a class="hover:opacity-80 hover:ease-in duration-300 text-2xl pl-1"${addAttribute(template.url, "href")}>  </a> </div> <a class="hover:opacity-80 hover:ease-in duration-300 text-2xl pl-1"${addAttribute(template.url, "href")}> <img class="border-t border-b border-black"${addAttribute(template.siteImg, "src")} alt=""> </a> <div id="paragraph-container" class="p-3"> <p class="md:text-md text-sm">${template.p}</p> </div>    </div>`)} </div> </div> </div> </div> </section>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/sections/Packages.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="contact" class="text- md:mt-[120px] 2xl:mb-3 2xl:p-3 flex 2xl:justify-center"> <div id="contact-container" class="2xl:ml-5 2xl:w-3/4"> <div id="contact-grid" class="rounded flex flex-col"> <div id="" class="bg- md:pt-5"> <p class="md:text-3xl text-xl pl-2">
You can reach me by emailing:<span class="text-munsell"> <a class="font-semibold py-1 hover:underline" href="mailto:elsahovey@gmail.com">elsahvy@gmail.com</a> </span> </p> <p class="bg- md:pl-3 pt-2 pr-5">
I am always looking for opportunities to further my skills... and to
          work with other like-minded people in tech. Email is the best way to
          get in touch, you can also find me at <span class="underline"> <a href="https://www.instagram.com/elsahoveydevdesign/">instagram</a> </span> and <span class="underline"> <a href="https://www.linkedin.com/in/elsa-hovey">
linkedIn.
</a></span> </p> </div> </div> </div> </div> <div id="back-top-top-wrapper" class="bg- lg:pr-0 pr-5 flex justify-end w-3/4 lg:ml-[150px] ml-[50px] mt-[190px]"> <p class="underline"> <a href="#hero"> back to top ^ </a> </p> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/sections/Contact.astro", void 0);

const $$Works = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-maqz3d7x": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section id="works-wrapper" class="flex justify-center items-center orange h- mt-[105px]" data-astro-cid-maqz3d7x><div id="container" class="" data-astro-cid-maqz3d7x><!-- todo: COME BACK TO v --><!-- <div id="dynamic-grid">
    {
      websites.map((item) => (
        <div class="flex">
          <h2>{item.title}</h2>
        </div>
      ))
    }
  </div> --><!-- todo: COME BACK TO ^ --><div class="bg-test2 w-1/2 ml-[50px] mt-[150px] pb-5 p-5" data-astro-cid-maqz3d7x><h2 class="text-5xl underline font-bold" data-astro-cid-maqz3d7x>Featured Works</h2><p class="pt-5" data-astro-cid-maqz3d7x>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quo
          atque fuga. Corporis doloremque sit minus, asperiores quia velit
          inventore nostrum! Dicta alias corporis numquam.
</p></div><!-- GRID v --><div id="grid" class="gridTemplateAreas test2 p-[50px] mt-[50px]" data-astro-cid-maqz3d7x><!-- *SQ-1 --><div id="sq-1" class="test1 pl-1" data-astro-cid-maqz3d7x><div id="content-container" data-astro-cid-maqz3d7x><h2 class="text-black font-bold 2xl:text-4xl sm:text-5xl 2xl:my-5 lg:mt-5 sm:mt-[50px]" data-astro-cid-maqz3d7x>
HoveyRoofing
</h2><p class="" data-astro-cid-maqz3d7x>
1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              maiores cupiditate non illum, ducimus ad vero repellendus
              accusamus iure quod? Praesentium vel, non vero ex optio recusandae
              nulla maxime dolorum!
</p><div id="btn-wrapper" class="flex gap-4" data-astro-cid-maqz3d7x><button class="bg-teal text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's a button!</a></button><button class="bg-orange text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's another button!</a></button></div></div></div><!-- *SQ-2 --><div id="sq-2" class="lavender" data-astro-cid-maqz3d7x><img src="https://images.pexels.com/photos/20727529/pexels-photo-20727529.jpeg?_gl=1*1xnvfvb*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM3MDk0JGo0MCRsMCRoMA.." alt="" class="h-full border border-black" data-astro-cid-maqz3d7x></div><!-- *SQ-3 --><div id="sq-3" class="pt-[150px]" data-astro-cid-maqz3d7x><img src="https://images.pexels.com/photos/20727529/pexels-photo-20727529.jpeg?_gl=1*1xnvfvb*_ga*MTA5MDE3MzI2MS4xNzU4MjUwMDM4*_ga_8JE65Q40S6*czE3NzAyMzUzNTckbzI3JGcxJHQxNzcwMjM3MDk0JGo0MCRsMCRoMA.." alt="" class="h-full border border-black" data-astro-cid-maqz3d7x></div><!-- *SQ-4 --><div id="sq-4" class="teal pl-1 pt-[150px]" data-astro-cid-maqz3d7x><div id="content-container" data-astro-cid-maqz3d7x><h2 class="text-black font-bold 2xl:text-4xl sm:text-5xl 2xl:my-5 lg:mt-5 sm:mt-[50px]" data-astro-cid-maqz3d7x>
Generations Backflow
</h2><p class="" data-astro-cid-maqz3d7x>
1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              maiores cupiditate non illum, ducimus ad vero repellendus
              accusamus iure quod? Praesentium vel, non vero ex optio recusandae
              nulla maxime dolorum!
</p><div class="flex gap-4" data-astro-cid-maqz3d7x><button id="btn-wrapper" class="bg-teal text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's a button!</a></button><button class="bg-orange text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's another button!</a></button></div></div></div></div><!-- GRID  ^  --></div></section>` })}`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/sections/Works.astro", void 0);

const $$Astro$2 = createAstro();
const $$CenterPageBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CenterPageBanner;
  const { BannerTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg- border-b border-munsell text-center py-2 2xl:pl-5 2xl:ml-5 mt-[150px]"> <h1 class="2xl:text-5xl md:text-4xl text-3xl pb-2 pt-2 ml-1 font-bold text-"> ${BannerTitle} </h1> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/CenterPageBanner.astro", void 0);

const $$Astro$1 = createAstro();
const $$ButtonProps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ButtonProps;
  const { btn1, btn1Link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-2 pl-[70px] flex justify-center"> <div id="btn-container" class="bg- flex items-center space-x-3"> <button id="dynamic-btn" class="border border-black opacity-85 hover:opacity-100 px-2"> <a${addAttribute(btn1Link, "href")}>${btn1}</a> </button> <button id="contact-btn" class="bg-teal text-white opacity-85 hover:opacity-100 px-2"> <a href="/#contact">contact</a> </button> </div> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/ui/ButtonProps.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const frontmatter = Astro2.props;
  const { title, testItem1, url, pubDate } = frontmatter;
  return renderTemplate`${maybeRenderHead()}<div id="card-wrapper" class="border border-black rounded-2xl bg- w-1/4"> <!-- ?: CHANGE BTNS TO CATEGORIES v--> <!-- ?:  ^--> <a${addAttribute(url, "href")}> <div class="bg- md:text-lg text-sm pt-2 p-3"> <h3 class="font-bold lg:text-2xl text-lg">${title}</h3> <p class="text-sm">${pubDate}</p> <p class=""> ${testItem1} </p> </div> </a> ${renderComponent($$result, "ButtonProps", $$ButtonProps, { "btn1": "View", "btn1Link": "/" })} </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/Card.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--!SAVE FOR MORE COMPLICATED, JS BRANCH!  V--><!-- <ul>
  <li>Laughing Coyote Dev</li>
  <li>The Running Quail</li>
  <li>Writing to Better Health</li>
  <li>THe Indoor Jungle Project</li>
</ul> --><!--!SAVE FOR MORE COMPLICATED, JS BRANCH!  -->${maybeRenderHead()}<div class="container"> <div id="sq1" class="box"> <img src="https://dl.dropboxusercontent.com/scl/fi/oraxtrdwq2apy6x4f87xj/fish-screenshot.jpg?rlkey=8woeczr9d8n7gqpqfbbnayb9e&st=gbvhsbzb&dl=0"> </div> <div id="sq2" class="box"> <!-- Laughing Coyote Dev --> <div id="btn-wrapper" class="flex justify-end my-2"> <button class="bg-munsell text-aliceBlue px-2 my-3"> <a href="/websites/laughing-coyote-dev"> Laughing Coyote Dev </a> </button> </div> <img src="https://dl.dropboxusercontent.com/scl/fi/qyv5ljfyiueutf03j8df5/lc-10-18-23.png?rlkey=ikcai42jknyzhw31tbcmtizkw&st=3mykwpp5&dl=0 "> </div> <div id="sq3" class="box"> <!-- Laughing Coyote Dev --> <img src="https://dl.dropboxusercontent.com/scl/fi/0kaamz8nlz7q1mlzkbjr2/doublepanel-screenshot.jpg?rlkey=zq5l55wn183j3v1220u0qubz7&st=zgsohzwp&dl=0"> </div> <div id="sq4" class="box"> <!-- RQ-2 --> <img src="https://dl.dropboxusercontent.com/scl/fi/79o1xauq8q67aqyuve8nz/jake10.jpg?rlkey=sbgww46ujx3223asi0k9pk78n&st=ou0sqxc2&dl=0"> </div> <div id="sq5" class="box"> <!-- Laughing Coyote Dev --> <img src="https://dl.dropboxusercontent.com/scl/fi/70vb22ili62cxkbtgvfh3/jake23.jpg?rlkey=sa19u5pn1dz8y2t0j6qhd66s7&st=071h6k27&dl=0"> </div> <div id="sq6" class="box"> <!-- RQ-2 --> <img src=" https://dl.dropboxusercontent.com/scl/fi/36vnm2e663uln6akmex4d/lc.png?rlkey=lgim54nbp0u11mviylee29hyj&st=wnu1qbwb&dl=0"> </div> <div id="btn-wrapper" class="my-2"> <button class="bg-orange text-aliceBlue px-2 my-3"> <a href="/websites/the-running-quail">The Running Quail</a> </button> </div> <div id="sq7" class="box"> <!-- RQ-2 --> <img src="https://images.pexels.com/photos/16604126/pexels-photo-16604126/free-photo-of-seals-with-opened-muzzle.jpeg?auto=compress&cs=tinysrgb&w=1600"> </div> <div id="sq8" class="box"> <!-- WTBH-3 --> <img src="https://images.pexels.com/photos/4321815/pexels-photo-4321815.jpeg?auto=compress&cs=tinysrgb&w=1600"> </div> <div id="sq9" class="box"> <!-- WTBH-3 --> <img src="https://dl.dropboxusercontent.com/scl/fi/g6546jcl9wzdv0elex74z/jtphoto7.jpg?rlkey=9fq6nh44gop6r8rwhy50bjd44&st=n0gk8vup&dl=0"> </div> <div id="sq10" class="box"> <!-- Jungle-4 --> <img src="https://dl.dropboxusercontent.com/scl/fi/g6546jcl9wzdv0elex74z/jtphoto7.jpg?rlkey=9fq6nh44gop6r8rwhy50bjd44&st=n0gk8vup&dl=0"> </div> <div id="sq11" class="box"> <!-- WTBH-3 --> <img src="https://images.pexels.com/photos/4321407/pexels-photo-4321407.jpeg?auto=compress&cs=tinysrgb&w=1600"> </div> <div id="btn-wrapper" class="flex justify- my-2"> <button class="bg-aquamarine text-cerulean px-2 my-3"> <a href="/websites/writing-to-better-health">Writing to Better Health </a> </button> </div> <div id="sq12" class="box"> <!-- WTBH-3 --> <img src="https://images.pexels.com/photos/9085057/pexels-photo-9085057.jpeg?auto=compress&cs=tinysrgb&w=1600"> </div> <div id="btn-wrapper" class="flex justify- my-2"> <button class="bg-emerald-400 text-onyx px-2 my-3"> <a href="/websites/the-indoor-jungle-project">The Indoor Jungle Project</a> </button> </div> <div id="sq13" class="box"> <!-- Jungle-4 --> <img src="https://dl.dropboxusercontent.com/scl/fi/3jtfnbqyqk5ly03x5kspuz/wtbh-3-26-24.png?rlkey=0igc90thtm07w1i9cardfeu3h&st=ahfpvhl9&dl=0"> </div> <div id="sq14" class="box"> <!-- Jungle-4 --> <img src="https://dl.dropboxusercontent.com/scl/fi/3jtfnbqyqk5ly03x5kspuz/wtbh-3-26-24.png?rlkey=0igc90thtm07w1i9cardfeu3h&st=ahfpvhl9&dl=0"> </div> </div>`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/sections/Gallery.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- PRICING -->${maybeRenderHead()}<div id="package-rates" class="bg-"> <div class="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-24 lg:py-32"> <h2 class="text-center text-3xl font-bold md:text-5xl">
Simple &amp; Fixed Pricing
</h2> <p class="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16">
30 days money-back guarantee
</p> <div class="mx-auto mb-8 grid w-full grid-cols-1 gap-4 rounded-md border border-black p-8 md:mb-12 md:grid-cols-2 md:px-12 md:py-16 lg:mb-16 lg:grid-cols-[1fr_0.25fr_1fr] lg:px-20"> <div class="grid grid-cols-1 gap-8 sm:gap-6"> <div class="flex flex-col items-center sm:flex-row"> <div class="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border bg-lavender border-black"> <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087c4bede0d9ba097dcc_Vector.svg" alt=""> </div> <div class="flex w-full flex-col items-center sm:items-start"> <p class="font-bold">Cloud Storage</p> <p class="text-center md:text-start">Up to 100GB for works</p> </div> </div> <div class="flex flex-col items-center sm:flex-row"> <div class="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border bg-lavender border-black"> <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087edd287250a11d6098_Vector-1.svg" alt=""> </div> <div class="flex w-full flex-col items-center sm:items-start"> <p class="font-bold">API&nbsp;Access</p> <p class="text-center md:text-start">Create anything you want</p> </div> </div> <div class="flex flex-col items-center sm:flex-row"> <div class="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border bg-lavender border-black"> <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a087de14b8df5878f0dc0_Vector-2.svg" alt=""> </div> <div class="flex w-full flex-col items-center sm:items-start"> <p class="font-bold">Live Chat</p> <p class="text-center md:text-start">Connect with your customers</p> </div> </div> </div> <div class="mx-auto hidden h-full w-px border-black border-l lg:block"></div> <div class="grid grid-cols-1 gap-8 sm:gap-6"> <div class="flex flex-col items-center sm:flex-row"> <div class="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border bg-lavender border-black"> <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0881c3f026042fd0f9d6_Group.svg" alt=""> </div> <div class="flex w-full flex-col items-center sm:items-start"> <p class="font-bold">Unlimited user Accounts</p> <p class="text-center md:text-start">
We ${"don\u2019t"} limit you create account
</p> </div> </div> <div class="flex flex-col items-center sm:flex-row"> <div class="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border bg-lavender border-black"> <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0885befa0cf7096b80bf_Group-1.svg" alt=""> </div> <div class="flex w-full flex-col items-center sm:items-start"> <p class="font-bold">Custom Domain</p> <p class="text-center md:text-start">Add your own domain</p> </div> </div> <div class="justify-centerr flex flex-col items-center sm:flex-row md:justify-start"> <div class="mr-4 flex h-16 w-16 flex-none flex-col items-center justify-center rounded-full border bg-lavender border-black"> <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0882f3c8a43ed446a42a_Vector.svg" alt=""> </div> <div class="flex w-full flex-col items-center sm:items-start"> <p class="font-bold">Share Information</p> <p class="text-center md:text-start">Connect with your customers</p> </div> </div> </div> </div>
Pricing Button
<h3 class="mb-5 text-2xl md:mb-6 md:text-3xl lg:mb-8"> <span class="font-bold">$199</span>
/month or
<span class="font-bold">$1788</span>
/yr ${"<--$149/mth value!"} </h3> <a href="/#contact" class="rounded max-w-[300px] bg-orange mb-5 flex w-full grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8"> <div class="mr-6 font-bold"> <div>Get Started</div> </div> <div class="h-4 w-4 flex-none"> <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"> <title>Arrow Right</title> <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon> </svg> </div> </a> <p>30 days money-back guarantee</p> <p>limited time: low fee!</p> </div> </div> <!-- -what we provide --> <!-- TODO COMPS -->`;
}, "/home/elsahv/Desktop/sandbox-astro/src/components/sections/Pricing.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- USE FL-TEMPLATE -->${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})}  ${maybeRenderHead()}<section id="about"> ${renderComponent($$result2, "About", $$About, {})} </section>  <section id="portfolio"> ${renderComponent($$result2, "CenterPageBanner", $$CenterPageBanner, { "BannerTitle": "Portfolio" })} ${renderComponent($$result2, "Gallery", $$Gallery, {})} </section>  <section id="blog"> <h2>Blog</h2> ${renderComponent($$result2, "Card", $$Card, { "title": "tifdsfstle-testing", "testItem1": "here is test item1", "pubDate": "4/5/26" })} ${renderComponent($$result2, "Card", $$Card, { "title": "tifdsfstle-testing", "testItem1": "here is test item1", "pubDate": "4/5/26" })} </section> ${renderComponent($$result2, "MySkills", $$MySkills, {})} ${renderComponent($$result2, "ListsGrid", $$ListsGrid, {})} ${renderComponent($$result2, "FourSqGallery", $$FourSqGallery, {})}  ${renderComponent($$result2, "CenterPageBanner", $$CenterPageBanner, { "BannerTitle": "Pricing" })} ${renderComponent($$result2, "Pricing", $$Pricing, {})}   <section id="pricing"> ${renderComponent($$result2, "CenterPageBanner", $$CenterPageBanner, { "BannerTitle": "Packages" })} ${renderComponent($$result2, "Packages", $$Packages, {})} </section>  <section id="contact"> ${renderComponent($$result2, "Works", $$Works, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </section> ` })}`;
}, "/home/elsahv/Desktop/sandbox-astro/src/pages/index.astro", void 0);

const $$file = "/home/elsahv/Desktop/sandbox-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
