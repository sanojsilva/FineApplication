import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = "";
  password: string = "";
  isDisable: boolean = true;
  error: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLoginClick() {
    
    //console.log(this.username, this.password);
    this.authProvider.login(this.username, this.password).subscribe(res => {
      console.log(res);
      if(res['permission'] == 'GRANTED'){
        let policemanID = res['policemanID'];
        localStorage.setItem(JSON.stringify({policemanID}), 'policemanID');
        this.navCtrl.setRoot(HomePage);
      } else {
        this.error = "ACCESS DENIED";
        this.presentToast(this.error);
      }
    })
  }

  usernameChange() {
   // console.log('username change', this.username, this.password);
    if(this.username == "" || this.password == "") {
      this.isDisable = true;
    } else {
      this.isDisable = false;
    }
  }

  passwordChange() {
   // console.log('password change', this.username, this.password);
    if(this.username == "" || this.password == "") {
      this.isDisable = true;
    } else {
      this.isDisable = false;
    }
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

}
