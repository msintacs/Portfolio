package main.api.lotto.repository;

import main.api.lotto.model.DrawLotto;
import main.api.lotto.repository.custom.CustomLottoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LottoRepository extends JpaRepository<DrawLotto, Integer>, CustomLottoRepository {

    @Query("SELECT e FROM DrawLotto e")
    Page<DrawLotto> findRecentExcludingFirstOrderByIdxDesc(Pageable pageable);

    // DB에 해당 회차가 존재하는지 여부 확인
    boolean existsByDrawRound(int drawRound);

}
