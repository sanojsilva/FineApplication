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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LicensePage');
  }

  onAddFineClick() {
    this.navCtrl.push(AddFinePage);
  }

  onHistoryClick() {
    this.navCtrl.push(HistoryPage);
  }

  onDetailsClick() {
    this.navCtrl.push(LicenseDetailPage);
  }

}
