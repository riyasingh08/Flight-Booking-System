package com.capg.flightsearch.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.flightsearch.Entity.Flight;
import com.capg.flightsearch.Repository.FlightRepository;


@Service
public class FlightService {
	@Autowired
	private FlightRepository frepo;
	
	
	//To Delete a record
		

     //To Insert a Record       
		public Flight save(Flight flight) {
			// TODO Auto-generated method stub
			return frepo.save(flight);
			
		}

		public void deleteById(String id) {
			frepo.deleteById(id);
		}

		public List<Flight> findAll() {
			// TODO Auto-generated method stub
			List<Flight> list = new ArrayList<>();
			frepo.findAll().forEach(list::add);
			return list;
		}
		
		public Flight update (Flight flight)
		{
			return frepo.save(flight);
		}
		public Optional<Flight> findById1(String id) {
			// TODO Auto-generated method stub
			return frepo.findById(id);
		}
		public Flight findById(String id) {
			// TODO Auto-generated method stub
			Optional<Flight> op= frepo.findById(id);
			if(op.isPresent())
			{
				Flight pro= op.get();
				return pro;
			}
			return null;
			}

		public List<Flight> flightBetweenDestinations(String origin, String destination) {
			// TODO Auto-generated method stub
			return frepo.findFlightInBetween( origin,destination);
		}
		public Flight findFlightById(String flight_id) {

			return frepo.findById(flight_id).get();
		}


}