let parks = [
    {
      Image: "images/card-image-1.jpeg",
      name: "Safari Park",
      location: "Gulshan-e-Iqbal, Karachi",
      description: "A large recreational park with lush greenery, wildlife, walking areas, lakes, and family attractions.",
      about: "Safari Park is one of the popular recreational parks in Karachi. It is a large green area where families can enjoy nature, walking, outdoor activities and beautiful surroundings. The park is known for its greenery, wildlife areas, lakes and family-friendly environment. It is a good place to spend time with family and friends away from the busy city.",
      category: "karachi"

    },

    {
      Image: "images/hill-park-image.jpeg",  
      name: "Hill Park",
      location: "PECHS, karachi",
      description: "hilltop location, greenery, walking areas aur city views.",
      about: "Hill Park is a beautiful recreational park located on a hilltop in Karachi. The park offers greenery, walking areas and peaceful views of the city. It is a popular place for families and visitors who want to relax and enjoy some fresh air. The natural surroundings make it a pleasant place for walking and spending time outdoors.",
      category: "karachi"
    },

    {
      Image: "images/card-image-3.jpeg",
      name: "Kidney Hill Park",
      location: "Karachi",
      description: "A scenic urban park known for its natural landscape, greenery, walking trails, and relaxing environment.",
      about: "Kidney Hill Park is a scenic green space in Karachi. The park is known for its natural landscape, greenery and walking trails. Visitors can enjoy a peaceful environment while taking a walk or spending time with family. It is a great place to escape from the busy city and enjoy nature.",
      category: "karachi"
    },

    {
      Image: "images/card-image-4.jpeg",
      name: "Bagh Ibn-e-Qasim",
      location: "Clifton/Sea View, karachi",
      description: "Karachi ke bade public parks mein se ek.",
      about: "Bagh Ibn-e-Qasim is a large public park located in Clifton, Karachi. It provides open spaces where people can walk, relax and spend time with family. The park is close to the seaside area and offers visitors a pleasant outdoor environment. It is a popular destination for families and people looking for a relaxing place in the city.",
      category: "karachi"
    },

    {
      Image: "images/card-image-5.jpeg",
      name: "Jheel Park",
      location: "PECHS, Karachi",
      description: "A popular family park with green lawns, walking areas, trees, and a peaceful environment in the heart of Karachi.",
      about: "Jheel Park is a popular family park located in PECHS, Karachi. It has green lawns, trees and walking areas that provide a peaceful environment for visitors. Families can spend time together, enjoy the greenery and take relaxing walks around the park.",
      category: "karachi"
    },

     {
      Image: "images/card-image-6.jpeg",
      name: "Kirthar National Park",
      location: "Karachi Division, Sindh",
      description: "A vast natural protected area featuring rugged mountains, valleys, wildlife, and beautiful desert landscapes.",
      about: "Kirthar National Park is a large natural protected area in Sindh. It is known for its rugged mountains, valleys, wildlife and beautiful natural landscapes. The park provides an opportunity to explore nature and experience a quieter environment away from the city. It is an interesting destination for nature lovers, photographers and people interested in wildlife.",
      category: "karachi"
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
   <a href="detail.html?image=${park.Image}&name=${park.name}&location=${park.location}&description=${park.description}&about=${park.about}" class="btn btn-success rounded-pill mt-auto w-100">
    Go somewhere
</a>
  </div>
</div>





</div>`

    }
}


    //  category section start

var MakeCategoryNameDynamic = [];
var category = [];

for(var data of parks) {
     
    if (!category.includes(data.category)) {

        category.push(data.category);
        MakeCategoryNameDynamic.push(data)
    }
}


var creatingCategory = "";
for(var data of MakeCategoryNameDynamic) {
    creatingCategory +=
    `<div class="col-12 col-sm-6 col-lg-4 mb-4">
    <div class="card" style="width: 18rem;">
    <img src="images/${data.cimage}" class="card-img-top" alt="images/${data.category}">
    <div class="card-body">
        <h5 class="card-title">
            ${data.category}
        </h5>
        <p class="card-text">
            Explore the beautiful parks, beaches and natural places of ${data.category}.
        </p>
        <a href="#" class="btn btn-success">
            Explore Parks
        </a>
    </div>
</div>
</div>`

}

if(document.getElementById("CategoryListing")){
   document.getElementById("CategoryListing").innerHTML = creatingCategory;
}


    // category section end

    // zoo section
 
let zoo = [
    {
        Image: "images/zoo-section-image-1.jpeg",
        name: "Karachi Zoo",
        location: "Garden, Karachi",
        description: "A popular zoo featuring different animals, birds and family-friendly attractions.",
        about: "Karachi Zoo is one of the oldest recreational places in the city..."
    },

    {
        Image: "images/zoo-section-image-2.jpeg",
        name: "Safari Zoo",
        location: "Karachi",
        description: "A beautiful place where visitors can see wildlife and enjoy nature.",
        about: "Safari Zoo provides visitors with an opportunity to experience wildlife..."
    },

     {
        Image: "images/zoo-section-image-3.jpeg",
        name: "Lahore Zoo",
        location: "Mall Road, Lahore",
        description: "One of the oldest zoos in Pakistan, featuring a variety of animals, birds, and family-friendly attractions.",
        about: "Lahore Zoo is a popular wildlife attraction in the heart of Lahore. It provides visitors with an opportunity to see different species of animals and birds while enjoying a family-friendly outdoor environment. The zoo is a well-known recreational place for families, students, and wildlife lovers."
    },

    {
        Image: "images/zoo-section-image-4.jpeg",
        name: "Lahore Safari Zoo",
        location: "Raiwind Road, Lahore",
        description: "A large wildlife park where visitors can experience animals in spacious natural surroundings.",
        about: "Lahore Safari Zoo is a large wildlife area located on the outskirts of Lahore. It offers visitors a chance to explore nature and observe different animals in a more open environment. The park is a popular destination for families and people interested in wildlife and outdoor activities."
    },

    {
    Image: "images/zoo-section-image-5.jpeg",
    name: "Multi Gardens Zoo",
    location: "Multi Gardens, Islamabad",
    description: "A family-friendly wildlife and recreational place where visitors can enjoy animals, nature, and outdoor activities.",
    about: "Multi Gardens Zoo is a local wildlife attraction in Islamabad where families and visitors can spend time enjoying nature and observing animals. Its peaceful surroundings make it a suitable place for outdoor recreation and a simple wildlife experience."
   },

   {
        Image: "images/zoo-section-image-6.jpeg",
        name: "Wildlife Park Islamabad",
        location: "Islamabad",
        description: "A natural wildlife area offering visitors an opportunity to experience animals and nature in a peaceful setting.",
        about: "Wildlife Park Islamabad is a nature-focused destination where visitors can enjoy green surroundings and observe wildlife. It provides a relaxing outdoor experience for families, nature lovers, and visitors interested in exploring the natural environment."
    }
]    

let zooContainer = document.getElementById("zooContainer")
if(zooContainer){
    for(let data of zoo){

        zooContainer.innerHTML +=

        `
    <div class="col-12 col-sm-6 col-lg-4 mb-4">
    
<div class="card">
  <img src="${data.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
     <p class="text-muted">📍 ${data.location}</p>
    <p class="card-text">${data.description}</p>
   <a href="zoo-section-detail.html?image=${data.Image}&name=${data.name}&location=${data.location}&description=${data.description}&about=${data.about}" class="btn btn-success rounded-pill mt-auto w-100">
    Go somewhere
</a>
  </div>

    </div>

        
        `

    }
}

 $(document).ready(function(){
                $("#search").on("keyup", function() {
                    var value = $(this).val().toLowerCase();

                    $("#cardContainer div").filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });
  
$(document).ready(function(){
                $("#search").on("keyup", function() {
                    var value = $(this).val().toLowerCase();

                    $("#zooContainer div").filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });