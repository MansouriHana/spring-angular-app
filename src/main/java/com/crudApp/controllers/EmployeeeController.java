package com.crudApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crudApp.model.Employee;
import com.crudApp.repositories.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employeeList")
	public List<Employee> getEmployeeList(){
		return employeeRepository.findAll();
	}
}