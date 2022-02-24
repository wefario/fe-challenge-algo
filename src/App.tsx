import React from 'react'
import { buildCompanyTree } from 'utils/companyTree'
import './App.css'
import companiesFromApi from './data/companies.json'
import departmentsFromApi from './data/departments.json'
import employeesFromApi from './data/employees.json'

const App = () => {
  const treeData = buildCompanyTree({
    employeesFromApi,
    companiesFromApi,
    departmentsFromApi,
  })

  console.log(treeData)

  return <h1>Hello World</h1>
}

export default App
