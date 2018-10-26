import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddFinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-fine',
  templateUrl: 'add-fine.html',
})
export class AddFinePage {

  fines: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i=0; i<5; i++) {
      let fine = {
        name: 'Fine ' + (i + 1),
        selected: false
      }

      this.fines.push(fine);
    }
  }

  onSetClick() {
    this.fines.forEach((fine) => {
      console.log(fine);
    })
  }

}
