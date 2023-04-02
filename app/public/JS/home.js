window.addEventListener('load', (e) => {

    let collapse = document.getElementById('collapse');
    let collapseBody = document.getElementById('collapse-body');

    collapse.addEventListener("click", () => {
        e.preventDefault();
        collapseBody.classList.toggle("deploy");

    })



    //let itemGere = document.getElementById('item-genre');
    let itemGenre = document.querySelectorAll('.item-genre')

    let mainGallery = document.getElementById('main-gallery');




    /*itemGenre.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            let games = () => {

                let listgames = fetch("https://www.freetogame.com/api/games")
                    .then((respuesta) => {
                        return respuesta.json();
                    })
                return listgames;
            }
            games().then((dato) => {

                console.log(dato)

            })
                .catch(err => console.log(err));
        })
    })*/
});

