package com.brightfuture.BrightFuture.controller;


import com.brightfuture.BrightFuture.model.Contact;
import com.brightfuture.BrightFuture.service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")

@CrossOrigin(origins = {"*"}, allowedHeaders = {"*"}, exposedHeaders = {"*"}, methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT})
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
}

