package com.mmdb.mtbw.types;

import com.mmdb.mtbw.types.player.Player;
import com.mmdb.mtbw.types.team.Team;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

public interface MtbwTestTypes {

    interface Teams {
        static Team build() {
            return new Team( null,
                    UUID.randomUUID().toString(),
                    UUID.randomUUID().toString(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue() );
        }

        static Team buildWithPk() {
            return new Team( UUID.randomUUID().toString(),
                    UUID.randomUUID().toString(),
                    UUID.randomUUID().toString(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue() );
        }

        static Team buildFull() {
            return new Team( UUID.randomUUID().toString(),
                    UUID.randomUUID().toString(),
                    UUID.randomUUID().toString(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue() );
        }
    }

    interface Players {
        static Player build() {
            return new Player( null,
                    UUID.randomUUID().toString(),
                    ThreadLocalRandom.current().nextInt(0, 1000 + 1),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue() );
        }

        static Player buildWithPk() {
            return new Player( UUID.randomUUID().toString(),
                    UUID.randomUUID().toString(),
                    ThreadLocalRandom.current().nextInt(0, 1000 + 1),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue() );
        }

        static Player buildFull() {
            return new Player( UUID.randomUUID().toString(),
                    UUID.randomUUID().toString(),
                    ThreadLocalRandom.current().nextInt(0, 1000 + 1),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue(),
                    Integer.valueOf( ThreadLocalRandom.current().nextInt(0, 1000000000 + 1) ).longValue() );
        }
    }
}