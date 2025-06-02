import { c as create_ssr_component, a as compute_rest_props, v as validate_component, h as add_attribute, b as spread, d as escape_object, e as escape_attribute_value, o as compute_slots, p as each, f as escape } from "../../../chunks/index2.js";
import classNames from "classnames";
import { F as Frame } from "../../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { u as user } from "../../../chunks/Data.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-6 md:p-8",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPdding;
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPdding = paddings[padding];
  cardClass = classNames(
    "flex",
    sizes[size],
    reverse ? "flex-col-reverse" : "flex-col",
    horizontal && (reverse ? "md:flex-row-reverse md:max-w-xl" : "md:flex-row md:max-w-xl"),
    href && "hover:bg-gray-100 dark:hover:bg-gray-700",
    !img && innerPdding,
    $$props.class
  );
  imgClass = classNames(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-r-lg" : "md:rounded-l-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt="">
    <div${add_attribute("class", innerPdding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "icon",
    "width",
    "height",
    "divClass",
    "hrClass",
    "iconDivClass",
    "textSpanClass",
    "middleBgColor"
  ]);
  let $$slots = compute_slots(slots);
  let { icon = false } = $$props;
  let { width = "w-full" } = $$props;
  let { height = "h-px" } = $$props;
  let { divClass = "inline-flex justify-center items-center w-full" } = $$props;
  let { hrClass = "bg-gray-200 rounded border-0 dark:bg-gray-700" } = $$props;
  let { iconDivClass = "absolute left-1/2 px-4 bg-white -translate-x-1/2 " } = $$props;
  let { textSpanClass = "absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white " } = $$props;
  let { middleBgColor = "dark:bg-gray-900" } = $$props;
  let horizontalClass = classNames(hrClass, width, height, $$props.class);
  let classDiv = classNames(divClass, $$slots && "relative", $$props.classDiv);
  let middleClass = classNames(middleBgColor, icon ? iconDivClass : textSpanClass);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.hrClass === void 0 && $$bindings.hrClass && hrClass !== void 0)
    $$bindings.hrClass(hrClass);
  if ($$props.iconDivClass === void 0 && $$bindings.iconDivClass && iconDivClass !== void 0)
    $$bindings.iconDivClass(iconDivClass);
  if ($$props.textSpanClass === void 0 && $$bindings.textSpanClass && textSpanClass !== void 0)
    $$bindings.textSpanClass(textSpanClass);
  if ($$props.middleBgColor === void 0 && $$bindings.middleBgColor && middleBgColor !== void 0)
    $$bindings.middleBgColor(middleBgColor);
  return `${$$slots ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classDiv) }], {})}><hr${add_attribute("class", horizontalClass, 0)}>
    <div${add_attribute("class", middleClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<hr${add_attribute("class", horizontalClass, 0)}>`}`;
});
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "caption",
    "src",
    "srcset",
    "size",
    "alignment",
    "imgClass",
    "figClass",
    "alt",
    "effect",
    "captionClass"
  ]);
  let { caption = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { srcset = void 0 } = $$props;
  let { size = "max-w-full" } = $$props;
  let { alignment = "" } = $$props;
  let { imgClass = "h-auto" } = $$props;
  let { figClass = "max-w-lg" } = $$props;
  let { alt = "" } = $$props;
  let { effect = "" } = $$props;
  let { captionClass = "mt-2 text-sm text-center text-gray-500 dark:text-gray-400" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.figClass === void 0 && $$bindings.figClass && figClass !== void 0)
    $$bindings.figClass(figClass);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.effect === void 0 && $$bindings.effect && effect !== void 0)
    $$bindings.effect(effect);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  return `${caption ? `<figure${add_attribute("class", figClass, 0)}><img${add_attribute("class", classNames(imgClass, size, alignment, effect, $$props.class), 0)}${add_attribute("src", src, 0)}${add_attribute("srcset", srcset, 0)}${add_attribute("alt", alt, 0)}>
    <figcaption${add_attribute("class", captionClass, 0)}><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></figcaption></figure>` : `<img${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(imgClass, size, alignment, effect, $$props.class))
      },
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`}`;
});
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Card, "Card").$$render($$result, { class: "m-0 mt-10 p-5 mx-auto md:mx-0" }, {}, {
    default: () => {
      return `<div class="heading flex mb-5"><svg class="w-6 h-6 mr-2 text-latte-blue dark:text-ctp-mauve" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
		<h3 class="tracking-tight font-semibold text-latte-blue dark:text-ctp-mauve">Organizations</h3></div>

	${each(user.orgs, (organization) => {
        return `<a${add_attribute("href", organization.href, 0)} class="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md cursor-pointer hover:scale-[1.02] transition-transform ease-in-out duration-200">${validate_component(Img, "Img").$$render(
          $$result,
          {
            src: organization.logo,
            alt: organization.name + " logo",
            class: "w-12 h-12 mr-3 rounded-full dark:bg-gray-200"
          },
          {},
          {}
        )}
			<div><h4 class="text-lg font-medium tracking-tight text-gray-900 dark:text-white hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender">${escape(organization.name)}</h4>
				<p class="text-sm tracking-tight text-gray-900 dark:text-white">${escape(organization.role)}</p></div>
		</a>`;
      })}`;
    }
  })}


${validate_component(Card, "Card").$$render($$result, { class: "mt-5 mx-auto md:mx-0" }, {}, {
    default: () => {
      return `<div class="heading flex"><svg class="w-6 h-6 mr-2 text-latte-blue dark:text-ctp-mauve" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3A2.25 2.25 0 018.25 19.5V9m7.5 0h-7.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <h3 class="tracking-tight font-semibold text-latte-blue dark:text-ctp-mauve">Certifications</h3></div>

    <div class="items-center mt-5">${each(user.certifications, (cert) => {
        return `<a${add_attribute("href", cert.href, 0)} target="_blank" class="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md cursor-pointer hover:scale-[1.02] transition-transform ease-in-out duration-200">${validate_component(Img, "Img").$$render(
          $$result,
          {
            src: cert.logo,
            alt: cert.authority + " logo",
            class: "w-10 h-10 mr-3 rounded-full dark:bg-gray-200"
          },
          {},
          {}
        )}
                <div><h4 class="text-base font-medium tracking-tight text-gray-900 dark:text-white">${escape(cert.name)}</h4>
                    <p class="text-sm tracking-tight text-gray-700 dark:text-gray-300">${escape(cert.authority)} · ${escape(cert.date)}</p>
                    ${cert.credential ? `<p class="text-xs text-blue-600 dark:text-blue-400 break-all">Credential: ${escape(cert.credential)}
                        </p>` : ``}</div>
            </a>`;
      })}</div>`;
    }
  })}


${validate_component(Card, "Card").$$render($$result, { class: "mt-5 mx-auto md:mx-0" }, {}, {
    default: () => {
      return `<div class="heading flex"><svg class="w-6 h-6 mr-2 text-latte-blue dark:text-ctp-mauve" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
		<h3 class="tracking-tight font-semibold text-latte-blue dark:text-ctp-mauve">Education</h3></div>

	
	${each(user.education, (education) => {
        return `<a${add_attribute("href", education.href, 0)} class="items-center mt-5 hover:scale-[1.02] transition-transform ease-in-out duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 hover:rounded-md cursor-pointer"><div class="text-lg font-medium tracking-tight text-gray-900 dark:text-white hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender">${escape(education.name)}</div>
			<p class="text-sm mt-1 font-normal tracking-tight text-gray-900 dark:text-white">${escape(education.school)}</p>
			<p class="text-sm mt-1 font-normal tracking-tight text-gray-700 dark:text-gray-300">${escape(education.timespan)}</p>
		</a>`;
      })}`;
    }
  })}


${validate_component(Card, "Card").$$render($$result, { class: "mt-5 mx-auto md:mx-0" }, {}, {
    default: () => {
      return `<div class="heading flex"><svg class="w-6 h-6 mr-2 text-latte-blue dark:text-ctp-mauve" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" stroke-linecap="round" stroke-linejoin="round"></path></svg>
		<h3 class="tracking-tight font-semibold text-latte-blue dark:text-ctp-mauve">Skills</h3></div>

	<div class="items-center mt-5">
		${each(user.skills, (skill) => {
        return `<a${add_attribute("href", skill.site, 0)} class="flex space-x-3 items-center hover:bg-gray-100 dark:hover:bg-gray-600 p-3 rounded-md cursor-pointer hover:scale-[1.02] transition-transform ease-in-out duration-200">${validate_component(Img, "Img").$$render(
          $$result,
          {
            src: skill.icon,
            alt: skill.name + " logo",
            class: "h-8 w-8"
          },
          {},
          {}
        )}
				<h4 class="text-base tracking-tight text-gray-900 dark:text-white hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender">${escape(skill.name)}</h4>
			</a>`;
      })}</div>`;
    }
  })}`;
});
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="intro text-center md:text-left mx-5"><h5 class="font-semilight mb-1 tracking-tight text-slate-600 dark:text-slate-300">Hi, my name is
	</h5>
	<h1 class="hidden md:block text-4xl font-bold tracking-tight text-slate-200"><span class="text-latte-blue dark:text-ctp-mauve">${escape(user.nameWithoutSuffix)}</span><span class="pl-2 text-sm text-slate-500 dark:text-slate-300 underline decoration-slate-500 decoration-1" title="also known as">aka</span><span class="pl-2 text-sm text-slate-600 dark:text-slate-300">${escape(user.nickname)}</span></h1>
	<div class="md:hidden flex flex-col text-4xl font-bold tracking-tight text-slate-200"><span class="text-latte-blue dark:text-ctp-mauve">${escape(user.nameWithoutSuffix)}</span>
		<span class="mb-4 text-sm text-slate-500 dark:text-slate-300 underline decoration-slate-500 decoration-1" title="also known as">aka <span class="pl-2 text-sm text-slate-600 dark:text-slate-300">${escape(user.nickname)}</span></span></div>
	<h3 class="text-lg font-medium tracking-tight text-slate-600 dark:text-slate-200">${escape(user.ed)}</h3>
	<p class="mt-4 text-lg font-normal tracking-tight text-slate-500 dark:text-slate-200"><!-- HTML_TAG_START -->${user.about}<!-- HTML_TAG_END --></p></div>`;
});
const BottomLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="flex justify-center items-center mt-16 px-8 md:px-24">${validate_component(Hr, "Hr").$$render($$result, { width: "w-full mr-8" }, {}, {})}
	<svg class="animate-bounce w-12 h-12 text-latte-blue dark:text-ctp-mauve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3.333a6.667 6.667 0 100 13.334A6.667 6.667 0 0010 3.333zm0 1.667a5 5 0 100 10A5 5 0 0010 5z" clip-rule="evenodd"></path></svg>
	${validate_component(Hr, "Hr").$$render($$result, { width: "w-full ml-8" }, {}, {})}</div>`;
});
const AnimatedLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { showIcon = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.showIcon === void 0 && $$bindings.showIcon && showIcon !== void 0)
    $$bindings.showIcon(showIcon);
  return `<a${add_attribute("href", href, 0)} class="relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender">${showIcon ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="mr-1 h-3 w-3" fill="currentColor" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>` : ``}
	${slots.default ? slots.default({}) : ``}</a>`;
});
const TagChip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center rounded-full dark:bg-indigo-400/10 bg-indigo-300/25 px-3 py-1 text-xs font-medium leading-5 text-latte-lavender dark:text-mocha-lavender">${slots.default ? slots.default({}) : ``}</div>`;
});
const ItemCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { timespan } = $$props;
  let { href } = $$props;
  let { role } = $$props;
  let { short_desc } = $$props;
  let { external_links } = $$props;
  let { tags } = $$props;
  if ($$props.timespan === void 0 && $$bindings.timespan && timespan !== void 0)
    $$bindings.timespan(timespan);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.short_desc === void 0 && $$bindings.short_desc && short_desc !== void 0)
    $$bindings.short_desc(short_desc);
  if ($$props.external_links === void 0 && $$bindings.external_links && external_links !== void 0)
    $$bindings.external_links(external_links);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  return `<a${add_attribute("href", href, 0)} class="container mx-auto flex flex-col items-center text-center md:text-left md:inline-block md:max-w-max scale-[0.98] relative p-4 md:mx-0 w-full hover:scale-[1.001] md:hover:scale-[1.02] transition-transform ease-in-out duration-200 dark:hover:bg-gray-800 hover:bg-gray-100 hover:rounded-lg"><header class="mb-2 mt-1 text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400/95 sm:col-span-2">${escape(timespan)}</header>
	<a${add_attribute("href", href, 0)} target="_blank" rel="noreferrer" class="font-medium dark:text-slate-200 text-slate-900 transition duration-100 hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender"><a${add_attribute("href", href, 0)} class="group leading-snug">${escape(role)}

			${short_desc ? `<span class="mb-2 mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-latte-lavender dark:hover:text-mocha-lavender hidden md:inline">-</span>` : ``}

			<span class="mb-2 mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-latte-lavender dark:hover:text-mocha-lavender block md:inline">${escape(short_desc)}</span><span class="md:inline-block translate-x-1 transition-transform group-hover:translate-x-2 hidden">←</span></a></a>
	<p class="mt-2 font-sans text-sm leading-normal text-slate-700 dark:text-slate-300">${slots.default ? slots.default({}) : ``}</p>
	<ul class="mt-2 flex flex-wrap"><li class="mr-4 space-x-3">${each(external_links, (link) => {
    return `${validate_component(AnimatedLink, "AnimatedLink").$$render($$result, { href: link.url, showIcon: true }, {}, {
      default: () => {
        return `${escape(link.label)}`;
      }
    })}`;
  })}</li></ul>
	${tags.length > 0 ? `<ul class="mt-2 flex flex-wrap">${each(tags, (tag) => {
    return `<li class="mr-1.5 mt-2">${validate_component(TagChip, "TagChip").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}
				</li>`;
  })}</ul>` : ``}</a>`;
});
const ExperienceCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mb-5">
	${each(user.experience, (experience) => {
    return `${validate_component(ItemCard, "ItemCard").$$render(
      $$result,
      {
        timespan: experience.timespan,
        href: experience.href,
        role: experience.role,
        short_desc: "",
        external_links: experience.external_links,
        tags: experience.tags
      },
      {},
      {
        default: () => {
          return `<!-- HTML_TAG_START -->${experience.description}<!-- HTML_TAG_END -->
		`;
        }
      }
    )}`;
  })}</div>`;
});
const ProjectCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="projects md:space-y-2 mt-5">
	${each(user.projects, (project) => {
    return `${validate_component(ItemCard, "ItemCard").$$render(
      $$result,
      {
        timespan: project.timespan,
        href: project.href,
        role: project.role,
        short_desc: project.short_description,
        external_links: project.external_links,
        tags: project.tags
      },
      {},
      {
        default: () => {
          return `<!-- HTML_TAG_START -->${project.description}<!-- HTML_TAG_END -->
		`;
        }
      }
    )}`;
  })}</div>`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="text-xl mt-10 md:mt-0 text-center md:text-left mb-5 font-bold uppercase tracking-widest text-latte-blue lg:relative lg:right-4 dark:text-ctp-mauve">${slots.default ? slots.default({}) : ``}</h2>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-12 latte dark:bg-gray-900 select-none dark:mocha"><div class="flex flex-col md:flex-row md:space-x-36 justify-center"><div class="left md:w-1/4">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}
			${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})}</div>
		<div class="right max-w-screen-sm">${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Experience`;
    }
  })}
			${validate_component(ExperienceCards, "ExperienceCards").$$render($$result, {}, {}, {})}
			${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Projects`;
    }
  })}
			${validate_component(ProjectCards, "ProjectCards").$$render($$result, {}, {}, {})}</div></div>
	${validate_component(BottomLine, "BottomLine").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
