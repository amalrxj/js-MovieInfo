//references
let movieInput = document.getElementById('movie-name'),
    searchBtn = document.getElementById('search-btn'),
    result = document.getElementById('result');

//function to fetch movie info form API
let getMovieInfo = () => {
    let movieName = movieInput.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    } else {
        fetch(url).then((res) => res.json()).then((data) => {
            if (data.Response == 'True') {
                result.innerHTML = `
                <div class="info">
                <img class="poster" src=${data.Poster}></img>
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>   
                        <span>${data.Year}</span>   
                        <span>${data.Runtime}</span>   
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
    
                `;
            } else {
                result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
            }
        })
            //If error occurs
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
            });
    }
};
searchBtn.addEventListener("click", getMovieInfo);
// window.addEventListener("load", getMovieInfo);