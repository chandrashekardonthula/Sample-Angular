import { Input, Output, EventEmitter, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input() inputList;
  @Input() searchText;
  @Output() filterdProductList;
  constructor() {}

  ngOnInit() {}
}
