function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classlist.contains('light')) {
    //se tiver light mode, adicionar a img light
    img.setAttribute('src', './asset/avatar-light.png')
  } else{
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }
}