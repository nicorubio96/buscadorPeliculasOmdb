import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {OmdbService} from '../omdb.service'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  moviesDetail: any;
  id:any;

  constructor(private omdb: OmdbService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  backHome(){
    this._router.navigate(['/'])

  }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];

    this.omdb.getOmdbDetail(this.id)
    .subscribe(res=>{this.moviesDetail=res, console.log(res)});
  }

}
