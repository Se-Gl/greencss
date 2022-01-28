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
