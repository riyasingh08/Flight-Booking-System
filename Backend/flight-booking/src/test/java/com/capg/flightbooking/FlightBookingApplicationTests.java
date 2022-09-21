package com.capg.flightbooking;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.capg.flightbooking.Entity.Booking;
import com.capg.flightbooking.Repository.BookingRepository;
import com.capg.flightbooking.Service.BookingService;



@SpringBootTest
class FlightBookingApplicationTests {

	@MockBean
	private BookingRepository bookingRepository;
	@Autowired
	private BookingService bservice;


	Booking booking=new Booking();
	Booking bookingObj=new Booking();
	List<Booking> bookingList=new ArrayList<>();
	
	@BeforeEach
	public void setup() {
		booking.setBookingId("2");
		booking.setFirstName("Souvik");
		booking.setLastName("Biswas");
		booking.setGender("Male");
		
		
		bookingObj.setBookingId("3");
		bookingObj.setFirstName("SHRAYANIKA");
		bookingObj.setLastName("SAHA");
		bookingObj.setGender("Female");
		
		bookingList.add(booking);
		bookingList.add(bookingObj);
		
	}
	
	@Test
	public void testSave() {
		Mockito.when(bookingRepository.save(booking)).thenReturn(booking);
		assertEquals(booking,bservice.save(booking));
	}
	
	@Test
	public void testUpdate() {
		booking.setFirstName("Souvik");
		Mockito.when(bookingRepository.save(booking)).thenReturn(booking);
		assertEquals("Souvik",bservice.save(booking).getFirstName());
	}
	
	@Test
	public void testFindAll() {
		Mockito.when(bookingRepository.findAll()).thenReturn(bookingList);
		assertEquals(2, bservice.findAll().size());
	}
	
	
//	@Test
//	public void testFindById() {
//		Mockito.when(flightRepository.findById("1")).thenReturn(Optional.of(flight));
//		assertEquals(flight, fservice.findById("1"));
//	}
//	
	
	@Test
	public void testDeleteById() {
		Mockito.when(bookingRepository.findById("3")).thenReturn(Optional.of(booking));
		bservice.deleteById("3");
		 Mockito.verify(bookingRepository, Mockito.times(1)).deleteById("3");
	}
	


}