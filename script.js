function typeWriterHero() {
  const text = "Aspiring Web Developer based in Nairobi 🇰🇪"
  const element = document.querySelector("#hero p")
  let index = 0

  element.textContent = ""

  const interval = setInterval(function() {
    element.textContent += text[index]
    index++

    if (index === text.length) {
      clearInterval(interval)
    }
  }, 50)
}

typeWriterHero()