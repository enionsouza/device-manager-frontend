import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StateService } from '../state.service';

interface DeviceItem {
  id: number,
  color: string,
  partNumber: number,
  createdAt: string,
  updateAt: string,
  CategoryId: number,
};

@Component({
  selector: 'app-devices-dashboard',
  templateUrl: './devices-dashboard.component.html',
  styleUrls: ['./devices-dashboard.component.scss']
})
export class DevicesDashboardComponent implements OnInit {
  devices = this.stateService.devices;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.devices[0].color, cols: 1, rows: 1 },
          { title: this.devices[1].color, cols: 1, rows: 1 },
          { title: this.devices[2].color, cols: 1, rows: 1 },
          { title: this.devices[3].color, cols: 1, rows: 1 }
        ];
      }

      return [
        { title: this.devices[0].color, cols: 2, rows: 1 },
        { title: this.devices[1].color, cols: 1, rows: 1 },
        { title: this.devices[2].color, cols: 1, rows: 2 },
        { title: this.devices[3].color, cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private stateService: StateService) {}

  ngOnInit() {
    console.log(this.devices);
  }
}
