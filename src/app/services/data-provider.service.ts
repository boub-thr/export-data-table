import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataProviderService {
  data = [
    {
      id: 5,
      client: {
        id: 3,
        raisonSocial: "azeaze",
        formeJuridique: "azeaze",
        adresse: {
          ligne1: "azeaze",
          ligne2: "azeaze",
          ligne3: "azeaze",
          cp: "86350",
          ville: "Inezgane",
          pays: "azeaze"
        },
        tel1: "64321",
        tel2: "654321",
        email: "taoufik.bighouab@gmail.com"
      },
      agent: null,
      commandeType: "export",
      temperatureOfGoods: "positif",
      paid: false,
      pickUpDate: "2019-11-07",
      deliveryDate: null,
      pickUpAdresse: "2154lkjjhjh",
      deliveryAdresse: "l;jkljlkj6455",
      natureOfGoods: "poissons",
      commandeDate: "2019-11-13T00:00:00.000+0000",
      ref: "ref123",
      tarif: 7474444,
      commandeStatus: 1,
      idEnsembleRoutier: 5,
      vitesse: "rapide",
      idChauffeur: 5
    },
    {
      id: 6,
      client: {
        id: 1,
        raisonSocial: "feercam",
        formeJuridique: "sarl",
        adresse: {
          ligne1: "15 Avenue",
          ligne2: "",
          ligne3: "",
          cp: "321654",
          ville: "Malaga",
          pays: "Espagne"
        },
        tel1: "665329874",
        tel2: "654321458",
        email: "feercam@gmail.com"
      },
      agent: null,
      commandeType: "export",
      temperatureOfGoods: "positif",
      paid: false,
      pickUpDate: "2019-11-01",
      deliveryDate: null,
      pickUpAdresse: "5845jkhjkhkl",
      deliveryAdresse: "kjhjh1548",
      natureOfGoods: "agrume",
      commandeDate: "2019-11-13T00:00:00.000+0000",
      ref: "ref852",
      tarif: 12548,
      commandeStatus: 4,
      idEnsembleRoutier: 7,
      vitesse: "rapide",
      externalDriver: {
        id: 1,
        driverName: "nomchauffeur 1",
        driverSurname: "prenomchauffeur2",
        driverTel: "065416978",
        numEurope: "330654215487",
        numPasseport: "125ihgfr"
      }
    },
    {
      id: 1,
      client: {
        id: 3,
        raisonSocial: "azeaze",
        formeJuridique: "azeaze",
        adresse: {
          ligne1: "azeaze",
          ligne2: "azeaze",
          ligne3: "azeaze",
          cp: "86350",
          ville: "Inezgane",
          pays: "azeaze"
        },
        tel1: "64321",
        tel2: "654321",
        email: "taoufik.bighouab@gmail.com"
      },
      agent: {
        id: 1,
        nom: "John",
        prenom: "Frusciante",
        tel1: "665983265",
        tel2: "554213265",
        email: "John.frusciante@gmail.com"
      },
      commandeType: "export",
      temperatureOfGoods: "positif",
      paid: false,
      pickUpDate: "2019-11-01",
      deliveryDate: null,
      pickUpAdresse: "adres chargement",
      deliveryAdresse: "adress deschargement ",
      natureOfGoods: "poissons",
      commandeDate: "2019-11-12T00:00:00.000+0000",
      ref: "ref1",
      tarif: 1235456,
      commandeStatus: 1,
      idEnsembleRoutier: 6
    },
    {
      id: 4,
      client: {
        id: 3,
        raisonSocial: "azeaze",
        formeJuridique: "azeaze",
        adresse: {
          ligne1: "azeaze",
          ligne2: "azeaze",
          ligne3: "azeaze",
          cp: "86350",
          ville: "Inezgane",
          pays: "azeaze"
        },
        tel1: "64321",
        tel2: "654321",
        email: "taoufik.bighouab@gmail.com"
      },
      agent: null,
      commandeType: "export",
      temperatureOfGoods: "positif",
      paid: false,
      pickUpDate: "2019-11-01",
      deliveryDate: "2019-11-02",
      pickUpAdresse: "12345458",
      deliveryAdresse: "a412547",
      natureOfGoods: "primeur",
      commandeDate: "2019-11-12T00:00:00.000+0000",
      ref: "refCommande",
      tarif: 12654,
      commandeStatus: 1,
      idEnsembleRoutier: 7
    },
    {
      id: 7,
      client: {
        id: 3,
        raisonSocial: "azeaze",
        formeJuridique: "azeaze",
        adresse: {
          ligne1: "azeaze",
          ligne2: "azeaze",
          ligne3: "azeaze",
          cp: "86350",
          ville: "Inezgane",
          pays: "azeaze"
        },
        tel1: "64321",
        tel2: "654321",
        email: "taoufik.bighouab@gmail.com"
      },
      agent: {
        id: 1,
        nom: "John",
        prenom: "Frusciante",
        tel1: "665983265",
        tel2: "554213265",
        email: "John.frusciante@gmail.com"
      },
      commandeType: "import",
      temperatureOfGoods: "positif",
      paid: false,
      pickUpDate: "2019-10-01",
      deliveryDate: "2019-10-12",
      pickUpAdresse: "sqfqsdfqsd",
      deliveryAdresse: "dfqsf",
      natureOfGoods: "poissons",
      commandeDate: "2019-11-13T00:00:00.000+0000",
      ref: "refImport",
      tarif: 125487,
      commandeStatus: 1,
      idEnsembleRoutier: 4
    },
    {
      id: 2,
      client: {
        id: 3,
        raisonSocial: "azeaze",
        formeJuridique: "azeaze",
        adresse: {
          ligne1: "azeaze",
          ligne2: "azeaze",
          ligne3: "azeaze",
          cp: "86350",
          ville: "Inezgane",
          pays: "azeaze"
        },
        tel1: "64321",
        tel2: "654321",
        email: "taoufik.bighouab@gmail.com"
      },
      agent: {
        id: 1,
        nom: "John",
        prenom: "Frusciante",
        tel1: "665983265",
        tel2: "554213265",
        email: "John.frusciante@gmail.com"
      },
      commandeType: "export",
      temperatureOfGoods: "positif",
      paid: false,
      pickUpDate: "2019-11-08",
      deliveryDate: null,
      pickUpAdresse: "adress chargement 12",
      deliveryAdresse: "adress dechargement 123",
      natureOfGoods: "primeur",
      commandeDate: "2019-11-12T00:00:00.000+0000",
      ref: "ref12",
      tarif: 12354,
      commandeStatus: 1,
      raisonSocial: "sociaté 12",
      companyTel: "02154887",
      companyEmail: "afrete@email.com",
      tractorImm: "qsd548",
      trailerImm: "32sd",
      externalDriver: {
        id: 1,
        driverName: "nomchauffeur 1",
        driverSurname: "prenomchauffeur2",
        driverTel: "065416978",
        numEurope: "330654215487",
        numPasseport: "125ihgfr"
      }
    },
    {
      id: 3,
      client: {
        id: 3,
        raisonSocial: "azeaze",
        formeJuridique: "azeaze",
        adresse: {
          ligne1: "azeaze",
          ligne2: "azeaze",
          ligne3: "azeaze",
          cp: "86350",
          ville: "Inezgane",
          pays: "azeaze"
        },
        tel1: "64321",
        tel2: "654321",
        email: "taoufik.bighouab@gmail.com"
      },
      agent: null,
      commandeType: "export",
      temperatureOfGoods: "positif",
      paid: false,
      pickUpDate: "2019-11-27",
      deliveryDate: null,
      pickUpAdresse: "jkl",
      deliveryAdresse: "jkl",
      natureOfGoods: "primeur",
      commandeDate: "2019-11-12T00:00:00.000+0000",
      ref: "456",
      tarif: 546546,
      commandeStatus: 1,
      raisonSocial: "kjhl",
      companyTel: "jkl",
      companyEmail: "kljkl@jkl.nn",
      tractorImm: "jkl",
      trailerImm: "jkl",
      externalDriver: {
        id: 1,
        driverName: "nomchauffeur 1",
        driverSurname: "prenomchauffeur2",
        driverTel: "065416978",
        numEurope: "330654215487",
        numPasseport: "125ihgfr"
      }
    }
  ];
  constructor(private http: HttpClient) {}

  //fetch Data 0
  getCommandes() {
    console.log("inside the function");
    return this.http.get<any>(
      "http://localhost:8900/fleetnm-commande/commandes/"
    );
  }
  getData(){
    return this.data.slice();
  }
}
