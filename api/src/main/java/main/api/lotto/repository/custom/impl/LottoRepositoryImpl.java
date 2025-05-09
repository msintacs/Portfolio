package main.api.lotto.repository.custom.impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import main.api.lotto.dto.LottoNumRangeResponseDto;
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
                     ") as allNumbers " +
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

    @Override
    public List<LottoNumRangeResponseDto> findNumRangeLotto() {
        String sql = "SELECT " +
                     "  CASE" +
                     "    WHEN num BETWEEN 1 AND 10 THEN '1~10' " +
                     "    WHEN num BETWEEN 11 AND 20 THEN '11~20' " +
                     "    WHEN num BETWEEN 21 AND 30 THEN '21~30' " +
                     "    WHEN num BETWEEN 31 AND 40 THEN '31~40' " +
                     "    WHEN num BETWEEN 41 AND 45 THEN '41~45' " +
                     "  END AS numRange, " +
                     "  COUNT(*) AS count " +
                     "FROM ( " +
                     "    SELECT NUM_1 AS num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_2 AS num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_3 AS num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_4 AS num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_5 AS num FROM DRAW_LOTTO " +
                     "    UNION ALL " +
                     "    SELECT NUM_6 AS num FROM DRAW_LOTTO " +
                     ") AS allNumber " +
                     "GROUP BY numRange " +
                     "ORDER BY MIN(num)";

        Query query = entityManager.createNativeQuery(sql);
        List<Object[]> results = query.getResultList();

        List<LottoNumRangeResponseDto> lottoNumRangeResponseDtos = new ArrayList<>();
        for (Object[] objects : results) {
            String numRange = objects[0].toString();
            Integer count = ((Number) objects[1]).intValue();
            lottoNumRangeResponseDtos.add(new LottoNumRangeResponseDto(numRange, count));
        }

        return lottoNumRangeResponseDtos;

    }
}
