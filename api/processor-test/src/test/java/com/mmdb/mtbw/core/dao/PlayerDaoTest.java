package com.mmdb.mtbw.core.dao;

import com.mmdb.makes.projects.data.DataTestRecipe;
import com.mmdb.makes.projects.spring.mysql.doc.dao.MysqlDocumentDaoTestClass;
import com.mmdb.mtbw.AppTestConfigs;
import com.mmdb.mtbw.core.dao.PlayerDao;
import com.mmdb.mtbw.types.MtbwTestTypes;
import com.mmdb.mtbw.types.player.Player;
import java.util.UUID;
import java.util.function.Supplier;
import java.util.stream.Stream;
import org.junit.jupiter.api.Assertions;

public class PlayerDaoTest extends MysqlDocumentDaoTestClass<PlayerDao, Player, String> implements AppTestConfigs {

    @Override
    public Supplier<String> newPk() {
        return () -> UUID.randomUUID().toString();
    }

    @Override
    public Supplier<Player> newResource() {
        return () -> MtbwTestTypes.Players.buildWithPk();
    }

    @Override
    protected Stream<DataTestRecipe<?, ?>> updateRecipes() {
        return Stream.of(
                this.updateOneRecipe(
                        this.newResource(),
                        resource -> new Player.Builder( resource )
                                .name( "eggcorn" )
                                .price( 0 )
                                .build(),
                        ( original, updated ) -> {
                                    Assertions.assertEquals( original.pk(), updated.pk() );
                                    Assertions.assertEquals( "eggcorn", updated.getName() );
                                    Assertions.assertNotEquals( original.getName(), updated.getName() );
                                    Assertions.assertEquals( 0, updated.getPrice().intValue() );
                                    Assertions.assertNotEquals( original.getPrice(), updated.getPrice() );
                        } ) );
        }
}