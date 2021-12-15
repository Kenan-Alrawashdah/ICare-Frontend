export interface LocationModel {
    id:          number;
    createdOn:   Date;
    addressName: string;
    userId:      number;
    phoneNumber: string;
    city:        string;
    zipCode:     number;
    details:     string;
    street:      string;
    lat:         number;
    lng:         number;
}