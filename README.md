# A classy way to write sustainable CSS

[![Prettier Code Style](https://github.com/Se-Gl/greencss/actions/workflows/prettier.yml/badge.svg)](https://github.com/Se-Gl/greencss/actions/workflows/prettier.yml)
[![NPM](https://github.com/Se-Gl/greencss/actions/workflows/npm.yml/badge.svg)](https://github.com/Se-Gl/greencss/actions/workflows/npm.yml)
[![Downloads p/week](https://badgen.net/npm/dw/greencss)](https://badgen.net/npm/dw/greencss)
[![NPM version](https://badgen.net/npm/v/greencss)](https://badgen.net/npm/v/greencss)
[![License](https://badgen.net/npm/license/greencss)](https://badgen.net/npm/license/greencss)

![greencss logo](./information/greencss-logo_dark.svg)

## Getting started

```
npm i greencss
```

## Initialisation

- Import all CSS classes into your project.

```
import 'greencss/css/greencss.css'
```

- If you only want to use the animations, for example, import only one category into your project.

```
import 'greencss/css/classes/animation/animation.css'
```

Currently, the following categories are available:

- animation/animation.css
- background/background.css
- borders/borders.css
- color/color.css
- effects/effects.css
- filters/filters.css
- flex-grow/flex-grow.css
- interactivity/interactivity.css
- layout/layout.css
- sizing/sizing.css
- spacing/spacing.css
- svg/svg.css
- tables/tables.css
- transforms/transforms.css
- typography/typography.css

You will find all [CSS categories](https://www.greencss.dev/docs) here.

## Lightweight Version

Instead of the normal version, you can also import a lightweight minified version.

```
import 'greencss/css/minified/greencss.css'
```

Compact imports also work with categories:

```
import 'greencss/css/minified/classes/animation/animation.css'
import 'greencss/css/minified/classes/color/color.css'
```

## Before you code

By default, all default browser settings are reset. This means that you enjoy unlimited freedom and can choose your own design. Create a default `reset.css` file and specify your desired spacing, fonts, text sizes and font weights. Make sure that your reset file is imported after the greencss file. This way your file has a higher priority and you overwrite any greencss classes.

```
import 'greencss/css/greencss.css'.
import 'path-to-your-reset.css-file'.
```

By the way, when you use greenCSS, sustainability is not the only thing which is important. Writing CSS intuitively and easily is also crucial. For this reason, greenCSS has decided to reset the default font size to 62.5%. For you, this means that **1rem = 10px**. This allows you to calculate in the simplified power of ten.

```css
/* Set core root defaults */
html {
  font-size: 62.5%; // default pixel size reset to 10px
}
```

## How it works

All greenCSS classes have the same structure. An explanation of this principle can be given with the help of the examples below.

```html
<p class="text-blue">a blue text</p>
```

If the text colour for an element is to be changed on small screens only (0px - 480px), the class is inserted with a prefix called "sm:".

```html
<p class="text-blue sm:text-purple">a purple text for small screens</p>
```

If the text colour for an element should be changed on medium screens (480px - 768px), the "md:" needs to be inserted. Large screens (768px - 1080px) will use the "lg:" prefix.

```html
<p class="text-blue sm:text-purple md:text-green lg:text-orange">Different colours for different screen sizes</p>
```

In addition to the responsive classes, all classes also have active, focus and hover classes, which can be combined as desired.

```html
<p
  class="text-blue sm:text-purple sm:active:text-purple-5 md:text-green md:focus:text-green-2 lg:text-orange lg:hover:text-orange-10">
  Different text colours and different states for all screens
</p>
```

Values & unit sizes should have intuitive notation and resemble the original CSS where possible.

```html
<div class="opacity-50per w-100px h-20rem sm:rotate-neg-180deg"></div>
```

In the example above, the element has an opacity of 50 percent, it is 100 pixels wide and 20 REM (200pixel) tall. On small screens it has a negative tilt of 180 degrees.

All examples mentioned above can also be adapted to the darkmode. Add the prefix "dark-" where applicable.

```html
<p class="text-blue dark:text-blue-10 sm:text-purple dark:sm:text-purple-10 hover:dark:sm:text-purple-5">Darkmode example</p>
```

## Contribute

You want to collaborate? Have a look at the documentation in the information folder.

For commits, use semantig writing:

| Commit                                                             |      Usage       |
| ------------------------------------------------------------------ | :--------------: |
| fix(pencil): stop graphite breaking when too much pressure applied |   Fix Release    |
| feat(pencil): add 'graphiteWidth' option                           | Feature Release  |
| perf(pencil): remove graphiteWidth option                          | Breaking Release |

## Useful links

- [Basic usage](https://www.greencss.dev/docs/activate-basic-usage)
- [Example: Responsive Hero Section](https://www.greencss.dev/blog/how-to-create-a-responsive-hero-section)
- [greenCSS animations](https://www.greencss.dev/examples/animation)
- [greenCSS color schema](https://www.greencss.dev/brand/colours)
- [greenCSS blog](https://www.greencss.dev/blog)
- [greenCSS categories](https://www.greencss.dev/docs)
