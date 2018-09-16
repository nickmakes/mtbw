package com.mmdb.mtbw.core.controller;

import com.mmdb.makes.helpers.spring.webmvc.mysql.document.PathedMysqlDocumentController;
import com.mmdb.mtbw.core.service.PlayerService;
import com.mmdb.mtbw.types.player.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( "/players" )
public class PlayerController extends PathedMysqlDocumentController<Player, String> {

    @Autowired
    public PlayerController( final PlayerService playerService ) {
        super( playerService );
    }
}