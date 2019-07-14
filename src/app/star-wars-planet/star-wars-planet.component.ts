import { StarWarsPlanetService } from './star-wars-planet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-wars-planet',
  templateUrl: './star-wars-planet.component.html',
  styleUrls: ['./star-wars-planet.component.css']
})
export class StarWarsPlanetComponent implements OnInit {

  // There are 61 planets in API https://swapi.co/
  private totalPlanets = 61;
  private planet;
  private showLoading = false;

  constructor(private starWarsPlanetService: StarWarsPlanetService) { }

  ngOnInit() {
    this.loadPlanet();
  }

  loadPlanet() {
    this.showLoading = true;
    const idPlanet = this.getIdPlanetRandomly();

    this.starWarsPlanetService.getPlanetById(idPlanet).subscribe(response => {
      this.planet = response;
      this.showLoading = false;
    });
  }

  // get a randomly number between 1 and 61(total planets)
  getIdPlanetRandomly() {
    return Math.floor((Math.random() * this.totalPlanets) + 1);
  }
}
