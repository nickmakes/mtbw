package com.mmdb.mtbw.clients;

import com.mmdb.makes.projects.sdk.BaseClientsTestConfig;
import com.mmdb.makes.projects.sdk.EmbeddedWebapp;
import com.mmdb.mtbw.clients.core.PlayerClient;
import com.mmdb.mtbw.clients.core.TeamClient;
import java.net.URI;
import org.apache.http.client.HttpClient;
import org.springframework.context.annotation.Bean;

public class ClientsTestConfig extends BaseClientsTestConfig {

    @Override
    protected EmbeddedWebapp[] embeddedWebapps() {
        return new EmbeddedWebapp[] {
                new EmbeddedWebapp( "test-war", "/" )
        };
    }

    @Bean
    public TeamClient teamClient( final HttpClient httpClient, final URI endpoint ) {
        return new TeamClient( httpClient, endpoint );
    }

    @Bean
    public PlayerClient playerClient( final HttpClient httpClient, final URI endpoint ) {
        return new PlayerClient( httpClient, endpoint );
    }
}