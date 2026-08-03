let parks = [
    {
      Image: "images/card image 1.jpeg",
      name: "Safari Park",
      location: "Gulshan-e-Iqbal, Karachi",
      description: "A large recreational park with lush greenery, wildlife, walking areas, lakes, and family attractions.",
    },

    {
      Image: "images/card image 2.jpeg",  
      name: "Hill Park",
      location: "PECHS, karachi",
      description: "hilltop location, greenery, walking areas aur city views.",
    },

    {
      name: "Kidney Hill Park",
      location: "Karachi",
      description: "A scenic urban park known for its natural landscape, greenery, walking trails, and relaxing environment.",
    },

    {
      name: "Bagh Ibn-e-Qasim",
      location: "Clifton/Sea View, karachi",
      description: "Karachi ke bade public parks mein se ek.",
    },

    {
      name: "Jheel Park",
      location: "PECHS, Karachi",
      description: "A popular family park with green lawns, walking areas, trees, and a peaceful environment in the heart of Karachi.",
    },

     {
      name: "Kirthar National Park",
      location: "Karachi Division, Sindh",
      description: "A vast natural protected area featuring rugged mountains, valleys, wildlife, and beautiful desert landscapes.",
    }
]


let cardContainer = document.getElementById("cardContainer")

if(cardContainer) {
    for(let park of parks) {

cardContainer.innerHTML +=

`<div class="col-12 col-sm-6 col-lg-4 mb-4">

<div class="card">
  <img src="${park.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${park.name}</h5>
     <p class="text-muted">📍 ${park.location}</p>
    <p class="card-text">${park.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>





</div>`

    }
}