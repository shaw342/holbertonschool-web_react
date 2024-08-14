interface DirectorsInteface{
    workFromHome():string,
    getCoffeeBreak():string,
    workDirectorTasks():string
}

interface TeacherInterface{
    workFromHome():string,
    getCoffeeBreak():string,
    workTeacherTasks():string
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak():string{
        return "Cannot have a break"
    }
    workTeacherTasks():string{
        return "Getting to work"
    }
}

function createEmployee(salary: string | number): string {
    const numericSalary = typeof salary === 'number' ? salary : parseFloat(salary.toString().replace(/[^0-9.-]+/g, ''));

    if (typeof numericSalary === 'number' && numericSalary < 500) {
        return "Teacher"
    } else {
        return "Director"
    }
}
console.log(createEmployee('$500'));
