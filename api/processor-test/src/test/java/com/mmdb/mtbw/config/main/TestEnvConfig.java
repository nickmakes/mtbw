package com.mmdb.mtbw.config.main;

import com.mmdb.makes.projects.spring.webmvc.AppEnv;
import com.mmdb.makes.projects.spring.webmvc.config.BaseEnvConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.PriorityOrdered;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.Environment;

@Configuration
@Order( value = PriorityOrdered.HIGHEST_PRECEDENCE )
public class TestEnvConfig extends BaseEnvConfig {

    static {
        System.setProperty( "sandbox", "true" );
    }

    @Override
    protected AppEnv appEnv( final Environment env ) {
        return new AppEnv() {
    
                @Override
                public String getDbSchema() {
                        return "mtbw";
                    }
    
                    @Override
                    public String getDbUsername() {
                            return "mmdb";
                        }
    
                        @Override
                        public String getDbPassword() {
                                return "okemo";
                            }
                    };
                }
}