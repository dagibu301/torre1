import { Component, OnInit } from "@angular/core";
import { PlacesService } from "../places.service";
import { Place } from "../place.model";
import { TorreService } from "src/app/torre.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"]
})
export class OffersPage implements OnInit {
  public offers: Place[];
  public connections: any;

  constructor(
    private placesService: PlacesService,
    private torreService: TorreService
  ) {}

  ngOnInit() {
    this.offers = this.placesService.places;
    
    this.connections = this.torreService.connections;
    console.log("Connections: ", this.connections);

    /*     this.torreService.getConnections().subscribe(result => {
      this.connections = result;
      console.log("Connections: ", this.connections);
    }); */
  }

  getAllConnections() {
    //Get saved list of students
    this.torreService.getList().subscribe(response => {
      console.log(response);
      this.connections = response;
    })
  }
}
