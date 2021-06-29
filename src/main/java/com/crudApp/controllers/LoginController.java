package com.crudApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crudApp.config.JwtTokenUtil;
import com.crudApp.model.Employee;
import com.crudApp.model.JwtRequest;
import com.crudApp.model.JwtResponse;
import com.crudApp.repositories.EmployeeRepository;
import com.crudApp.services.MyUserDetailsService;






@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;
	@Autowired
	private EmployeeRepository userRepository;
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}		
	}
	
	@PostMapping("/user/login")
	public ResponseEntity<JwtResponse> createAuthetication(@RequestBody JwtRequest authenticationRequest) throws Exception{
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		/*JwtUserDetails jwsUserDetails = new JwtUserDetails();
		jwsUserDetails.setUsername(authenticationRequest.getUsername());*/
		System.out.println("Username22222 => "+userDetails.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
        System.out.println("token "+token);
		return ResponseEntity.ok(new JwtResponse(token));
	}
	@PostMapping( "/user/register")
	public ResponseEntity<?> saveUser(@RequestBody Employee user) throws Exception {
		System.out.println(user);
		return ResponseEntity.ok(userDetailsService.save(user));
	}
}
