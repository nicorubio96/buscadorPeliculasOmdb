import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import {MovieComponent} from '../app/movie/movie.component'
import {MovieDetailComponent} from '../app/movie-detail/movie-detail.component'

const routes: Routes = [
    {path:'', component:MovieComponent},
    {path:'movie/:id', component:MovieDetailComponent},
    {path:'**', component:MovieComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}