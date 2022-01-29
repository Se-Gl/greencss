export function isInView(className, duration, type = 'animation-forwards', threshold = 0.1, target = 'inView') {
  const inView = document.querySelectorAll(target)

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(className, duration, type)
        } else {
          entry.target.classList.remove(className, duration, type)
        }
      })
    },
    { threshold: threshold }
  )

  inView.forEach((element) => {
    observer.observe(element)
  })
}

// Idea from:
// https://medium.com/fasal-engineering/image-lazy-loading-using-browsers-intersection-observer-api-a-step-by-step-guide-with-examples-b1a867614e8
export function lazy() {
  let lazyImages = [].slice.call(document.querySelectorAll('.lazyload'))
  let lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target
        lazyImage.src = lazyImage.dataset.src
        lazyImage.classList.remove('lazyload')
        lazyImageObserver.unobserve(lazyImage)
      }
    })
  })

  lazyImages.forEach((lazyImage) => {
    lazyImageObserver.observe(lazyImage)
  })
}
