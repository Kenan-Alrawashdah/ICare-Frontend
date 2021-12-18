export interface SubscriptionTypeModel {
    price:          number;
    days:           number;
    onSale:         boolean;
    priceAfterSale: number;
    hasRibbon:      boolean;
    ribbon?:         string;
    name:           string;
    ribbonColor?:    string;
    id:             number;
    createdOn:      Date;
}