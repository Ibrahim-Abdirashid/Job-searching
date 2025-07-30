document.querySelector("#search-form").addEventListener("submit", (e) => {
  e.preventDefault();


  const query = document.querySelector("#searchInput").value;
  console.log(query);
  
    // url-kani wuxuu inoo heynayaa userka waxa uu input search soo galiyo inuu raadiyo
  const url = `https://indeed12.p.rapidapi.com/jobs/search?query=${query}&location=chicago&page_id=1&locality=us&fromage=1&radius=50&sort=date&job_type=permanent`;

    //(options-kanina) wuxuu faah faahin u yahay (url-ka) ama hubin u yahay
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f5a1db72b2msh7bba6a56a4001e8p1d8ee6jsn7da82f55214a',
		'x-rapidapi-host': 'indeed12.p.rapidapi.com'
	}
  };
  

});
