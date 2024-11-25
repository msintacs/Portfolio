package main.api.Lotto.A_model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QPensionLottery is a Querydsl query type for PensionLottery
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPensionLottery extends EntityPathBase<PensionLottery> {

    private static final long serialVersionUID = -1633562999L;

    public static final QPensionLottery pensionLottery = new QPensionLottery("pensionLottery");

    public final NumberPath<Integer> bonusNum1 = createNumber("bonusNum1", Integer.class);

    public final NumberPath<Integer> bonusNum2 = createNumber("bonusNum2", Integer.class);

    public final NumberPath<Integer> bonusNum3 = createNumber("bonusNum3", Integer.class);

    public final NumberPath<Integer> bonusNum4 = createNumber("bonusNum4", Integer.class);

    public final NumberPath<Integer> bonusNum5 = createNumber("bonusNum5", Integer.class);

    public final NumberPath<Integer> bonusNum6 = createNumber("bonusNum6", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> dDate = createDateTime("dDate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> num1 = createNumber("num1", Integer.class);

    public final NumberPath<Integer> num2 = createNumber("num2", Integer.class);

    public final NumberPath<Integer> num3 = createNumber("num3", Integer.class);

    public final NumberPath<Integer> num4 = createNumber("num4", Integer.class);

    public final NumberPath<Integer> num5 = createNumber("num5", Integer.class);

    public final NumberPath<Integer> num6 = createNumber("num6", Integer.class);

    public final NumberPath<Integer> round = createNumber("round", Integer.class);

    public final NumberPath<Integer> wGroup = createNumber("wGroup", Integer.class);

    public QPensionLottery(String variable) {
        super(PensionLottery.class, forVariable(variable));
    }

    public QPensionLottery(Path<? extends PensionLottery> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPensionLottery(PathMetadata metadata) {
        super(PensionLottery.class, metadata);
    }

}

