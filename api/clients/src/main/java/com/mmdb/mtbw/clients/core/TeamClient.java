package com.mmdb.mtbw.clients.core;

import com.mmdb.makes.projects.sdk.mysql.doc.MysqlDocumentClient;
import com.mmdb.mtbw.types.team.Team;
import com.mmdb.mtbw.types.util.MtbwTypes;
import java.net.URI;
import org.apache.http.client.HttpClient;

public class TeamClient extends MysqlDocumentClient<Team, String> {

    public TeamClient( final HttpClient httpClient, final URI baseServiceEndpoint ) {
        super( httpClient, MtbwTypes.mapper(), baseServiceEndpoint, "teams", true );
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