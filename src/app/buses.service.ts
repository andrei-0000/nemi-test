import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root',
})
export class BusesService {
  busServices = [
    {
      id: 1,
      name: 'Service 1',
      area: 'Area 1',
      client: 'Client 1',
      duration: 1,
      active: true,
      latitude: '1',
      longitude: '1',
    },
    {
      id: 2,
      name: 'Service 2',
      area: 'Area 2',
      client: 'Client 2',
      duration: 2,
      active: false,
      latitude: '2',
      longitude: '2',
    },
    {
      id: 3,
      name: 'Service 3',
      area: 'Area 3',
      client: 'Client 3',
      duration: 3,
      active: true,
      latitude: '3',
      longitude: '3',
    },
    {
      id: 4,
      name: 'Service 4',
      area: 'Area 4',
      client: 'Client 4',
      duration: 4,
      active: false,
      latitude: '4',
      longitude: '4',
    },
    {
      id: 0,
      name: 'Service 0',
      area: 'Area 0',
      client: 'Client 0',
      duration: 5,
      active: true,
      latitude: '5',
      longitude: '5',
    },
    {
      id: 6,
      name: 'Service 0',
      area: 'Area 0',
      client: 'Client 0',
      duration: 5,
      active: true,
      latitude: '5',
      longitude: '5',
    },
  ];

  getAllBusServices(): Service[] {
    return this.busServices;
  }
  addService(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
