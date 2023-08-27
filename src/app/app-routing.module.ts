import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'main',
    component: MainComponent,
    children: [
      {
        path:'',
        loadChildren:()=>import('./main/main.module').then(m=>MainModule)
      }
    ]
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
