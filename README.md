# omenCSS - A dynamic animated design library

## Development Process

## Getting Started

First installation

```bash
# 1.    install all dependencies
npm i

# 2.    initialize husky
npm run prepare

# 3.    manually generate .css files
npm run css

# 4.    manually create a minified .css file
npm run compressed-css

# 5.    start scss
npm run dev

# 6. start your development server
```

### SASS Commands

Run the following command during development and after the first installation to the repo. It will convert the scss files to css files. It will have an immediate impact on the `samples/index.html` file.

```bash
npm run dev
```

### Prettier Commands

```bash
# check the project for styling errors and run the --fix command
npm run lint
# fix style errors by running prettier
npm run format
```

### scss to css

Every new commit automatically creates a `css` folder with a `css/minified` subfolder. To avoid possible errors on different local vs. online repositories, the `.css` files will not be pushed to GitHub. The developer may generate CSS files manually - without the need of creating a commit. Therefore the following code must be executed. Initially, it is recommended to run the following codes after cloning the repository:

```bash
# manually generate .css files
npm run css
# manually create a minified .css file
npm run compressed-css
```

### Structure - 7:1

Building the architecture of a CSS library is probably one of the trickiest tasks to do during the development of a project. Keeping the architecture consistent and meaningful is even more of a challenge.

A common and effective modular method for structuring Sass projects is the 7-1 pattern. This approach will be used in the development process of this library.

A possible structure could look as follows _(as of January 2022)_

```txt
sass/
|
|– abstracts/
|   |– _animation.scss    # Basic Animation Variables
|   |– _color.scss        # Colour Mixins
|   |– _font.scss         # Font Related Files
|   |– _mixins.scss       # Sass Mixins
|   |– _variables.scss    # Basic Project Variables
|   |– _index.scss        # Sass Index File
|
|– vendors/
|   |– _index.scss        # 3rd Party Solutions
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography Rules
|
|– layout/
|   |– _utilities.scss    # Margin, Padding, Opacity
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid System
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _index.scss        # Sass Index File
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   |– _cards.scss        # Cards
|   |– _index.scss        # Sass Index File
|
|– pages/
|   |– _index.scss        # Custom Page Styles
|
|– themes/
|   |– _theme.scss        # Default Theme
|   |– _dark.scss         # Dark Mode
|   |– _index.scss        # Sass Index File
|
 – main.scss              # Main Sass Input File
```

### Basic Frontend Libraries

|                                                    | Stars                                                                                         | Bundle size                                                                                                                      | Maintained | Dev- Mode |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [sass](https://www.npmjs.com/package/sass)         | ![GitHub stars](https://img.shields.io/github/stars/sass/dart-sass.svg?label=%F0%9F%8C%9F)    | [![Bundle size](https://badgen.net/bundlephobia/minzip/sass/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=sass)        | ✅         | ✅        |
| [prettier](https://www.npmjs.com/package/prettier) | ![GitHub stars](https://img.shields.io/github/stars/prettier/prettier.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/prettier/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/prettier) | ✅         | ✅        |
| [husky](https://www.npmjs.com/package/husky)       | ![GitHub stars](https://img.shields.io/github/stars/typicode/husky.svg?label=%F0%9F%8C%9F)    | [![Bundle size](https://badgen.net/bundlephobia/minzip/husky/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/husky)       | ✅         | ✅        |
