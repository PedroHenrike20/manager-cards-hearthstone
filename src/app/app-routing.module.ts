import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { CardReadComponent } from './components/card/card-read/card-read.component';
import { CardUpdateComponent } from './components/card/card-update/card-update.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "manager/card/list",
    component: CardReadComponent
  },
  {
    path: "manager/card/create",
    component: CardCreateComponent
  },
  {
    path: "manager/card/update/:id",
    component: CardUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
