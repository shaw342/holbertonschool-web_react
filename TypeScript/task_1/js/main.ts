interface Teacher{
     readonly firstName:string,
     readonly lastName: string,
    fullTimeEmployee: Boolean,
    yearsOfExperiance?: Number,
    location:string
    [key :string]: any
}

interface Directors extends Teacher{
    numberOfReports: Number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);
