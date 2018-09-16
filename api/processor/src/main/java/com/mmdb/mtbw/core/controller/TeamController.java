package com.mmdb.mtbw.core.controller;

import com.mmdb.makes.helpers.spring.webmvc.mysql.document.PathedMysqlDocumentController;
import com.mmdb.mtbw.core.service.TeamService;
import com.mmdb.mtbw.types.team.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( "/teams" )
public class TeamController extends PathedMysqlDocumentController<Team, String> {

    @Autowired
    public TeamController( final TeamService teamService ) {
        super( teamService );
    }
}