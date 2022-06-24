# A classy way to write sustainable CSS

[![Prettier Code Style](https://github.com/Se-Gl/greencss/actions/workflows/prettier.yml/badge.svg)](https://github.com/Se-Gl/greencss/actions/workflows/prettier.yml)
[![NPM publish](https://github.com/Se-Gl/greencss/actions/workflows/npm.yml/badge.svg)](https://github.com/Se-Gl/greencss/actions/workflows/npm.yml)

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

## Contribute

You want to collaborate? Have a look at the documentation in the information folder.

## Useful links

- [Basic usage](https://www.greencss.dev/docs/activate-basic-usage)
- [Example: Responsive Hero Section](https://www.greencss.dev/blog/how-to-create-a-responsive-hero-section)
- [greenCSS animations](https://www.greencss.dev/examples/animation)
- [greenCSS color schema](https://www.greencss.dev/brand/colours)
- [greenCSS blog](https://www.greencss.dev/blog)
- [greenCSS categories](https://www.greencss.dev/docs)
