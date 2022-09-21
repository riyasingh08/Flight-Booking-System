package com.capg.flightsearch.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class Flight {

    @Id
  
    private String id;
	@Field
	private String flightNumber;
	@Field
	private String origin;
	@Field
	private String destination;
	@Field
	private String flightDate;
	@Field
	private String price;
	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="fare_Id")
//	Fares fares;
//
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="inv_Id")
//	Inventory inventory;
//	
//	
	

	public Flight() {
		super();
	}

public Flight(String id, String flightNumber, String origin, String destination, String flightDate, String price) {
	//super();
	this.id = id;
	this.flightNumber = flightNumber;
	this.origin = origin;
	this.destination = destination;
	this.flightDate = flightDate;
	this.price = price;
}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getFlightNumber() {
	return flightNumber;
}

public void setFlightNumber(String flightNumber) {
	this.flightNumber = flightNumber;
}

public String getOrigin() {
	return origin;
}

public void setOrigin(String origin) {
	this.origin = origin;
}

public String getDestination() {
	return destination;
}

public void setDestination(String destination) {
	this.destination = destination;
}

public String getFlightDate() {
	return flightDate;
}

public void setFlightDate(String flightDate) {
	this.flightDate = flightDate;
}

public String getPrice() {
	return price;
}

public void setPrice(String price) {
	this.price = price;
}

@Override
public String toString() {
	return "Flight [id=" + id + ", flightNumber=" + flightNumber + ", origin=" + origin + ", destination=" + destination
			+ ", flightDate=" + flightDate + ", price=" + price + "]";
}

	
}