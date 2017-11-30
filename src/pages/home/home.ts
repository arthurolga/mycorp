import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailPage } from "../detail/detail";

import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})

export class HomePage {
  items : any[];
  modalopen: any;
  Produtos : string;
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    const newLocal2 = this.modalopen = true; 
    const newLocal = this.Produtos = "Comida";
    this.items = [];
  }

  itemSelected(item){
    this.navCtrl.push(DetailPage, {
      item: item
    })
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Venda anotada!',
      duration: 3000
    });
    toast.present();
  }
}

