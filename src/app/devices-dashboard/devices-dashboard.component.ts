import { Component } from '@angular/core';
import { HttpService } from '../http.service';

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
  selector: 'app-devices-dashboard',
  templateUrl: './devices-dashboard.component.html',
  styleUrls: ['./devices-dashboard.component.scss']
})
export class DevicesDashboardComponent {
  allDevices: DeviceItem[] = [];
  devices: DeviceItem[] = [];
  categories: CategoryItem[] = [];
  hasDevices: boolean = false;
  isLoading: boolean = true;
  categorySelection!: number;

  constructor(private httpService: HttpService) {
    this.httpService.getDevices().subscribe((res: DeviceItem[]) => {
      this.httpService.getCategories().subscribe((res: CategoryItem[]) => {
        this.categories = res;
      });
      this.allDevices = res;
      this.devices = res;
      this.hasDevices = this.devices[0] instanceof Object;
      this.isLoading = false;
    });
  }

  categoryName(id: number) {
    return this.categories.filter((category) => category.id === id)[0].name;
  }

  handleCategorySelection() {
    this.devices = this.categorySelection === -1 ? this.allDevices : this.allDevices.filter((device) => device.CategoryId === this.categorySelection);
  }
}
