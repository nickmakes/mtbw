package com.mmdb.mtbw;

import com.mmdb.makes.projects.spring.mysql.FlywayConfig;
import com.mmdb.makes.projects.spring.mysql.doc.MysqlConfig;
import com.mmdb.mtbw.config.main.MainConfig;
import com.mmdb.mtbw.config.main.TestEnvConfig;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration( classes = {
    TestEnvConfig.class, MainConfig.class, FlywayConfig.class, MysqlConfig.class
} )
public interface AppTestConfigs {
}