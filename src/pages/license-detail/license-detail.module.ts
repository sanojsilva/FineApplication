import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LicenseDetailPage } from './license-detail';

@NgModule({
  declarations: [
    LicenseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LicenseDetailPage),
  ],
})
export class LicenseDetailPageModule {}
