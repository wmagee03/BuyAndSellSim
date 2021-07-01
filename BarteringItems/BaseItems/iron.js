// Iron class extended from base item class
import BaseItem from "./baseItem";
import BaseProductType from "../Enums/productTypes";

export class Iron extends BaseItem {

  constructor(value) {
    super(value);
    this.name = "Iron";
    this.details = "A type of mineral that can be used for making many product ranging from simple tools to complex machinery."
    this.defaultValue = 5;
    this.productType = [
      BaseProductType.MINERAL,
      BaseProductType.CONSTRUCTION_MATERIAL
    ];
  }

}