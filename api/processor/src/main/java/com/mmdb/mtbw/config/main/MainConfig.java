package com.mmdb.mtbw.config.main;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mmdb.makes.projects.spring.webmvc.BaseMainConfig;
import com.mmdb.mtbw.types.util.MtbwTypes;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MainConfig extends BaseMainConfig {

    @Override
    public ObjectMapper buildObjectMapper() {
        return MtbwTypes.mapper();
    }

    @Configuration
    public static class PropertiesConfig extends com.mmdb.makes.projects.spring.webmvc.BaseMainConfig.BasePropertiesConfig {
    }
}