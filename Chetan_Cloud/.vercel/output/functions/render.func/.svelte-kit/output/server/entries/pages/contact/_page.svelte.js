import { c as create_ssr_component, h as add_attribute, f as escape, v as validate_component, p as each } from "../../../chunks/index2.js";
import { u as user } from "../../../chunks/Data.js";
const CircularButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { size = "md" } = $$props;
  if (size === "sm") {
    size = "py-2.5 px-5 text-sm";
  } else if (size === "md") {
    size = "py-3.5 px-7 text-xl mr-2 mb-2";
  } else if (size === "lg") {
    size = "py-4 px-8 text-2xl";
  } else {
    size = "py-3.5 px-7 text-xl";
  }
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<a type="button"${add_attribute("href", href, 0)} class="${"hover:animate-pulse-slow " + escape(size, true) + " font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}">${slots.default ? slots.default({}) : ``}</a>`;
});
const ContactHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center my-16"><h3 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">Tell me about your <span class="underline underline-offset-3 decoration-4 md:decoration-6 decoration-latte-blue dark:decoration-ctp-mauve">next project</span></h3>
	<h5 class="text-lg md:text-xl mt-5 md:mt-3 text-gray-600 dark:text-gray-400">Feel free to reach out for collaborations or just a friendly hello
	</h5></div>`;
});
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { text } = $$props;
  let { href } = $$props;
  let { ctaText } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ctaText === void 0 && $$bindings.ctaText && ctaText !== void 0)
    $$bindings.ctaText(ctaText);
  return `<div class="card bg-zinc-100 dark:bg-slate-800 shadow-lg rounded-lg w-64 m-auto p-8 border-2 border-latte-blue dark:border-ctp-mauve"><div class="flex flex-col items-center w-min h-min mx-auto">${slots.default ? slots.default({}) : ``}
		<h5 class="mb-1 text-md md:text-xl font-medium mt-2 text-gray-900 dark:text-white">${escape(title)}</h5>
		<span class="text-sm text-gray-500 dark:text-gray-400 text-center">${escape(text)}</span>
		<div class="mt-6">${validate_component(CircularButton, "CircularButton").$$render($$result, { size: "sm", href }, {}, {
    default: () => {
      return `${escape(ctaText)}`;
    }
  })}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="h-full py-4 md:py-12 mx-16 md:mx-20 latte dark:bg-gray-900 select-none dark:mocha">${validate_component(ContactHeading, "ContactHeading").$$render($$result, {}, {}, {})}

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		${each(user.contact_links, (contact) => {
    return `${validate_component(ContactCard, "ContactCard").$$render(
      $$result,
      {
        title: contact.title,
        text: contact.text,
        href: contact.href,
        ctaText: contact.ctaText
      },
      {},
      {
        default: () => {
          return `<!-- HTML_TAG_START -->${contact.icon}<!-- HTML_TAG_END -->
			`;
        }
      }
    )}`;
  })}</div></section>`;
});
export {
  Page as default
};
