import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  covidData: any = [];
  states: any = [];
  districtData: any = [];
  districts: any = [];
  constructor(private dataService: DataService) { }
  showTable: Boolean = false;
  selectedState: any;
  selectedDistrict: any;
  ngOnInit(): void {
    this.dataService.getData()
      .subscribe(res => {
        this.covidData = res;
        this.states = Object.keys(this.covidData.data)
      })

  }

  getDistricts(){
    this.districts = Object.keys(this.covidData.data[this.selectedState].districtData)
  }

  onClickSubmit(){
    this.districtData = this.covidData.data[this.selectedState].districtData[this.selectedDistrict]
    console.log("District Data",this.districtData);
    this.showTable = true;
  }

}



