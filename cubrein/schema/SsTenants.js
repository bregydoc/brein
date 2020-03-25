cube(`SsTenants`, {
    sql: `SELECT * FROM brein.\`SsTenants\``,

    joins: {
        Tenants: {
            sql: `${CUBE}.tenant_id = ${Tenants}.id`,
            relationship: `belongsTo`
        },

        Areas: {
            sql: `${CUBE}.area_id = ${Areas}.id`,
            relationship: `belongsTo`
        },

        Venues: {
            sql: `${CUBE}.venue_id = ${Venues}.id`,
            relationship: `belongsTo`
        }
    },

    measures: {
        count: {
            sql: `id`,
            type: `count`,
            drillMembers: [areaId]
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        areaId: {
            sql: `area_id`,
            type: `string`
        }
    }
});
