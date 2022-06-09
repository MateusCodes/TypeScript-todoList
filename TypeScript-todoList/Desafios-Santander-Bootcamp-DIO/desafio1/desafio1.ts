interface Employees {
  code: number;
  name: string;
}


let employee = {} as Employees;
employee.code = 10;
employee.name = "John";

let employee1: Employees = {
  name: 'Mateus',
  code: 10
}

let employee2: {code: number, name: string} = {
  name: 'Maria',
  code: 20
}