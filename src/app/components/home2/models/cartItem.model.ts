export interface CartItemModel {
    cartId:            number;
    drugId:            number;
    createdOn:         Date;
    drugCategory:      null;
    name:              string;
    price:             number;
    picturePath:       string;
    brand:             string;
    availableQuantity: number;
    description:       string;
    quantity:          number;
}