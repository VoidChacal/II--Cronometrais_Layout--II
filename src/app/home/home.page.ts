import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) {}

  showEntr() {
    this.navCtrl.navigateForward('login')
  }
  showEntr2() {
    this.navCtrl.navigateForward('cadastr')
  }
}
