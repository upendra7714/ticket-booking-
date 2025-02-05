import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards=[
    {
      src:"https://www.moviespuzzle.com/wp-content/uploads/2024/10/Game-Changer-Movie-Theatrical-Business-1.jpg",
      alt:"gamechanger",
      title:"Game Changer",
      price:220,
      button:"Book Now"
    },
    {
      src:"https://m.media-amazon.com/images/M/MV5BZjJmMjJmYWMtNTQyYy00NzcxLWE5N2EtMTY5NjRhMGZmYjNlXkEyXkFqcGc@._V1_.jpg",
      alt:"pushpa",
      title:"Pushpa 2 The Rule",
      price:220,
      button:"Book Now"
    },
    {
      src:"https://m.media-amazon.com/images/M/MV5BZmZiMDFhOTEtNmFhYi00NDI4LThhZWYtMDkxMTA0NDk5Nzk3XkEyXkFqcGc@._V1_.jpg",
      alt:"rajasaab",
      title:"RajaSaab",
      price:220,
      button:"Book Now"
    },
    {
      src:"https://m.media-amazon.com/images/M/MV5BMzUwZTM1ZDEtZGViOC00YmUxLWEwNWQtNGIyMzE2NWZkYzUyXkEyXkFqcGc@._V1_.jpg",
      alt:"Ironman",
      title:"Devara Part-1",
      price:220,
      button:"Book Now"
    },
    {
      src:"https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@._V1_.jpg",
      alt:"Ironman",
      title:"HIT 3",
      price:220,
      button:"Book Now"
    },
    {
      src:"https://m.media-amazon.com/images/M/MV5BMTBmY2E0MmYtMGVkNi00OTljLTkwZTYtZTFlMGMwNzIzZmE4XkEyXkFqcGc@._V1_.jpg",
      alt:"Ironman",
      title:"Hari Hara Veera Mallu",
      price:220,
      button:"Book Now"
    },
    {
      src:"https://m.media-amazon.com/images/M/MV5BODgyMDE4NTgtY2E3ZS00M2E5LWFmOWYtZDE2MTVhNTZhNWI4XkEyXkFqcGc@._V1_.jpg",
      alt:"Ironman",
      title:"Vishwambhara",
      price:220,
      button:"Book Now"
    },
    {
      src:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/rc16-three_four.jpg?VersionId=jmKiOevfsvA8mT7ND1Ay8gL3xa.0q.cT",
      alt:"Ironman",
      title:"RC16",
      price:220,
      button:"Book Now"
    }
  ]
}
