package com.mmdb.mtbw.core.dao;

import com.mmdb.makes.projects.spring.mysql.doc.MysqlDocumentDao;
import com.mmdb.mtbw.core.mapper.PlayerMapper;
import com.mmdb.mtbw.types.player.Player;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class PlayerDao extends MysqlDocumentDao<Player, String> {

    public PlayerDao( final PlayerMapper mapper, final NamedParameterJdbcTemplate template ) {
        super( mapper, template );
    }
}