package main.api.lotto.repository.custom.impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import main.api.lotto.dto.LottoWinTop10ResponseDto;
import main.api.lotto.model.DrawLotto;
import main.api.lotto.repository.custom.CustomLottoRepository;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import java.util.ArrayList;
import java.util.List;

public class LottoRepositoryImpl extends QuerydslRepositorySupport implements CustomLottoRepository {

//    private final JPAQueryFactory queryFactory;
//
//    public LottoRepositoryImpl(JPAQueryFactory queryFactory) {
//        super(DrawLotto.class);
//        this.queryFactory = queryFactory;
//    }

    @PersistenceContext
    private EntityManager entityManager;

    public LottoRepositoryImpl() {
        super(DrawLotto.class);
    }

    @Override
    public List<LottoWinTop10ResponseDto> findTop10Lotto() {
        String sql = "SELECT " +
                     " num, " +
                     " COUNT(*) as frequency " +
                     "FROM ( " +
                     "    SELECT NUM_1 as num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_2 as num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_3 as num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_4 as num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_5 as num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_6 as num FROM DRAW_LOTTO " +
                     ") as all_numbers " +
                     "GROUP BY num " +
                     "ORDER BY frequency DESC, num ASC " +
                     "LIMIT 10";

        Query query = entityManager.createNativeQuery(sql);
        List<Object[]> results = query.getResultList();

        List<LottoWinTop10ResponseDto> lottoWinTop10ResponseDtos = new ArrayList<>();
        for (Object[] objects : results) {
            Integer number = ((Number) objects[0]).intValue();
            Long frequency = ((Number) objects[1]).longValue();
            lottoWinTop10ResponseDtos.add(new LottoWinTop10ResponseDto(number, frequency));
        }

        return lottoWinTop10ResponseDtos;
    }
}
