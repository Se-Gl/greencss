# Vanilla JavaScript inView IntersectionObserver

## How to use it

Create a script tag at the bottom of the HTML file - just above the `</body>` tag.

- Import the inView function at the **bottom of the  HTML file.**

```js
    <script type="module">
      import { isInView } from '../js/inView.js'
    </script>
```

- Add the desired animation.

The following attributes may be added. `className, duration, type, threshold = 0.1, target = 'inView'`

- The class name is defined as the class of the animation. An animation class of omenCSS must be specified. All animation classes can be found [here](https://www.omen.design/animation).
- The duration is equal to the length of the animation in milliseconds. A duration class of omenCSS must be specified. All duration classes can be found [here](https://www.omen.design/animation).
- The type is the kind of animation you want. By default, the omenCSS class 'animation-forwards' is set. Meaning that the animation retains the final state. If the type is changed, an omenCSS class must be used. All type classes can be found [here](https://www.omen.design/animation).
- The threshold is set to 10% (= 0.1) by default. Values from 0-1 are possible. Where 0 is equal to 0%. Meaning the element is animated immediately when the user reaches the top of the animated element. 1 corresponds to 100%. This is the bottom of the element.
- A class, an ID or an html element may be set as the target. By default, "inView" is selected. Using this method requires wrapping the desired animation elements in an HTML tag called "inView". Alternatively you can use your own id, classen or elements.

### Example

#### JavaScript at the bottom of the html File

```js
    <script type="module">
      import { isInView } from '../js/inView.js'

    //    1. Custom fade-in animation with: a duration of 500ms, an infinite loop, a 25% treshold and targeting an HTML element with the id of #first-animation
        isInView('fade-in', 'duration-500ms', 'animation-infinite', 0.25, '#first-animation')

    //    2. Default fade-in animation with: a duration of 500ms, a forwards animation, a 10% treshold and targeting the inView element
        isInView('fade-in', 'duration-500ms')

    //    3. Custom Title bounce-in-right animation with: a duration of 1500ms, a forwards animation, a 100% treshold and targeting the #animated-title id
        isInView('bounce-in-right', 'duration-1500ms', 'animation-forwards', 1, '#animated-title')
    </script>
```

#### HTML

```html
    <!-- custom on scroll animation - check Example 1 above -->
    <div id="first-animation" class="min-h-100vh bg-purple opacity-0"></div>

    <!-- default inView element - check Example 2 above -->
    <inView class="opacity-0">
      <div class="min-h-100vh bg-blue">
        <!-- custom on scroll animation - check Example 3 above -->
        <h1 id="animated-title" class="text-50px font-bold text-light m-auto">Animated!</h1>
      </div>
    </inView>
```

### Full example in an HTML File

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Awesome on scroll animations with omenCSS</title>
    <link rel="stylesheet" href="../css/omencss.css" />
  </head>
  <body>
    <div class="min-h-100vh bg-darkblue"></div>
    <div id="first-animation" class="min-h-100vh bg-purple opacity-0"></div>
    <inView class="opacity-0">
      <div class="flex min-h-100vh bg-blue">
        <h1 id="animated-title" class="text-50px font-bold text-light m-auto">Animated!</h1>
      </div>
    </inView>

    <script type="module">
      import { isInView } from '../js/inView.js'
      isInView('fade-in', 'duration-500ms', 'animation-forwards', 0.25, '#first-animation')
      isInView('fade-in', 'duration-500ms')
      isInView('bounce-in-right', 'duration-1500ms', 'animation-forwards', 1, '#animated-title')
    </script>
  </body>
</html>
```
