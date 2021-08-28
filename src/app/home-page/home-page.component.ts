import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { of,fromEvent, merge, Observable } from 'rxjs';
import { tap ,map , switchMap} from 'rxjs/operators'
import { HomeServiceService } from '../shared/services/home-service.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit,AfterViewInit {
  /**
   * Stock Search From
   */
  objStockSearchForm = this.objFormBuilder.group({
    strStockName:['']
  })
  /**
	 * Autocomplete refference
	 * Stock
	 */
	@ViewChild("autoCompleteStock", { read: ElementRef, static: true })
	autoCompleteStock: ElementRef;
  /**
	 * If Stock Autocomplete is selected or not
	 */
	blnAutocompleteStockSelected: boolean;
  /**
 * Observable for Stock autocomplete
 */
objFilteredOptionsStock$: Observable<any[]>;

objCompanyDetails=null;
strSelectedCompany=''
  constructor(private objFormBuilder:FormBuilder,
    private objHomeService:HomeServiceService) { 

		this.blnAutocompleteStockSelected = false;
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
      /**
		 * Stock autocomplete data
		 * Stock
		 */
		this.objFilteredOptionsStock$ = this.initAccountsAutocomplete(
      this.autoCompleteStock,
      this.objStockSearchForm.get("strStockName"),
      "Stock"
    )
    .pipe(tap(() => (this.blnAutocompleteStockSelected = false)));
  }

   /**
   * get account autocomplete
   * @param objNativeElement [ElementRef]
   * @param objFormControl [AbstractControl]
   * @param strType [string]
   */
    initAccountsAutocomplete(
      objNativeElement: ElementRef,
      objFormControl: AbstractControl,
      strType: string,
      arrAccType: any[] = [],
      intLimit = 10,
      blnDefaultMainLedger = null
    ): Observable<any[]> {
      let blnFocusOn = false;
      return merge(
        objFormControl.valueChanges,
        fromEvent(objNativeElement.nativeElement, "focus")
      ).pipe(
        tap((Auto) => {
          if (Auto instanceof FocusEvent) {
            blnFocusOn = true;
          } else {
            blnFocusOn = false;
          }
        }),
        map(() =>
          objNativeElement.nativeElement.value
            ? objNativeElement.nativeElement.value
            : ""
        ),
        switchMap((value) => {
          if (
            typeof value === "string" &&
            (("" + value).length > 0 || !blnFocusOn)
          ) {
            return this.objHomeService.accountsAutocomplete({
              strValue: value.trim(),
              objParameters: {
              strType: "COMPANY",
              intLimit: 10
              },
            }).pipe(
              tap((arr: any[]) => {
                if (arr.length === 0) {
                  objFormControl.setValue("", {
                    emitEvent: false,
                    onlySelf: true,
                  });
                }
              })
            );
          } else 
          return of([]);
        })
      );
    }


    	/**
	 * Autocomplete Branch Selected
	 * @param objEvent
	 */
	autocompleteStockSelected(objEvent) {
		this.blnAutocompleteStockSelected = true;
    console.log({objEvent})
    const intSelectedId = objEvent.option.value.intPk;
    this.strSelectedCompany=objEvent.option.value.strName;
    this.getSelectedCompanyDetails(intSelectedId)
	}
	/**
	 * Stock Display Function,ie name::code
	 * @param obj
	 */
	displayStock(obj?: { [key: string]: any }): string | undefined {
		return obj ? obj.strName : undefined;
	}

	/**
	 * Cash Account AutoComplete Closed
	 */
	autoCompleteStockClosed() {
		if (typeof this.objStockSearchForm.value.strStockName !== "object") {
			if (!this.blnAutocompleteStockSelected) {
				this.objStockSearchForm.patchValue(
					{
						strStockName: ""
					},
					{ emitEvent: true, onlySelf: true }
				);
			}
		}
	}

  getSelectedCompanyDetails(intSelectedId){
    this.objHomeService.getSelectedCompanyDetails({intSelectedId}).subscribe(objDetails=>{
      this.objCompanyDetails=objDetails;
      console.log("this.objCompanyDetails",this.objCompanyDetails);
    })
  }

}
