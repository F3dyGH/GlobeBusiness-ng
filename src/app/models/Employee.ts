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
