export interface Company{
    name:string,
    description:string,
    email:string,
    phoneNumber:string,
    linkCompany:string,
    address:string,
    logoCompany:string,
    companyCapacity:number,
    fieldsOfTrainings:string,
    id:number
}
export interface ICreateCompany{
    name:string,
    description:string,
    email:string,
    phoneNumber:string,
    linkCompany:string,
    address:string,
    logoCompany:File,
    companyCapacity:number,
    fieldsOfTrainings:string
  
    
  }