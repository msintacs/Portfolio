package main.api.Auth_User.E_repository;

import main.api.Auth_User.A_model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {

    Optional<UserInfo> findByEmail(String email);
    boolean existsByEmail(String email);
}
