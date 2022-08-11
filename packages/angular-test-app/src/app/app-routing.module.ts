import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AGGrid } from 'src/preview-examples/aggrid';
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
  {
    path: 'preview/aggrid',
    component: AGGrid,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
