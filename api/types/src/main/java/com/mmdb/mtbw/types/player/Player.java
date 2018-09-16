package com.mmdb.mtbw.types.player;

import com.mmdb.makes.projects.data.QueryBuilder;
import com.mmdb.makes.projects.helpers.ObjectHelper;
import com.mmdb.makes.projects.spring.mysql.doc.resource.MysqlDocumentResourceWithUuidAndMillis;
import java.util.Map;

public class Player implements MysqlDocumentResourceWithUuidAndMillis {

    public interface Columns {
        String ID = "id";
        String NAME = "name";
        String PRICE = "price";
        String CREATED_ON = "created_on";
        String MODIFIED_ON = "modified_on";
    }

    private String id;
    private String name;
    private Integer price;
    private Long createdOn;
    private Long modifiedOn;

    protected Player() {
        // do nothing
    }

    public Player( final String id, final String name, final Integer price, final Long createdOn, final Long modifiedOn ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.createdOn = createdOn;
        this.modifiedOn = modifiedOn;
    }

    private Player( final Builder builder ) {
        this( builder.id, builder.name, builder.price, builder.createdOn, builder.modifiedOn );
    }

    public String getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public Integer getPrice() {
        return this.price;
    }

    public Long getCreatedOn() {
        return this.createdOn;
    }

    public Long getModifiedOn() {
        return this.modifiedOn;
    }

    @Override
    public Map<String, Object> convertToQuery() {
        return new QueryBuilder()
                .with( Columns.ID, this.id )
                .with( Columns.NAME, this.name )
                .with( Columns.PRICE, this.price )
                .build();
    }

    @Override
    public String toString() {
        return ObjectHelper.newToString( this )
            .with( "id", this.id )
            .with( "name", this.name )
            .with( "price", this.price )
            .with( "createdOn", this.createdOn )
            .with( "modifiedOn", this.modifiedOn )
            .build();
    }

    @Override
    public int hashCode() {
        return ObjectHelper.newHashCode()
            .with( this.id )
            .with( this.name )
            .with( this.price )
            .with( this.createdOn )
            .with( this.modifiedOn )
            .build();
    }

    @Override
    public boolean equals( final Object obj ) {
        return ObjectHelper.newEquals( this )
            .with( o -> o.id )
            .with( o -> o.name )
            .with( o -> o.price )
            .with( o -> o.createdOn )
            .with( o -> o.modifiedOn )
            .build( obj );
    }

    @Override
    public String pk() {
        return this.id;
    }

    @Override
    public void pk( final String pk ) {
        this.id = pk;
    }

    @Override
    public Long createdOn() {
        return this.createdOn;
    }

    @Override
    public void createdOn( final Long createdOn ) {
        this.createdOn = createdOn;
    }

    @Override
    public Long modifiedOn() {
        return this.modifiedOn;
    }

    @Override
    public void modifiedOn( final Long modifiedOn ) {
        this.modifiedOn = modifiedOn;
    }

    public static class Builder {

        private String id;
        private String name;
        private Integer price;
        private Long createdOn;
        private Long modifiedOn;

        public Builder() {
            // do nothing
        }

        public Builder( final Player player ) {
            this.id = player.id;
            this.name = player.name;
            this.price = player.price;
            this.createdOn = player.createdOn;
            this.modifiedOn = player.modifiedOn;
        }

        public Builder id( final String id ) {
            this.id = id;
            return this;
        }

        public Builder name( final String name ) {
            this.name = name;
            return this;
        }

        public Builder price( final Integer price ) {
            this.price = price;
            return this;
        }

        public Builder createdOn( final Long createdOn ) {
            this.createdOn = createdOn;
            return this;
        }

        public Builder modifiedOn( final Long modifiedOn ) {
            this.modifiedOn = modifiedOn;
            return this;
        }

        public Player build() {
            return new Player( this );
        }
    }
}