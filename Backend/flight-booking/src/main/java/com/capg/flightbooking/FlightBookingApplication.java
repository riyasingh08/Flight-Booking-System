package com.capg.flightbooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
@EnableHystrixDashboard
@EnableCircuitBreaker
@EnableHystrix
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
//@SpringBootApplication
@EnableEurekaClient
@ComponentScan("com.capg.flightbooking") //to scan packages mentioned
@EnableMongoRepositories("com.capg.flightbooking") //to activate MongoDB repositories


public class FlightBookingApplication {
	@Bean
	@LoadBalanced
	 public RestTemplate restTemplate() {
		return new RestTemplate();
		 
	 }
	@Bean
	public WebClient.Builder getWebClientBuilder(){
		return WebClient.builder();
	}

	public static void main(String[] args) {
		SpringApplication.run(FlightBookingApplication.class, args);
	}

}
