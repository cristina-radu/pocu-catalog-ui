export class Teacher{
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  employmentDate: string;
  cnp: string;
  salary: number;

  constructor(firstName: string, lastName: string, birthDate: string, employmentDate: string, cnp: string, salary: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.employmentDate = employmentDate;
    this.cnp = cnp;
    this.salary = salary;
  }

}
