package com.crudApp.services;

import java.util.ArrayList;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.crudApp.exception.EmployeeNotFound;
import com.crudApp.model.Employee;
import com.crudApp.repositories.EmployeeRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	EmployeeRepository employeeRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Employee user= employeeRepository.findByEmailId(username);
		
		
		if(user==null) {
			throw new UsernameNotFoundException("User not found with username "+username);
		}
		System.out.println("Email=>"+user.getEmailId());
		System.out.println("password=>"+user.getPassword());
		org.springframework.security.core.userdetails.User userauth = new org.springframework.security.core.userdetails.User(user.getEmailId(), user.getPassword(),
				new ArrayList<>());
		System.out.println(userauth);
		 return userauth;
	}

	public Employee save(Employee user) {
		System.out.println(user);
		user.setEmailId(user.getEmailId());
		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		return employeeRepository.save(user);
	}
}