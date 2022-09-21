package com.capg.flightsearch;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.capg.flightsearch.Entity.Flight;
import com.capg.flightsearch.Repository.FlightRepository;
import com.capg.flightsearch.Service.FlightService;

@SpringBootTest
class FlightSearchApplicationTests {
	
	@MockBean
	private FlightRepository flightRepository;
	@Autowired
	private FlightService fservice;


	Flight flight=new Flight();
	Flight flightObj=new Flight();
	List<Flight> flightList=new ArrayList<>();
	
	@BeforeEach
	public void setup() {
		flight.setId("1");
		flight.setFlightNumber("101");
		flight.setOrigin("kolkata");
		flight.setDestination("mumbai");
		flight.setFlightDate("25-08-2022");
		
		flightObj.setId("2");
		flightObj.setFlightNumber("102");
		flightObj.setOrigin("pune");
		flightObj.setDestination("noida");
		flightObj.setFlightDate("14-08-2022");
		
		flightList.add(flight);
		flightList.add(flightObj);
		
	}
	
	@Test
	public void testSave() {
		Mockito.when(flightRepository.save(flight)).thenReturn(flight);
		assertEquals(flight,fservice.save(flight));
	}
	
	@Test
	public void testUpdate() {
		flight.setFlightNumber("102");
		Mockito.when(flightRepository.save(flight)).thenReturn(flight);
		assertEquals("102",fservice.save(flight).getFlightNumber());
	}
	
	@Test
	public void testFindAll() {
		Mockito.when(flightRepository.findAll()).thenReturn(flightList);
		assertEquals(2, fservice.findAll().size());
	}
	
	
//	@Test
//	public void testFindById() {
//		Mockito.when(flightRepository.findById("1")).thenReturn(Optional.of(flight));
//		assertEquals(flight, fservice.findById("1"));
//	}
//	
	
	@Test
	public void testDeleteById() {
		Mockito.when(flightRepository.findById("1")).thenReturn(Optional.of(flight));
		fservice.deleteById("1");
		 Mockito.verify(flightRepository, Mockito.times(1)).deleteById("1");
	}
	


}