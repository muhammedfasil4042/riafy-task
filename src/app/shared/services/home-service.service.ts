import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private objBaseService:BaseServiceService) { }

  /**
   * Get autocomplete values from server side
   * @param objPost [IAutocomleteRequest]
   */
     accountsAutocomplete(
      objPost
    ): Observable<any[]> {
      console.log({objPost})
      const arrCompany = [
        {intPk:1,strName:'Bhansali Engg'},
        {intPk:2,strName:'Coal India'},
        {intPk:3,strName:'IOL Chemicals'},
        {intPk:4,strName:'Dolat Investment'},
        {intPk:5,strName:'NDTV'},
        {intPk:6,strName:'Balmer Law. Inv.'},
        {intPk:7,strName:'Ebixcash World'},
        {intPk:8,strName:'Mangalam Organic'},
        {intPk:9,strName:'INEOS Styrolut.'},
        {intPk:10,strName:'Expleo Solutions'},
        {intPk:11,strName:'Sh. Jagdamba Pol'},
        {intPk:12,strName:'Godawari Power'},
        {intPk:13,strName:'Cigniti Tech.'},
        {intPk:14,strName:'Kirl. Ferrous'},
        {intPk:15,strName:'Rites'},
        {intPk:16,strName:'Guj.St.Petronet'},
        {intPk:17,strName:'Ester Industries'},
        {intPk:18,strName:'Anjani Portland'},
        {intPk:19,strName:"Venky's (India)'"},
        {intPk:20,strName:'Heritage Foods'}

      ]


      return of(arrCompany.filter(objComapny=>objComapny.strName.includes(objPost.strValue)))
      return this.objBaseService.objMethods['POST'](
            'autocomplete',
            '3000',
            objPost
          )
        
    }

    getSelectedCompanyDetails(objPost) : Observable<any> {

        const arrDetails=[{
          strName:'Bhansali Engg.',
          dblCurrentMarketPrice : 158.25,
          dblMarketCap:2625.46,
          intStockPerc:7.86,
          dblDividendYield:0.63,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :20.21,
          dblDebtToEquity:0,
          dblEPS:20.13,
          dblReserves:664.76,
          Debt:0,
          intPk:1

        },																							
        {
          strName:'Coal India',
          dblCurrentMarketPrice :90869.43,
          dblMarketCap:2625.46,
          intStockPerc:7.13,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:2

        },																							
        {
          strName:'IOL Chemicals',
          dblCurrentMarketPrice :617.15,
          dblMarketCap:3623.01,
          intStockPerc:7.88,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:3

        },
        {
          strName:'Bhansali Engg.',
          dblCurrentMarketPrice : 158.25,
          dblMarketCap:2625.46,
          intStockPerc:7.86,
          dblDividendYield:0.63,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :20.21,
          dblDebtToEquity:0,
          dblEPS:20.13,
          dblReserves:664.76,
          Debt:0,
          intPk:4

        },																							
        {
          strName:'Coal India',
          dblCurrentMarketPrice :90869.43,
          dblMarketCap:2625.46,
          intStockPerc:7.13,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:5

        },																							
        {
          strName:'IOL Chemicals',
          dblCurrentMarketPrice :617.15,
          dblMarketCap:3623.01,
          intStockPerc:7.88,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:6

        },
        {
          strName:'Bhansali Engg.',
          dblCurrentMarketPrice : 158.25,
          dblMarketCap:2625.46,
          intStockPerc:7.86,
          dblDividendYield:0.63,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :20.21,
          dblDebtToEquity:0,
          dblEPS:20.13,
          dblReserves:664.76,
          Debt:0,
          intPk:7

        },																							
        {
          strName:'Coal India',
          dblCurrentMarketPrice :90869.43,
          dblMarketCap:2625.46,
          intStockPerc:7.13,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:8

        },																							
        {
          strName:'IOL Chemicals',
          dblCurrentMarketPrice :617.15,
          dblMarketCap:3623.01,
          intStockPerc:7.88,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:9

        },
        {
          strName:'Bhansali Engg.',
          dblCurrentMarketPrice : 158.25,
          dblMarketCap:2625.46,
          intStockPerc:7.86,
          dblDividendYield:0.63,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :20.21,
          dblDebtToEquity:0,
          dblEPS:20.13,
          dblReserves:664.76,
          Debt:0,
          intPk:10

        },																							
        {
          strName:'Coal India',
          dblCurrentMarketPrice :90869.43,
          dblMarketCap:2625.46,
          intStockPerc:7.13,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:11

        },																							
        {
          strName:'IOL Chemicals',
          dblCurrentMarketPrice :617.15,
          dblMarketCap:3623.01,
          intStockPerc:7.88,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:12

        },
        {
          strName:'Bhansali Engg.',
          dblCurrentMarketPrice : 158.25,
          dblMarketCap:2625.46,
          intStockPerc:7.86,
          dblDividendYield:0.63,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :20.21,
          dblDebtToEquity:0,
          dblEPS:20.13,
          dblReserves:664.76,
          Debt:0,
          intPk:12

        },																							
        {
          strName:'Coal India',
          dblCurrentMarketPrice :90869.43,
          dblMarketCap:2625.46,
          intStockPerc:7.13,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:14

        },																							
        {
          strName:'IOL Chemicals',
          dblCurrentMarketPrice :617.15,
          dblMarketCap:3623.01,
          intStockPerc:7.88,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:15

        },
        {
          strName:'Bhansali Engg.',
          dblCurrentMarketPrice : 158.25,
          dblMarketCap:2625.46,
          intStockPerc:7.86,
          dblDividendYield:0.63,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :20.21,
          dblDebtToEquity:0,
          dblEPS:20.13,
          dblReserves:664.76,
          Debt:0,
          intPk:16

        },																							
        {
          strName:'Coal India',
          dblCurrentMarketPrice :90869.43,
          dblMarketCap:2625.46,
          intStockPerc:7.13,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:17

        },																							
        {
          strName:'IOL Chemicals',
          dblCurrentMarketPrice :617.15,
          dblMarketCap:3623.01,
          intStockPerc:7.88,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:18

        },
        {
          strName:'Bhansali Engg.',
          dblCurrentMarketPrice : 158.25,
          dblMarketCap:2625.46,
          intStockPerc:7.86,
          dblDividendYield:0.63,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :20.21,
          dblDebtToEquity:0,
          dblEPS:20.13,
          dblReserves:664.76,
          Debt:0,
          intPk:19

        },																							
        {
          strName:'Coal India',
          dblCurrentMarketPrice :90869.43,
          dblMarketCap:2625.46,
          intStockPerc:7.13,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:20

        },																							
        {
          strName:'IOL Chemicals',
          dblCurrentMarketPrice :617.15,
          dblMarketCap:3623.01,
          intStockPerc:7.88,
          dblDividendYield:8.48,
          dblROCEPerc:86.18,
          dblROEPreviousAnnum :74.9,
          dblDebtToEquity:0.13,
          dblEPS:20.69,
          dblReserves:30920.81,
          Debt:4808.98,
          intPk:21

        }
      ]

        
        const objSelectedDetails = arrDetails.filter(objDetails=>objDetails.intPk===objPost.intSelectedId)	;	
        return of(objSelectedDetails[0])											
        return this.objBaseService.objMethods['POST'](
              'autocomplete',
              '3000',
              objPost
            )
         
    }
}
