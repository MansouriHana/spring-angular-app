package com.crudApp.exception;

public class EmployeeNotFound extends Exception{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public EmployeeNotFound(String msg){
		
		super(msg);
	}
}
