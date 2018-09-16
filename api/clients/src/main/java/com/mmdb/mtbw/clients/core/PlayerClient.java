package com.mmdb.mtbw.clients.core;

import com.mmdb.makes.projects.sdk.mysql.doc.MysqlDocumentClient;
import com.mmdb.mtbw.types.player.Player;
import com.mmdb.mtbw.types.util.MtbwTypes;
import java.net.URI;
import org.apache.http.client.HttpClient;

public class PlayerClient extends MysqlDocumentClient<Player, String> {

    public PlayerClient( final HttpClient httpClient, final URI baseServiceEndpoint ) {
        super( httpClient, MtbwTypes.mapper(), baseServiceEndpoint, "players", true );
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