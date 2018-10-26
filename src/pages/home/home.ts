import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LicensePage } from '../license/license';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scannedText: string = "";
  options: BarcodeScannerOptions;

  constructor(
    public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public dataProvider: DataProvider
  ) {

  }

  onLogOutClick() {
    this.navCtrl.setRoot(LoginPage);
  }

  onScanClick(){

    this.dataProvider.validateCode('2343').subscribe((res) => {
      if(res['validated'] == true) {
        this.navCtrl.push(LicensePage);
      }
      console.log(res);
    })


    // this.barcodeScanner.scan().then(barcodeData => {
    //   this.scannedText = barcodeData.text;
    //   this.dataProvider.validateCode();
    // })
    // .catch(err => {
    //   throw err;
      
    // })
  }

}
