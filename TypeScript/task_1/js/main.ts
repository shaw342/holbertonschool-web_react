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

interface printTeacherFunction{
    readonly firstName:string,
    readonly lastName: string,
}

function printTeacher(firstName: string, lastName: string,): string {
    return `${firstName[0]}.${lastName}`
}

console.log(printTeacher("John", "Doe"));
