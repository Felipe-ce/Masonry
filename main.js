const projetos = document.querySelector('.nav-projetos li')



function teste(){
  const masonry = document.querySelectorAll('.masonry-item')
  masonry.forEach((item)=>{
    item.classList.toggle('ativo')
  })

}

projetos.addEventListener('click', teste)