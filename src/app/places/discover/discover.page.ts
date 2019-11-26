import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';
import { TorreService } from 'src/app/torre.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  bio:any;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private torreService: TorreService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.bio = this.torreService.bio;
    console.log("bio: ", this.bio);
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

}
