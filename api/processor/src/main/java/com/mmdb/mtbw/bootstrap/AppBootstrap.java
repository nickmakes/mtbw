package com.mmdb.mtbw.bootstrap;

import com.mmdb.mtbw.config.main.MainConfig;
import com.mmdb.makes.projects.spring.webmvc.AppEnvConfig;
import com.mmdb.mtbw.config.main.SecurityConfig;
import com.mmdb.makes.projects.spring.mysql.FlywayConfig;
import com.mmdb.makes.projects.spring.mysql.doc.MysqlConfig;
import com.mmdb.mtbw.config.servlet.WebmvcConfig;
import com.mmdb.makes.projects.spring.webmvc.BaseAppBootstrap;

public class AppBootstrap extends BaseAppBootstrap {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[] {
                MainConfig.class, AppEnvConfig.class, SecurityConfig.class, FlywayConfig.class, MysqlConfig.class
        };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[] {
                WebmvcConfig.class
        };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] {
                "/*"
        };
    }

    @Override
    protected String declareWebappRootKey() {
        return "mtbw.proc";
    }
}