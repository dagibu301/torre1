import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover');  ANGULAR ROUTER
    //this.navCtrl.back();   IONIC USING ANGULAR ROUTER
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
