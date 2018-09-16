package com.mmdb.mtbw.core.dao;

import com.mmdb.makes.projects.spring.mysql.doc.MysqlDocumentDao;
import com.mmdb.mtbw.core.mapper.TeamMapper;
import com.mmdb.mtbw.types.team.Team;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class TeamDao extends MysqlDocumentDao<Team, String> {

    public TeamDao( final TeamMapper mapper, final NamedParameterJdbcTemplate template ) {
        super( mapper, template );
    }
}