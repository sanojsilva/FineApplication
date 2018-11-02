import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LicenseDetailPage } from '../license-detail/license-detail';
import { HistoryPage } from '../history/history';
import { AddFinePage } from '../add-fine/add-fine';

/**
 * Generated class for the LicensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-license',
  templateUrl: 'license.html',
})
export class LicensePage {

  licenseData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.licenseData = this.navParams.get('data');
  }

  onAddFineClick() {
    this.navCtrl.push(AddFinePage, {
      data: this.licenseData
    });
  }

  onHistoryClick() {
    this.navCtrl.push(HistoryPage, {
      data: this.licenseData
    });
  }

  onDetailsClick() {
    this.navCtrl.push(LicenseDetailPage, {
      data: this.licenseData
    });
  }

}
