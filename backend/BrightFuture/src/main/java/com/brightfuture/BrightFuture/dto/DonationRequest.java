package com.brightfuture.BrightFuture.dto;

import lombok.Data;

@Data
public class DonationRequest {
    private String name;
    private String email;
    private String phone;
    private String address;
    private Double amount;

    private String razorpayPaymentId;
    private String razorpayOrderId;
    private String razorpaySignature;
}

