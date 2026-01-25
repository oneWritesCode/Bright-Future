package com.brightfuture.BrightFuture.service;



import com.brightfuture.BrightFuture.model.Contact;
import com.brightfuture.BrightFuture.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private JavaMailSender mailSender;

    public Contact saveContact(Contact contact) {
        // Save to DB
        Contact saved = contactRepository.save(contact);

        // Send email
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("piyushydv2213@gmail.com");
        message.setSubject("New Contact Message from " + contact.getName());
        message.setText(
                "Name: " + contact.getName() + "\n" +
                        "Email: " + contact.getEmail() + "\n" +
                        "Phone: " + contact.getPhone() + "\n\n" +
                        "Message:\n" + contact.getMessage()
        );
        mailSender.send(message);

        return saved;
    }
}
