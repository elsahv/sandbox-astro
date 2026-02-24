import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D0hSn5R4.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_D73hCsTj.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/elsahv/Desktop/sandbox-astro/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D6Hj8hfo.css"},{"type":"inline","content":"p{font-size:18px}.container{width:1400px;margin:20px auto;-moz-columns:4;columns:4;-moz-column-gap:20px;column-gap:20px}.container .box{width:100%;margin-bottom:10px;-moz-column-break-inside:avoid;break-inside:avoid}.container .box img{max-width:100%}@media (max-width: 1200px){.container{width:calc(100% - 40px);-moz-columns:3;columns:3}}@media (max-width: 768px){.container{-moz-columns:2;columns:2}}@media (max-width: 480px){.container{-moz-columns:1;columns:1}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D6Hj8hfo.css"}],"routeData":{"route":"/websites/generations-backflow","isIndex":false,"type":"page","pattern":"^\\/websites\\/generations-backflow\\/?$","segments":[[{"content":"websites","dynamic":false,"spread":false}],[{"content":"generations-backflow","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/websites/generations-backflow.md","pathname":"/websites/generations-backflow","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D6Hj8hfo.css"}],"routeData":{"route":"/websites/hovey-roofing","isIndex":false,"type":"page","pattern":"^\\/websites\\/hovey-roofing\\/?$","segments":[[{"content":"websites","dynamic":false,"spread":false}],[{"content":"hovey-roofing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/websites/hovey-roofing.md","pathname":"/websites/hovey-roofing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D6Hj8hfo.css"},{"type":"inline","content":"p{font-size:18px}.container{width:1400px;margin:20px auto;-moz-columns:4;columns:4;-moz-column-gap:20px;column-gap:20px}.container .box{width:100%;margin-bottom:10px;-moz-column-break-inside:avoid;break-inside:avoid}.container .box img{max-width:100%}@media (max-width: 1200px){.container{width:calc(100% - 40px);-moz-columns:3;columns:3}}@media (max-width: 768px){.container{-moz-columns:2;columns:2}}@media (max-width: 480px){.container{-moz-columns:1;columns:1}}\n.gridTemplateAreas[data-astro-cid-maqz3d7x]{display:grid;grid-gap:1em;grid-template-areas:\"A B\" \"C D\"}@media screen and (max-width: 800px){.gridTemplateAreas[data-astro-cid-maqz3d7x]{display:grid;grid-template-areas:\"A\" \"B\" \"D\" \"C\"}}#sq-1[data-astro-cid-maqz3d7x]{grid-area:A}#sq-2[data-astro-cid-maqz3d7x]{grid-area:B}#sq-3[data-astro-cid-maqz3d7x]{grid-area:C}#sq-4[data-astro-cid-maqz3d7x]{grid-area:D}#content-container[data-astro-cid-maqz3d7x]{margin:50px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/elsahv/Desktop/sandbox-astro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/elsahv/Desktop/sandbox-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/websites/generations-backflow@_@md":"pages/websites/generations-backflow.astro.mjs","\u0000@astro-page:src/pages/websites/hovey-roofing@_@md":"pages/websites/hovey-roofing.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/elsahv/Desktop/sandbox-astro/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_C3P64iaj.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.D6Hj8hfo.css","/favicon.svg","/images/coyote.png","/images/image1.png","/images/image2.png","/images/image3.png","/images/image4.png","/images/image5.png","/images/image6.png","/images/image7.png","/images/screen.png","/images/self.jpg","/fish-images/about.jpg","/fish-images/aboutImg.jpg","/fish-images/boy-watch-fish.jpg","/fish-images/contactImg.jpg","/fish-images/error-404.png","/fish-images/gallery1.jpg","/fish-images/gallery2.jpg","/fish-images/gallery3.jpg","/fish-images/gallery4.jpg","/fish-images/gallery5.jpg","/fish-images/hero-fish.jpg","/fish-images/jellyfish.jpg","/fish-images/logo.png","/fish-images/sliderImg1.jpg","/fish-images/sliderImg2.jpg","/fish-images/sliderImg3.jpg","/fish-images/sliderImg4.jpg","/fish-images/team1.png","/fish-images/team2.png","/fish-images/team3.png","/screenshots/hoveyroofing.png","/screenshots/site1.png","/screenshots/site2.png","/screenshots/site3.png","/screenshots/site4.png","/screenshots/site5.png","/screenshots/site6.png","/screenshots/site7.png","/fish-images/assets/jellyfish.jpg","/fish-images/assets/school.jpg","/fish-images/assets/seals.jpg","/fish-images/assets/shark.jpg","/fish-images/assets/starfish.jpg","/fish-images/assets/turtle.jpg","/fish-images/assets/urchin.jpg","/fish-images/assets/weird-looking-fish.jpg","/fish-images/assets/yellow-fish.jpg","/screenshots/designs/-hero.png","/screenshots/designs/-writingtobetterhealth.png","/screenshots/designs/blog-right-sidebar.png","/screenshots/designs/double-panel.png","/screenshots/designs/fish-expo-demo.png","/screenshots/designs/site1.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"RDlmQWuGVyoqRFmHXt6csY9/qXEAOtcaa+UZCTBjHh8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
