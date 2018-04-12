import { Component, AfterViewChecked } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import * as $ from 'jquery';
import { ProductDetailPage } from '../product-detail/product-detail';
declare var $: any;

@Component({
  selector: 'page-scan-barcode',
  templateUrl: 'scan-barcode.html'
})
export class ScanBarcodePage {

  readData: any;
  deviceID: any;
  cameraSource: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.readData = {"itemId":""};
    this.cameraSource = [];
  }
  itemTapped(event, item) {
    console.log(this.readData);
    this.navCtrl.push(ProductDetailPage, {
      item: this.readData
    });
    console.log(JSON.stringify(navigator.onLine))
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("Destroyed");
  }
  initializeQrReader(){
    let that = this;
    let options = {
      ReadQRCode: true,
      ReadBarecode: true,
      width: 320,
      height: 240,
      videoSource: {
        id : this.deviceID,
        // max Videosource resolution width
        maxWidth: 640,
        // max Videosource resolution height
        maxHeight: 480
      },
      flipVertical: false,
      flipHorizontal: false,
      // if zoom = -1, auto zoom for optimal resolution else int
      zoom: -1,
      // string, audio file location
      beep: "assets/js/beep.mp3",
      // functional when value autoBrightnessValue is int
      autoBrightnessValue: false,
      brightness: 0,
      grayScale: false,
      contrast: 0,
      threshold: 0,
      // or matrix, example for sharpness ->  [0, -1, 0, -1, 5, -1, 0, -1, 0]
      sharpness: [],
      resultFunction: function (resText, lastImageSrc) {
        // resText as decoded code, lastImageSrc as image source
        // alert(resText);
        console.log(resText);
        that.readData.itemId = resText
      }
    }
    $('#qr-canvas').WebCodeCam(options);
  }
    
  ngOnInit() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    let that = this;
    let tempDeviceID = "";
    navigator.mediaDevices.enumerateDevices().then((deviceInfos)=> {
      console.log(JSON.stringify(deviceInfos));
      for (let i = 0; i < deviceInfos.length; ++i){
        if(deviceInfos[i].kind === 'videoinput' && deviceInfos[i].label.indexOf('back') >= 0){
          that.deviceID = deviceInfos[i].deviceId;
        }
        else if(deviceInfos[i].kind === 'videoinput'){
          tempDeviceID = deviceInfos[i].deviceId;
        }
      }
      if(!that.deviceID)
        that.deviceID  = tempDeviceID;
      that.initializeQrReader();
    });
  }
}
