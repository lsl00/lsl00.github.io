#let configPage(body) = {
  set text(font: ("Liberation Serif","Source Han Serif"),size: 18pt)
  set page(
    margin: (top: 20pt, bottom: 20pt, rest: 1em),
    numbering: none,
    number-align: center,
    height: auto,
  )
  // set par(first-line-indent: 2em)
  show raw : (body) => {
    set text(font: "Fira Mono")
    body
  }
  body
}