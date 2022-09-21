package com.capg.flightbooking.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.flightbooking.Entity.Booking;
import com.capg.flightbooking.Repository.BookingRepository;


@Service
public class BookingService {
	@Autowired
	private BookingRepository brepo;

	public Booking save(Booking booking) {
		// TODO Auto-generated method stub
		return brepo.save(booking);
		
	}

	public void deleteById(String bookingId) {
		brepo.deleteById(bookingId);
	}

	public List<Booking> findAll() {
		// TODO Auto-generated method stub
		List<Booking> list = new ArrayList<>();
		brepo.findAll().forEach(list::add);
		return list;
	}
	
	public Booking update (Booking booking)
	{
		return brepo.save(booking);
	}
	public Booking findById(String bookingId ) {
		
		return brepo.findById(bookingId).get();
	}

	

}
