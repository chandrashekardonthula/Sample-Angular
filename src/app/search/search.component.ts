import { Input, Output, EventEmitter, Component, OnInit } from "@angular/core";
import { products } from "../products";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  products = products;
  @Input() inputList;

  constructor() {}

  ngOnInit() {}
}
