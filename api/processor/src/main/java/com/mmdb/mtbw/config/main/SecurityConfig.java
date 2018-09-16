package com.mmdb.mtbw.config.main;

import com.mmdb.makes.projects.spring.security.BaseSecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class SecurityConfig extends BaseSecurityConfig {

    @Autowired
    public SecurityConfig( final Environment env ) {
        super( env );
    }
}