const cl=console.log;

const movieContainer=document.getElementById("movieContainer")


 
 let result = `` ;

 movieArray .forEach(movie => {
  
    result += ` 
    <div class="col-md-3 mb-4 ">
     <div class="card">
     <figure class=" moviecard"> 
      <img class="movieimg" src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" alt=" ">
      <figcaption>
        <div class="titleinfo">
          <div class="row">
            <div class="col-10">
              <h4>${movie.title}</h4>
               </div>
             <div class="col-2 align-self-center">
              <span class="bg-success rating" >${movie.vote_average}</span>
            </div>
          </div>
        </div>
        <div class="overview">
          <h5>overview</h5>
          <p> ${movie.overview}
          </p>
        </div>
      </figcaption>
    </figure>
  </div>
</div>


`
 })

cl(result)

 movieContainer.innerHTML = result;









