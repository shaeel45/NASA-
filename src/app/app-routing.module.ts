import { NgModule ,OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { Title } from '@angular/platform-browser';


const routes: Routes = [
  {path:"", component:HomeComponent, data:{title:"Home"}},
  { path: "about", component: AboutComponent, data: { title: "About" }  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{

constructor(private titleService:Title){
  this.titleService.setTitle("Home")
 
}

ngOnInit(): void {
    
  }
;



 }
