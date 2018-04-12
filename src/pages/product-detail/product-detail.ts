import { Component } from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';
import { ProductDetails } from './item-data-mock';

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
  productData: any;
  displayItem;
  online;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.productData = navParams.get("item");
    console.log(this.productData);
    this.displayItem = ProductDetails[this.productData.itemId];
    if(!this.displayItem)
       this.displayItem = "";
    this.online = navigator.onLine;
    console.log(this.online);
  }

}
