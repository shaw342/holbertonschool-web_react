interface Teacher{
     readonly firstName:string,
     readonly lastName: string,
    fullTimeEmployee: Boolean,
    yearsOfExperiance?: Number,
    location:string
    [key :string]: any
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);
