import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFinePage } from './add-fine';

@NgModule({
  declarations: [
    AddFinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddFinePage),
  ],
})
export class AddFinePageModule {}
