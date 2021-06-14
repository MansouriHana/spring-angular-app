package com.crudApp.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crudApp.exception.EmployeeNotFound;
import com.crudApp.model.Employee;
import com.crudApp.repositories.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employees")
	public List<Employee> getEmployeeList(){
		return employeeRepository.findAll();
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@Validated @RequestBody Employee employee) {
		System.out.println("email >>>> "+employee.getEmailId());
		return employeeRepository.save(employee);
		//return null;
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) throws EmployeeNotFound{
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFound("Employee not found for this id :: " + id));
		return  ResponseEntity.ok().body(employee);
	}
	
	@DeleteMapping("/employees/{id}")
	public Map<String,Boolean> deleteEmployee(@PathVariable(value="id") long id) throws EmployeeNotFound{
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFound("Employee not found for this id :: " + id));
		employeeRepository.delete(employee);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return null;
	}
	
	
	
}
