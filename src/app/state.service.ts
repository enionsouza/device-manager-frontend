import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class StateService {
  devices: DeviceItem[];
  categories: CategoryItem[];

  constructor() {
    this.devices = [];
    this.categories = [];
  }
}
