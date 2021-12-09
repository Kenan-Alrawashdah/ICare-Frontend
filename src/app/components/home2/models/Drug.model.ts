export interface DrugModel {
    id:                number;
    createdOn:         Date;
    drugCategory:    number;
    name:              string;
    price:             number;
    picturePath:       string;
    brand:             string;
    availableQuantity: number;
    description:       string;
}