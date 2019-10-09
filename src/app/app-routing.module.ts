import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMetaComponent } from './test-meta/test-meta.component';
import { NewMetaComponent } from './new-meta/new-meta.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'new-meta'},
  { path: 'test-meta', component: TestMetaComponent },
  { path: 'new-meta', component: NewMetaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
