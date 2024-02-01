import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastr',
  templateUrl: './cadastr.page.html',
  styleUrls: ['./cadastr.page.scss'],
})
export class CadastrPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {}

  showVolt() {
    this.navCtrl.navigateForward('home')
  }
  showCad() {
    this.navCtrl.navigateForward('true-home')
  }

  ngOnInit() {
  }

}
