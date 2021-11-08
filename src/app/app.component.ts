import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { StateService } from './state.service';

interface DeviceItem {
  id: number,
  color: string,
  partNumber: number,
  createdAt: string,
  updateAt: string,
  CategoryId: number,
};
interface CategoryItem {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService, private stateService: StateService) {}

  ngOnInit() {
    // this.httpService.getDevices().subscribe((res: DeviceItem[]) => {
    //   this.stateService.devices = res;
    // });
    this.httpService.getCategories().subscribe((res: CategoryItem[]) => {
      this.stateService.categories = res;
    });
  }

}
