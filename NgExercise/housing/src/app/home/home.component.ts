import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[] = []

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations()
    this.filteredLocationList = this.housingLocationList
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList
      return
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
    housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}