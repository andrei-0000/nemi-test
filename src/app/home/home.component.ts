import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Service } from '../service';
import { BusesService } from '../buses.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule, MatTableModule, MatSortModule, RouterModule],
  template: `
    <section><h1>Services</h1></section>
    <section class="service-section">
      <table mat-table [dataSource]="dataSource" matSort>
        <ng-container matColumnDef="id">
          <th mat-header-cell mat-sort-header *matHeaderCellDef>ID</th>
          <td mat-cell *matCellDef="let element">{{ element.id }}</td>
        </ng-container>
        <ng-container matColumnDef="name">
          <th mat-header-cell mat-sort-header *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>
        <ng-container matColumnDef="area">
          <th mat-header-cell mat-sort-header *matHeaderCellDef>Area</th>
          <td mat-cell *matCellDef="let element">{{ element.area }}</td>
        </ng-container>
        <ng-container matColumnDef="client">
          <th mat-header-cell mat-sort-header *matHeaderCellDef>Client</th>
          <td mat-cell *matCellDef="let element">{{ element.client }}</td>
        </ng-container>
        <ng-container matColumnDef="duration">
          <th mat-header-cell mat-sort-header *matHeaderCellDef>Duration</th>
          <td mat-cell *matCellDef="let element">{{ element.duration }}</td>
        </ng-container>
        <ng-container matColumnDef="active">
          <th mat-header-cell mat-sort-header *matHeaderCellDef>Active</th>
          <td mat-cell *matCellDef="let element">
            {{ element.active ? 'Yes' : 'No' }}
          </td>
        </ng-container>
        <ng-container matColumnDef="latitude">
          <th mat-header-cell *matHeaderCellDef>Latitude</th>
          <td mat-cell *matCellDef="let element">{{ element.latitude }}</td>
        </ng-container>
        <ng-container matColumnDef="longitude">
          <th mat-header-cell *matHeaderCellDef>Longitude</th>
          <td mat-cell *matCellDef="let element">{{ element.longitude }}</td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr
          mat-row
          [class.service-row-is-active]="activeServices.has(row)"
          *matRowDef="let row; columns: displayedColumns"
        ></tr>
      </table>
    </section>
    <div class="button-container">
      <button
        [routerLink]="['/addbusservice']"
        mat-raised-button
        color="primary"
      >
        Create New Service
      </button>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'area',
    'client',
    'duration',
    'active',
    'latitude',
    'longitude',
  ];

  busServices: Service[] = [];

  dataSource = new MatTableDataSource(this.busServices);

  @ViewChild(MatSort) sort!: MatSort;

  activeServices = new Set();

  busesService: BusesService = inject(BusesService);

  ngAfterViewInit() {
    this.sort.active = 'id';
    this.sort.direction = 'asc';
    this.dataSource.sort = this.sort;
  }

  constructor() {
    this.busServices = this.busesService.getAllBusServices();
    this.dataSource = new MatTableDataSource(this.busServices);
    this.busServices.forEach((service) => {
      if (service.active) this.activeServices.add(service);
    });
  }
}
