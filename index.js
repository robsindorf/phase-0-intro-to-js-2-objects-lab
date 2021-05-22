const employee = {
    name: 'Joe',
    streetAddress: '22 Main'
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = { ...obj };
    newEmployee[key] = value;
    return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, 'Sam', '11Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'Sam', '12 Broadway');

function deleteFromEmployeeByKey(obj, key) {
    const employeeClone = { ...obj};
    delete employeeClone.name;
    delete employeeClone.streetAddress;
    return employeeClone;
}

deleteFromEmployeeByKey(employee.key) 

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, [employee.name, employee.streetAddress,]);