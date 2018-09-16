package com.mmdb.mtbw.types.team;

import com.mmdb.makes.projects.tests.TestCase;
import com.mmdb.makes.projects.tests.TestHarness;
import com.mmdb.makes.projects.types.JsonTestCase;
import com.mmdb.mtbw.types.MtbwTestTypes;
import com.mmdb.mtbw.types.util.MtbwTypes;
import java.util.stream.Stream;

public class TeamTest implements TestHarness {

    @Override
    public Stream<TestCase> testCases() {
        return new JsonTestCase.Kitchen( MtbwTypes.mapper(), true )
                .with( "apg default test item", MtbwTestTypes.Teams.buildFull() )
                .collect();
    }
}