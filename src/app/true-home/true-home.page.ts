import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-true-home',
  templateUrl: './true-home.page.html',
  styleUrls: ['./true-home.page.scss'],
})
export class TrueHomePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  showEdit(){
    this.navCtrl.navigateForward('edit-perfil')
  }

  ngOnInit() {
  }

}
