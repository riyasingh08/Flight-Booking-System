package com.capg.flightbooking.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class Booking {

    @Id
    private String bookingId;
    @Field
    private String id;
    @Field
    private String firstName;
	@Field
	private String lastName;
	@Field
	private String gender;
	public Booking() {
		
		// TODO Auto-generated constructor stub
	}
	public Booking(String bookingId ,String id, String firstName, String lastName, String gender) {
		super();
		this.bookingId= bookingId;
		this.id=id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
	}
	public String getBookingId() {
		return bookingId;
	}
	public void setBookingId(String bookingId) {
		this.bookingId = bookingId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", id=" + id + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", gender=" + gender + "]";
	}
}