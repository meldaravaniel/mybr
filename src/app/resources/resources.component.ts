import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResourcesDataSource } from './resources-datasource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource = new ResourcesDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'address', 'url', 'email', 'phone']; //'state', 'city', 'zip',
// 'advo', 'cloth', 'job', 'fin', 'food', 'house', 'health', 'hyg', 'legal', 'mental', 'sosh', 'youth', 'xport', 'qfco', 'qyco', 'lsvo', 'tflo', 'tfmpo', 'tfms', 'other', 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
