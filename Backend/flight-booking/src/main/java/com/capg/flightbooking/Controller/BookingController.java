package com.capg.flightbooking.Controller;

import java.util.Arrays;
import java.util.List;

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
import org.springframework.web.client.RestTemplate;

import com.capg.flightbooking.Entity.Booking;
import com.capg.flightbooking.Service.BookingService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/book")
public class BookingController {
	@Autowired
	private BookingService bservice;
	@Autowired
	private RestTemplate restTemplate;
	

	// Inserting New Records

	@PostMapping("/register")
	public ResponseEntity<String> insertDetails(@RequestBody Booking booking) {
		System.out.println("Booking Details Saved");
		bservice.save(booking);
		return new ResponseEntity<String>("Success", HttpStatus.OK);
	}
	// Getting All The Records
	@GetMapping("/getall")
	public List<Booking> getFlightDetails() {
		List<Booking> list = bservice.findAll();
		return list;

	}
				
				//DELETE METHOD
				@DeleteMapping("delete/{bookingId}")
				public ResponseEntity<String> deleteById(@PathVariable("bookingId") String  bookingId) {
					bservice.deleteById(bookingId);
					return new ResponseEntity<String>("Delete Successfully", HttpStatus.OK);

				}
				// Update Record
				@PutMapping("/updateById/{bookingId}")
				public Booking updateBooking(@PathVariable("bookingId") String bookingId, @RequestBody Booking booking)
				{
					Booking b = bservice.findById(bookingId);
					b.setFirstName(booking.getFirstName());
					b.setLastName(booking.getLastName());
					b.setGender(booking.getGender());
					bservice.save(b);
					return b;

			}
				
//              <!----BookingController Calls Flight Search MicroService Here----------->
	@GetMapping("getByDestinations/{origin}/{destination}")
	public List<Object> getflights(@PathVariable("origin") String origin, @PathVariable("destination") String destination)
	{
		ResponseEntity<Object[]> response = 
				restTemplate.getForEntity("http://search-service/search/getFlightInBetweenDestinations/"+origin+"/"+destination, Object[].class);
		Object[] flights = response.getBody();
		List<Object> flightList = Arrays.asList(flights);
		
		return flightList;
	
}
	}



