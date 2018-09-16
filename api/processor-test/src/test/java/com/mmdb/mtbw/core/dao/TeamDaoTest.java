package com.mmdb.mtbw.core.dao;

import com.mmdb.makes.projects.data.DataTestRecipe;
import com.mmdb.makes.projects.spring.mysql.doc.dao.MysqlDocumentDaoTestClass;
import com.mmdb.mtbw.AppTestConfigs;
import com.mmdb.mtbw.core.dao.TeamDao;
import com.mmdb.mtbw.types.MtbwTestTypes;
import com.mmdb.mtbw.types.team.Team;
import java.util.UUID;
import java.util.function.Supplier;
import java.util.stream.Stream;
import org.junit.jupiter.api.Assertions;

public class TeamDaoTest extends MysqlDocumentDaoTestClass<TeamDao, Team, String> implements AppTestConfigs {

    @Override
    public Supplier<String> newPk() {
        return () -> UUID.randomUUID().toString();
    }

    @Override
    public Supplier<Team> newResource() {
        return () -> MtbwTestTypes.Teams.buildWithPk();
    }

    @Override
    protected Stream<DataTestRecipe<?, ?>> updateRecipes() {
        return Stream.of(
                this.updateOneRecipe(
                        this.newResource(),
                        resource -> new Team.Builder( resource )
                                .ownerName( "eggcorn" )
                                .name( "eggcorn" )
                                .build(),
                        ( original, updated ) -> {
                                    Assertions.assertEquals( original.pk(), updated.pk() );
                                    Assertions.assertEquals( "eggcorn", updated.getOwnerName() );
                                    Assertions.assertNotEquals( original.getOwnerName(), updated.getOwnerName() );
                                    Assertions.assertEquals( "eggcorn", updated.getName() );
                                    Assertions.assertNotEquals( original.getName(), updated.getName() );
                        } ) );
        }
}