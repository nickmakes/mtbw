package com.mmdb.mtbw.clients.core;

import com.mmdb.makes.projects.data.DataTestRecipe;
import com.mmdb.makes.projects.sdk.mysql.doc.MysqlDocumentClientTestClass;
import com.mmdb.mtbw.clients.SdkTestConfigs;
import com.mmdb.mtbw.clients.core.TeamClient;
import com.mmdb.mtbw.types.MtbwTestTypes;
import com.mmdb.mtbw.types.team.Team;
import java.util.UUID;
import java.util.function.Supplier;
import java.util.stream.Stream;
import org.junit.jupiter.api.Assertions;

public class TeamClientTest extends MysqlDocumentClientTestClass<TeamClient, Team, String> implements SdkTestConfigs {

    @Override
    public Supplier<String> newPk() {
        return () -> UUID.randomUUID().toString();
    }

    @Override
    public Supplier<Team> newResource() {
        return () -> MtbwTestTypes.Teams.build();
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