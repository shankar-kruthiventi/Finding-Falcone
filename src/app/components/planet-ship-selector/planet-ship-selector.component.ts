import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RadiogroupUtility } from './radiogroup.utility';

@Component({
  selector: 'app-planet-ship-selector',
  templateUrl: './planet-ship-selector.component.html',
  styleUrls: ['./planet-ship-selector.component.scss']
})
export class PlanetShipSelectorComponent extends RadiogroupUtility
  implements OnInit, AfterViewChecked {
  constructor(
    public dataService: DataService,
    private cdRef: ChangeDetectorRef
  ) {
    super(dataService);
  }

  ngOnInit() {
    /* ----------------------------------Auto complete code------------------------------ */
    // Subscribed to selectedPlanets Behavioural subject
    this.selectedPlanetsSubscribe();
    // Fetch planets and distances from planets API
    this.planetDataFetcher();
    /* ----------------------------------Auto complete code ends------------------------- */

    /*-----------------------------------Radio group code-------------------------------  */
    // subscribe to selectedvehicles observable to receive updated values
    this.changeSelectedVehiclesCount();
    // Disable vehicle button group by default
    this.vehicle.disable();
    /*-----------------------------------Radio group code ends---------------------------  */
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
