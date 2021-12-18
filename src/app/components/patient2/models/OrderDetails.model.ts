export interface OrderDetailsModel {
    totalPrice:  number;
    street:      string;
    details:     string;
    zipCode:     number;
    city:        string;
    phoneNumber: string;
    addressName: string;
    status: string;
    orderDrugs:  OrderDrug[];
}

export interface OrderDrug {
    name:        string;
    price:       number;
    picturePath: string;
    quantity:    number;
}