import { Component, OnInit } from '@angular/core';
import{OmdbService} from '../omdb.service'


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies : any[]
  constructor(private  omdb: OmdbService) { }

  ngOnInit(): void {

  
  }

  getOmdb(pelicula){
        this.omdb.getOmdbTitle(pelicula)
        .subscribe(res => this.movies = res.Search);
       
  }

  busqueda(pelicula: HTMLInputElement){
    this.getOmdb(pelicula.value)
    pelicula.value ='';
    pelicula.focus()
    return false;



  }
  

}
