# FE Engineering test task (live coding)

## About the test

The following test aims to assert the following candidates skills

1. Simple algorithms solving
2. Structuring of the Frontend app (Optional)
3. Working with REST API (Optional)
4. Working with state management. (Optional)
5. Working with a Frontend framework. (Optional)

The provided boilerplate for the task is an empty React App with data in JSON format.
The candidate might choose to work with the boilerplate or create the app from scratch using the preferred FE framework/library.

## The problem

There is a list of employees with some basic information (first_name, last_name, email, title, department_id, id). The `department_id` is a reference to the department the employee is working in.

There is also a list of departments and the `company_id` property of the department is the company where this department exists (with the employees linked by the `department_id`).

In other words, the relation is 1 company <-> many departments; 1 department <-> many employees.

Business requires Frontend team to represent this hierarchy in an interactive UI (maybe a collapsible and editable table). The data is available in the `data` folder in the JSON format.

Let's say we have the employee with `id=20`, `department_id=5`, and the department with `id=5` has `company_id=1`. That would result in the following hierarchy.

```
1 (Shufflester)
└───5 (Sales)
    └───20 (Georgy Wraighte)
```

## The Task

(M/O) - Mandatory / Optional

1. (M) Transform the fetched data into the following format  
   (it should follow the `CompanyTree` TypeScript type found in `src/types.ts`).

   Please code this transformation in the `src/companyTree.ts`, it has a skeleton function and some tests in place.

```json
[
  {
    "id": "37647daf-dc37-4da8-a269-cd9b62a9c8fe", // id of the Company
    "name": "Centizu", // name of the Company
    "children": [
      {
        "id": "199af460-44ef-46fb-b426-0112a2735800", // id of the Department
        "name": "Marketing", // name of the Department
        "company_id": "37647daf-dc37-4da8-a269-cd9b62a9c8fe",
        "children": [
          {
            "id": "16a0599d-b37c-4c97-a0ce-8c05d74e7ab3" // id of the Employee
            // ... other Employee properties
          }
        ]
      },
      {
        /*...*/
      }
      /*...*/
    ]
  },
  {
    /*...*/
  }
  /*...*/
]
```

2. (O) Instead of getting the data from JSON, let's try to fetch the Employees flat list, Departments flat list, Companies flat list
   Endpoints (they are already set up through Proxy middleware in the project in `setupProxy.js`, so they are relative to localhost):

   - Employees: `/api/employees`
   - Departments: `/api/departments`
   - Companies: `/api/companies`

3. (O) Represent the hierarchy in a interactive UI (preferably a collapsible table). The changes should be applied in local state.

   1. (O) Hierarchy is represented in interactive UI (webpage view)
   2. (O) Name of the employee is editable (basic)
   3. (O) Ability to add a new Employee row

4. (O) Additional optional sub-tasks for the Task 3.

   1. (O) All columns (for employee fields) are editable
   2. (O) The UI is a table with groups (rows should be grouped to represent the hierarchy: Company -> Department -> Employee)
   3. (O) The table groups (rows) are collapsible

5. (O) Filtering with a text search of the Employee's names (simple substring search is enough)
