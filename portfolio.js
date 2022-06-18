let nav = document.querySelector("[data-nav]")
let divTitulo = document.querySelector("[data-divTitulo]")
let textoGrande = document.querySelector("[data-textoDescricao]")
let imagem = document.querySelector("[data-imagemDescricao]")
let imagem2 = document.querySelector("[data-imagemEu3]")
let projeto1 = document.querySelector("[data-projeto1]")
let tJ = document.querySelector("[data-tJ]")



window.addEventListener('click', () =>{
    var scroll1 = window.innerWidth
    tJ.innerHTML = scroll1
})



window.onscroll=()=> {
    if (window.innerWidth>678) {
        if(window.scrollY>=30){
        nav.classList.add("header")
        }
        if (window.scrollY<=29){
        nav.classList.remove("header")
        }


        if(window.scrollY>130){
            divTitulo.classList.add("surgirTitulo")
        }
        if(window.scrollY<=125){
            divTitulo.classList.remove("surgirTitulo")
        }


        if(window.scrollY>=130){
            textoGrande.classList.add("surgirDescricao")
        }
        if(window.scrollY<=125){
            textoGrande.classList.remove("surgirDescricao")
        }


        if(window.scrollY>=130){
            imagem.classList.add("surgirImagemDescricao")
        }
        if(window.scrollY<=120){
            imagem.classList.remove("surgirImagemDescricao")
        }


        if(window.scrollY>=600){
            projeto1.classList.add("surgirProjeto1")
        }if(window.scrollY<=550){
            projeto1.classList.remove("surgirProjeto1")
        }
        
}  


    if (window.innerWidth<678){
        if(window.scrollY>=10){
            nav.classList.add("header")
        }
        if (window.scrollY<=5){
            nav.classList.remove("header")
        }
        
        
        if(window.scrollY>=305){
            divTitulo.classList.add("surgirTitulo")
        }
        if(window.scrollY<=300){
            divTitulo.classList.remove("surgirTitulo")
        }
        

        if(window.scrollY>=305){
            textoGrande.classList.add("surgirDescricao")
        }
        if(window.scrollY<=300){
            textoGrande.classList.remove("surgirDescricao")
        }

        if(window.scrollY>=305){
            imagem.classList.add("surgirImagemDescricao")
        }
        if(window.scrollY<=300){
            imagem.classList.remove("surgirImagemDescricao")
        }

        if(window.scrollY>=305){
            projeto1.classList.add("surgirProjeto1")
        }if(window.scrollY<=300){
            projeto1.classList.remove("surgirProjeto1")
        }

} 
}

function scrollToElement(id) {
  const el = document.querySelector(id);

  if (el) {
    el.scrollIntoView();
  }
}

if(location.hash != "") {
	location.href = location.hash;
}

