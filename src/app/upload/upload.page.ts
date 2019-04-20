import { Component, OnInit } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'


@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {


  task: AngularFireUploadTask;

  progress: any;  // Observable 0 to 100

  image: string; // base64

  constructor(public camera: Camera,public storage: AngularFireStorage) { }

  ngOnInit() {
  }


createUploadTask(file: string): void {

  const filePath = `my-pet-crocodile_${ new Date().getTime() }.jpg`;

  this.image = 'data:image/jpg;base64,' + file;
  this.task = this.storage.ref(filePath).putString(this.image,'data_url');

  this.progress = this.task.percentageChanges();
}

async captureImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
  }

  return await this.camera.getPicture(options)
}

async uploadHandler() {
  const base64 = await this.captureImage();
  this.createUploadTask(base64);
}

}
