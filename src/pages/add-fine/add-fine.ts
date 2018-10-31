import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    this.getFines();
    // for(let i=0; i<5; i++) {
    //   let fine = {

    //     name: 'Fine ' + (i + 1),
    //     selected: false
    //   }

    //   this.fines.push(fine);
    // }
  }

  getFines() {
    this.dataProvider.getFines().subscribe((data) => {
      let fines = data['fines'];
      fines.forEach(fine => {
        this.fines.push({
          no: fine.fineNo,
          name: fine.fineName,
          amount: fine.fineAmount,
          selected: false
        })
      })

    })
  }

  onSetClick() {
    let selectedFines = [];
    this.fines.forEach((fine) => {
      
      if(fine.selected == true) {
        selectedFines.push(fine);
      }
      
    })

    if(selectedFines.length > 0) {
      const policeman = JSON.parse(localStorage.getItem('policeman'));
      console.log(policeman);
      this.dataProvider.addFines(selectedFines, policeman).subscribe(res => {
        console.log(res);
      })
    }
  }

}
