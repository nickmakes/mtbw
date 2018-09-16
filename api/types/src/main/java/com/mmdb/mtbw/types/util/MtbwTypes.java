package com.mmdb.mtbw.types.util;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public interface MtbwTypes {
    static ObjectMapper mapper() {
        final ObjectMapper mapper = new ObjectMapper()
                .setVisibility( PropertyAccessor.ALL, Visibility.NONE )
                .setVisibility( PropertyAccessor.FIELD, Visibility.ANY );

        return mapper;
    }
}