package com.brightfuture.BrightFuture.controller;

import com.brightfuture.BrightFuture.dto.DonationRequest;
import com.brightfuture.BrightFuture.service.DonationService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

    @Value("${razorpay.key.id}")
    private String keyId;

    @Value("${razorpay.key.secret}")
    private String keySecret;

    @Autowired
    private DonationService donationService;

    @PostMapping("/create-order")
    public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
        int amount = Integer.parseInt(data.get("amount").toString());

        RazorpayClient client = new RazorpayClient(keyId, keySecret);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount * 100); // paise
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "donation_rcpt_01");

        Order order = client.orders.create(orderRequest);
        return order.toString();
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody DonationRequest request) {
        donationService.saveDonationAndSendMail(request);
        return ResponseEntity.ok("Payment Verified and Donation Saved");
    }
}
