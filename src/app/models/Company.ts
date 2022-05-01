import { Employee } from "./Employee";

export class Company{
  id!: number;
  name!:string;
  address!: string;
  email!: string;
  phone!: number;
  image!: string;
  employees!: Employee[];

}
