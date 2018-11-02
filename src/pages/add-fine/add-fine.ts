import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LicensePage } from '../license/license';
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
  licenseData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.licenseData = this.navParams.get('data');
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

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      cssClass: 'red'
    });
    toast.present();
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
      const administrativeNo = this.licenseData.administativeNumber;
      this.dataProvider.addFines(selectedFines, policeman, administrativeNo).subscribe(res => {
        if (res['desp'] == 'FINE ADDED') {
          this.presentToast("FINE ADDED SUCCESSFULLY");
          setTimeout(() => {
            this.navCtrl.pop();
          }, 1000);
          
        }
      })
    }
  }

}
