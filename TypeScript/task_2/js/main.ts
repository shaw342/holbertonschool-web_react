interface DirectorInterface {
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
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    // Extraire et convertir la valeur numérique de la chaîne
    const numericSalary = typeof salary === 'number' ? salary : parseFloat(salary.toString().replace(/[^0-9.-]+/g, ''));

    if (typeof numericSalary === 'number' && numericSalary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}


function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
