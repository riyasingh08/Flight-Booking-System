package com.capg.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.capg.models.ERole;
import com.capg.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
	  Optional<Role> findByName(ERole name);
	}