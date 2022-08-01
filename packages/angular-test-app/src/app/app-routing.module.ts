import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonGroup } from 'src/preview-examples/button-group';
import { Buttons } from 'src/preview-examples/buttons';

const routes: Routes = [
  {
    path: 'preview/buttons',
    component: Buttons,
  },
  {
    path: 'preview/button-group',
    component: ButtonGroup,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
