import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items : any[];
  Artigos: any;

  constructor(public navCtrl: NavController) {
    const newLocal = this.Artigos = "Noticias";
    this.items = [];
  }

}
