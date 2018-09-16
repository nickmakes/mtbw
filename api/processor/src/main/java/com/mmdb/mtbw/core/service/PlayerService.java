package com.mmdb.mtbw.core.service;

import com.mmdb.makes.projects.spring.mysql.doc.MysqlDocumentService;
import com.mmdb.mtbw.core.auditor.PlayerAuditor;
import com.mmdb.mtbw.core.dao.PlayerDao;
import com.mmdb.mtbw.types.player.Player;
import org.springframework.stereotype.Service;

@Service
public class PlayerService extends MysqlDocumentService<Player, String> {

    public PlayerService( final PlayerDao playerDao, final PlayerAuditor playerAuditor ) {
        super( playerAuditor, playerDao );
    }
}