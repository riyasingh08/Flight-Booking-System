package com.capg.paymentgatewayservice.paypalcontroller;

import java.util.ArrayList;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.capg.paymentgatewayservice.paypalservice.PaypalService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;

import org.springframework.web.bind.annotation.PathVariable;

import VO.Order;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RequestMapping("/Payment/")
@RestController
@SecurityRequirement(name = "ShoppingPayment")
@CrossOrigin("http://localhost:3000/")
public class PaypalController {

	@Autowired
	PaypalService service;

	@Autowired
	private RestTemplate restTemplate;

	public static final String SUCCESS_URL = "Payment/pay/success";
	public static final String CANCEL_URL = "Payment/pay/cancel";

	@GetMapping("")
	public ModelAndView home(ModelAndView modelAndView) {
		modelAndView.setViewName("home");
		return modelAndView;
	}

	

	@PostMapping("pay/{amt}")
	public String payment(ModelAndView modelAndView, @PathVariable("amt")double amt) {
		System.out.println("test");
		try {

			
			
			Payment payment = service.createPayment(amt / 79.86, "USD",
					"PAYPAL", "sale", "shopping cart",
					"http://localhost:8084/payment-gateway-service/" + CANCEL_URL,
					"http://localhost:8084/payment-gateway-service/" + SUCCESS_URL);
			for (Links link : payment.getLinks()) {
				if (link.getRel().equals("approval_url")) {
					//modelAndView.setViewName(link.getHref().toString());
					return link.getHref();
				}
			}

		} catch (PayPalRESTException e) {

			e.printStackTrace();
		}
		//modelAndView.setViewName("/");
		return "/";

	}

	@GetMapping(value = CANCEL_URL)
	public ModelAndView cancelPay(ModelAndView modelAndView) {
		modelAndView.setViewName("cancel");
		return modelAndView;
	}

	@GetMapping(value = SUCCESS_URL)
	public ModelAndView successPay(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId,
			ModelAndView modelAndView) {
		try {
			Payment payment = service.executePayment(paymentId, payerId);
			System.out.println(payment.toJSON());
			if (payment.getState().equals("approved")) {
				modelAndView.setViewName("success");
				return modelAndView;
			}
		} catch (PayPalRESTException e) {
			System.out.println(e.getMessage());
		}
		modelAndView.setViewName("redirect:/");
		return modelAndView;

	}

	@GetMapping("show")
	public String show() {
		return "CANNOT RETURN MODEL AND VIEW USE BROWSER";
	}

}