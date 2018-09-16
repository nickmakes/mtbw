package com.mmdb.mtbw;

import org.junit.platform.runner.JUnitPlatform;
import org.junit.platform.suite.api.SelectPackages;
import org.junit.runner.RunWith;

@RunWith( JUnitPlatform.class )
@SelectPackages( {
    "com.mmdb.mtbw.core"
} )
public class AppTestSuite {
}