package com.brightfuture.BrightFuture.repository;

import com.brightfuture.BrightFuture.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {
}
