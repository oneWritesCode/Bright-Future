package com.brightfuture.BrightFuture.service;

import com.brightfuture.BrightFuture.dto.DonationRequest;
import com.brightfuture.BrightFuture.model.Donation;
import com.brightfuture.BrightFuture.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class DonationService {

    @Autowired
    private DonationRepository donationRepository;

    @Autowired
    private JavaMailSender mailSender;

    public void saveDonationAndSendMail(DonationRequest req) {

        Donation donation = new Donation();
        donation.setName(req.getName());
        donation.setEmail(req.getEmail());
        donation.setPhone(req.getPhone());
        donation.setAddress(req.getAddress());
        donation.setAmount(req.getAmount());
        donation.setRazorpayPaymentId(req.getRazorpayPaymentId());
        donation.setRazorpayOrderId(req.getRazorpayOrderId());

        donationRepository.save(donation);

        sendMail(donation);
    }

    private void sendMail(Donation donation) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("piyushydv2213@gmail.com");
        message.setSubject("New Donation Received");
        message.setText(
                "New Donation Details:\n\n" +
                        "Name: " + donation.getName() + "\n" +
                        "Email: " + donation.getEmail() + "\n" +
                        "Phone: " + donation.getPhone() + "\n" +
                        "Address: " + donation.getAddress() + "\n" +
                        "Amount: ₹" + donation.getAmount() + "\n" +
                        "Payment ID: " + donation.getRazorpayPaymentId()
        );

        mailSender.send(message);
    }
}
