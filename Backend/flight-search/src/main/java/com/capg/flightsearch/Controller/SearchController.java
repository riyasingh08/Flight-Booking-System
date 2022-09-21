package com.capg.flightsearch.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.flightsearch.Entity.Flight;
import com.capg.flightsearch.Repository.FlightRepository;
import com.capg.flightsearch.Service.FlightService;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/search")
public class SearchController {
	@Autowired
	private FlightService fservice;


	// Inserting New Records

	@PostMapping("/register")
	public ResponseEntity<String> insertDetails(@RequestBody Flight flight) {
		System.out.println("Flight Details Saved");
		fservice.save(flight);
		return new ResponseEntity<String>("Success", HttpStatus.OK);
	}
	// Getting All The Records
//	@GetMapping("/getall")
//	public List<Flight> getFlightDetails() {
//		List<Flight> list = fservice.findAll();
//		return list;

	@GetMapping("/getall")
	public ResponseEntity<Object> getFlightDetails() {
		List<Flight> list = fservice.findAll();
		return new ResponseEntity<Object>(list, HttpStatus.OK);

	}
				
				//DELETE METHOD
				@DeleteMapping("delete/{id}")
				public ResponseEntity<String> deleteById(@PathVariable("id") String id) {
					fservice.deleteById(id);
					return new ResponseEntity<String>("Delete Successfully", HttpStatus.OK);

				}
				// Update Record
				@PutMapping("/update/{id}")
				public ResponseEntity<Object> UpdateUserById1(@PathVariable("id") String id, @RequestBody Flight flight) {
					Optional<Flight> op = fservice.findById1(id);
					if (op.isPresent()) {
						Flight f = fservice.findById(id);
						f.setFlightNumber(flight.getFlightNumber());
						f.setOrigin(flight.getOrigin());
						f.setDestination(flight.getDestination());
						f.setFlightDate(flight.getFlightDate());
						f.setPrice(flight.getPrice());
						fservice.save(f);
						return new ResponseEntity<Object>(f, HttpStatus.OK);
					} else {
						return new ResponseEntity<Object>("Not updated successfully", HttpStatus.NOT_FOUND);
					}
				}
				@GetMapping("/getById/{id}")
				public Flight getFlightById(@PathVariable("id") String id) {
					Flight flight = fservice.findFlightById(id);
					return flight;
				}
				
				
				@GetMapping("/getFlightInBetweenDestinations/{origin}/{destination}")
				public List<Flight> getFlight(@PathVariable("origin") String origin, @PathVariable("destination") String destination) {

					try {
						List<Flight> flightList = fservice.flightBetweenDestinations(origin, destination);
						return flightList;
					} catch (Exception e) {
						System.out.println(e);
					}
					return null;
	}
}

	


	

