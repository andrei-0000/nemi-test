import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BusesService } from '../buses.service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-add-bus-service',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GoogleMapsModule],
  template: `
    <div class="content">
      <h2 class="section-heading">New service</h2>
      <div class="form-map-container">
        <form [formGroup]="applyForm" (submit)="submitService()">
          <label for="id">ID</label>
          <input id="id" type="number" formControlName="id" />
          <label for="name">Name</label>
          <input id="name" type="text" formControlName="name" />
          <label for="area">Area</label>
          <input id="area" type="text" formControlName="area" />
          <label for="client">Client</label>
          <input id="client" type="text" formControlName="client" />
          <label for="duration">Duration (mm:ss)</label>
          <input id="duration" type="text" formControlName="duration" />
          <label for="latitude">Latitude</label>
          <input id="latitude" type="number" formControlName="latitude" />
          <label for="longitude">Longitude</label>
          <input id="longitude" type="number" formControlName="longitude" />
          <label for="active">Active</label>
          <input id="active" type="checkbox" formControlName="active" />
        </form>
        <div id="map">
          <google-map height="600px" width="800px" [options]="options">
          </google-map>
        </div>
      </div>
      <div class="button-container">
        <button type="submit" class="primary" (click)="submitService()">
          Create
        </button>
        <button type="button" class="secondary" (click)="onCancel()">
          Cancel
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./add-bus-service.component.css'],
})
export class AddBusServiceComponent {
  options: google.maps.MapOptions = {
    center: { lat: 41.3868, lng: 2.1701 },
    zoom: 12,
  };

  applyForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    area: new FormControl(''),
    client: new FormControl(''),
    duration: new FormControl(''),
    active: new FormControl(false),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
  });

  busesService: BusesService = inject(BusesService);

  constructor() {}

  submitService() {
    if (this.applyForm.valid) {
      this.busesService.addService(this.applyForm.value);
      this.onCancel();
    }
  }

  onCancel() {
    window.history.back();
  }
}
