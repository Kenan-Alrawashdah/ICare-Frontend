export class Search {

  public static Request = class {
    search: string = '';
  };
  public static Response = class {
    Id: number;
    DrugName: string;
    DrugPrice: number;
    DrugPicturePath: string;
  };
}
