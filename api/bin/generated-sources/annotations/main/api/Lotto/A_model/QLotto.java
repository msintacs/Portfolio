package main.api.Lotto.A_model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QLotto is a Querydsl query type for Lotto
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QLotto extends EntityPathBase<Lotto> {

    private static final long serialVersionUID = -1209786530L;

    public static final QLotto lotto = new QLotto("lotto");

    public final NumberPath<Integer> bonusNum = createNumber("bonusNum", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> dDate = createDateTime("dDate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> fifthPrize = createNumber("fifthPrize", Integer.class);

    public final NumberPath<Integer> firstPrize = createNumber("firstPrize", Integer.class);

    public final NumberPath<Integer> fourthPrize = createNumber("fourthPrize", Integer.class);

    public final NumberPath<Integer> num1 = createNumber("num1", Integer.class);

    public final NumberPath<Integer> num2 = createNumber("num2", Integer.class);

    public final NumberPath<Integer> num3 = createNumber("num3", Integer.class);

    public final NumberPath<Integer> num4 = createNumber("num4", Integer.class);

    public final NumberPath<Integer> num5 = createNumber("num5", Integer.class);

    public final NumberPath<Integer> num6 = createNumber("num6", Integer.class);

    public final NumberPath<Integer> round = createNumber("round", Integer.class);

    public final NumberPath<Integer> secondPrize = createNumber("secondPrize", Integer.class);

    public final NumberPath<Integer> thirdPrize = createNumber("thirdPrize", Integer.class);

    public QLotto(String variable) {
        super(Lotto.class, forVariable(variable));
    }

    public QLotto(Path<? extends Lotto> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLotto(PathMetadata metadata) {
        super(Lotto.class, metadata);
    }

}

