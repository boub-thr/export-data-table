import { Component, OnInit, ViewChild } from '@angular/core';
import { DataProviderService } from '../services/data-provider.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.css']
})
export class DataTablesComponent implements OnInit {

  dataSourceCommandes = new MatTableDataSource<any>();
  displayedColumns = [
    "commandeDate",
    "client",
    "ref",
    "natureOfGoods",
    "tarif",
    "commandeProprity",
    "secondeChauffeur",
    "deliveryDate",
    "commandeStatus",
    "paid"
  ];
  @ViewChild(MatSort, { static: true }) sortingTable: MatSort;
  @ViewChild(MatPaginator, { static: true }) pagination: MatPaginator;

  constructor(private dataSer: DataProviderService) { }

  ngOnInit() {
    console.log("inside ngOninit()");
    this.dataSer.getCommandes().subscribe(res => {
      this.dataSourceCommandes.data = res ;
      console.log(res);
    },error =>{
      console.log(error)
    });
    this.dataSourceCommandes.sort = this.sortingTable;
    this.dataSourceCommandes.paginator = this.pagination;
    this.pagination._intl.itemsPerPageLabel = "objet par page";
  }
    // search in table
    searchT(queryTosearch: string) {
      this.dataSourceCommandes.filter = queryTosearch.trim().toLowerCase();
    }

  showCommandStatusLibelle(code: number): string {
    let libelle: string ;
    switch (code){
      case 1 :
        libelle ="Prpération";
        break;
      case 2 :
          libelle ="Commande en chargement";
          break;
      case 3 :
          libelle ="En cours de Livraison";
          break;
      case 4 :
          libelle ="Livrée";
          break;

    }
    return libelle;
  }

}
