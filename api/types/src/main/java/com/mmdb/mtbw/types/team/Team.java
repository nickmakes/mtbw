package com.mmdb.mtbw.types.team;

import com.mmdb.makes.projects.data.QueryBuilder;
import com.mmdb.makes.projects.helpers.ObjectHelper;
import com.mmdb.makes.projects.spring.mysql.doc.resource.MysqlDocumentResourceWithUuidAndMillis;
import java.util.Map;

public class Team implements MysqlDocumentResourceWithUuidAndMillis {

    public interface Columns {
        String ID = "id";
        String OWNER_NAME = "owner_name";
        String NAME = "name";
        String CREATED_ON = "created_on";
        String MODIFIED_ON = "modified_on";
    }

    private String id;
    private String ownerName;
    private String name;
    private Long createdOn;
    private Long modifiedOn;

    protected Team() {
        // do nothing
    }

    public Team( final String id, final String ownerName, final String name, final Long createdOn, final Long modifiedOn ) {
        this.id = id;
        this.ownerName = ownerName;
        this.name = name;
        this.createdOn = createdOn;
        this.modifiedOn = modifiedOn;
    }

    private Team( final Builder builder ) {
        this( builder.id, builder.ownerName, builder.name, builder.createdOn, builder.modifiedOn );
    }

    public String getId() {
        return this.id;
    }

    public String getOwnerName() {
        return this.ownerName;
    }

    public String getName() {
        return this.name;
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
                .with( Columns.OWNER_NAME, this.ownerName )
                .with( Columns.NAME, this.name )
                .build();
    }

    @Override
    public String toString() {
        return ObjectHelper.newToString( this )
            .with( "id", this.id )
            .with( "ownerName", this.ownerName )
            .with( "name", this.name )
            .with( "createdOn", this.createdOn )
            .with( "modifiedOn", this.modifiedOn )
            .build();
    }

    @Override
    public int hashCode() {
        return ObjectHelper.newHashCode()
            .with( this.id )
            .with( this.ownerName )
            .with( this.name )
            .with( this.createdOn )
            .with( this.modifiedOn )
            .build();
    }

    @Override
    public boolean equals( final Object obj ) {
        return ObjectHelper.newEquals( this )
            .with( o -> o.id )
            .with( o -> o.ownerName )
            .with( o -> o.name )
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
        private String ownerName;
        private String name;
        private Long createdOn;
        private Long modifiedOn;

        public Builder() {
            // do nothing
        }

        public Builder( final Team team ) {
            this.id = team.id;
            this.ownerName = team.ownerName;
            this.name = team.name;
            this.createdOn = team.createdOn;
            this.modifiedOn = team.modifiedOn;
        }

        public Builder id( final String id ) {
            this.id = id;
            return this;
        }

        public Builder ownerName( final String ownerName ) {
            this.ownerName = ownerName;
            return this;
        }

        public Builder name( final String name ) {
            this.name = name;
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

        public Team build() {
            return new Team( this );
        }
    }
}