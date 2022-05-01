
/*export interface Posts{
  id: number;
  date_post:string;
  description: string;
  image: string;
  employee: Employee;
}

export interface Profession{
  id: number;
  nom_pro:string;
  employee: Employee[];
}

export interface Company{
  id: number;
  name:string;
  address: string;
  email: string;
  phone: number;
  image: string;
  employees: Employee[];
  professions: Profession[];
}*/

//import {Posts} from "./Posts"

import {Company} from "./Company";
import {Profession} from "./Profession";
import {Post} from "./Post";


export class Employee {
   id!: number;
   name!: string;
   last_name!:string;
   birthday!: string;
   email!: string;
   gender!: string;
   image!: string;
   phone!: number;
   posts! : Post[];
   company!: Company;
   profession!: Profession;
}
