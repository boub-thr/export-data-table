import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataTablesComponent } from "./data-tables/data-tables.component";
import { HttpClientModule } from "@angular/common/http";
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatPaginatorIntl } from "@angular/material";
import { MatPaginatorIntlFr } from './shared/mat-table-pagination-translate';

@NgModule({
  declarations: [AppComponent, DataTablesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableExporterModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlFr}],
  bootstrap: [AppComponent]
})
export class AppModule {}
