package com.mmdb.mtbw.core.mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mmdb.makes.projects.spring.mysql.doc.MysqlDocumentMapper;
import com.mmdb.mtbw.types.team.Team;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class TeamMapper extends MysqlDocumentMapper<Team, String> {

    public TeamMapper( final ObjectMapper objectMapper ) {
        super( objectMapper );
    }

    @Override
    public String tableName() {
        return "teams";
    }

    protected String pkColumnName() {
        return Team.Columns.ID;
    }

    @Override
    public Class<Team> _resourceClass() {
        return Team.class;
    }

    @Override
    public Class<Team[]> _resourceArrayClass() {
        return Team[].class;
    }

    @Override
    public Class<String> _pkClass() {
        return String.class;
    }
}