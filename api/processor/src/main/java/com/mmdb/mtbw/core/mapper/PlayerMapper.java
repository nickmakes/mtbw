package com.mmdb.mtbw.core.mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mmdb.makes.projects.spring.mysql.doc.MysqlDocumentMapper;
import com.mmdb.mtbw.types.player.Player;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class PlayerMapper extends MysqlDocumentMapper<Player, String> {

    public PlayerMapper( final ObjectMapper objectMapper ) {
        super( objectMapper );
    }

    @Override
    public String tableName() {
        return "players";
    }

    protected String pkColumnName() {
        return Player.Columns.ID;
    }

    @Override
    public Class<Player> _resourceClass() {
        return Player.class;
    }

    @Override
    public Class<Player[]> _resourceArrayClass() {
        return Player[].class;
    }

    @Override
    public Class<String> _pkClass() {
        return String.class;
    }
}