import { Component, OnInit, ViewChild } from "@angular/core";
import { DataProviderService } from "../services/data-provider.service";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: "app-data-tables",
  templateUrl: "./data-tables.component.html",
  styleUrls: ["./data-tables.component.css"]
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

  constructor(private dataSer: DataProviderService) {}

  ngOnInit() {
    console.log("inside ngOninit()");
    // this.dataSer.getCommandes().subscribe(
    //   res => {
    //     this.dataSourceCommandes.data = res;

    //     // this.pagination._intl.itemsPerPageLabel = "objet par page";
    //     console.log(JSON.stringify(res));
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    this.dataSourceCommandes.data = this.dataSer.getData();
    this.dataSourceCommandes.sort = this.sortingTable;
    this.dataSourceCommandes.paginator = this.pagination;
  }
  // search in table
  searchT(queryTosearch: string) {
    this.dataSourceCommandes.filter = queryTosearch.trim().toLowerCase();
  }

  showCommandStatusLibelle(code: number): string {
    let libelle: string;
    switch (code) {
      case 1:
        libelle = "Prpération";
        break;
      case 2:
        libelle = "Commande en chargement";
        break;
      case 3:
        libelle = "En cours de Livraison";
        break;
      case 4:
        libelle = "Livrée";
        break;
    }
    return libelle;
  }

  print = () => {
    let doc = new jsPDF();
    doc.autoTable({
      head: [['Log','', 'Amount']],
      body: this.getLiveData() //returning [["log1", "$100"], ["log2", "$200"]]
    });
    doc.save('table.pdf')
  }
}
