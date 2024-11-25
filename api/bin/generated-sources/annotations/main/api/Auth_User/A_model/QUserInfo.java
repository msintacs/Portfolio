package main.api.Auth_User.A_model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QUserInfo is a Querydsl query type for UserInfo
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QUserInfo extends EntityPathBase<UserInfo> {

    private static final long serialVersionUID = 1686736817L;

    public static final QUserInfo userInfo = new QUserInfo("userInfo");

    public final StringPath email = createString("email");

    public final StringPath name = createString("name");

    public final StringPath nickname = createString("nickname");

    public final StringPath phone = createString("phone");

    public final StringPath pwd = createString("pwd");

    public final DateTimePath<java.time.LocalDateTime> regDate = createDateTime("regDate", java.time.LocalDateTime.class);

    public final ComparablePath<Character> role = createComparable("role", Character.class);

    public final NumberPath<Integer> userIdx = createNumber("userIdx", Integer.class);

    public QUserInfo(String variable) {
        super(UserInfo.class, forVariable(variable));
    }

    public QUserInfo(Path<? extends UserInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserInfo(PathMetadata metadata) {
        super(UserInfo.class, metadata);
    }

}

