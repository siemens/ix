import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AGGrid } from 'src/preview-examples/aggrid';
import { BasicNavigation } from 'src/preview-examples/basic-navigation';
import { ButtonGroup } from 'src/preview-examples/button-group';
import { Buttons } from 'src/preview-examples/buttons';
import { Modal } from 'src/preview-examples/modal';
import { Toast } from 'src/preview-examples/toast';
import { ToastCustom } from 'src/preview-examples/toast-custom';
import { Tree } from 'src/preview-examples/tree';
import { TreeCustom } from 'src/preview-examples/tree-custom';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'preview/buttons',
  },
  {
    path: 'preview',
    children: [
      {
        path: 'buttons',
        component: Buttons,
      },
      {
        path: 'button-group',
        component: ButtonGroup,
      },
      {
        path: 'aggrid',
        component: AGGrid,
      },
      {
        path: 'basic-navigation',
        component: BasicNavigation,
      },
      {
        path: 'modal',
        component: Modal,
      },
      {
        path: 'toast',
        component: Toast,
      },
      {
        path: 'toast-custom',
        component: ToastCustom,
      },
      {
        path: 'tree',
        component: Tree,
      },
      {
        path: 'tree-custom',
        component: TreeCustom,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
