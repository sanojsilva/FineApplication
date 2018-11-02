import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  licenseData: any;
  history: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    this.licenseData = this.navParams.get('data');
    this.getHistory(this.licenseData.administativeNumber);
  }

  getHistory(administrativeNo) {
    this.dataProvider.getHistory(administrativeNo).subscribe((data) => {
      let history = data['data'];
      console.log(history);
      history.forEach(record => {
        this.history.push({
          finesheetNo: record.finesheetNo,
          issuedDate: record.dateOfIssue,
          expiryDate: record.dateOfExpiry
        })
      })

    })
  }

}
