package com.mmdb.mtbw.core.service;

import com.mmdb.makes.projects.spring.mysql.doc.MysqlDocumentService;
import com.mmdb.mtbw.core.auditor.TeamAuditor;
import com.mmdb.mtbw.core.dao.TeamDao;
import com.mmdb.mtbw.types.team.Team;
import org.springframework.stereotype.Service;

@Service
public class TeamService extends MysqlDocumentService<Team, String> {

    public TeamService( final TeamDao teamDao, final TeamAuditor teamAuditor ) {
        super( teamAuditor, teamDao );
    }
}