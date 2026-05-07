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

function highlightNav() {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll("nav ul li a")

  window.addEventListener("scroll", function() {
    let current = ""

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop - 100
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach(function(link) {
      link.classList.remove("active")
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active")
      }
    })
  })
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navLinks.forEach(function(l) {
        l.classList.remove("active")
      })
      this.classList.add("active")
    })
  })
}

highlightNav()

function backToTop() {
  const button = document.querySelector("#back-to-top")

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      button.classList.add("visible")
    } else {
      button.classList.remove("visible")
    }
  })

  button.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
}

backToTop()