cube(`Areas`, {
    sql: `SELECT * FROM brein.\`Areas\``,

    joins: {
        Tenants: {
            sql: `${CUBE}.tenant_id = ${Tenants}.id`,
            relationship: `belongsTo`
        },

        Venues: {
            sql: `${CUBE}.venue_id = ${Venues}.id`,
            relationship: `belongsTo`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [id, areaId, groupId]
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        areaId: {
            sql: `id`,
            type: `string`
        },

        groupId: {
            sql: `group_id`,
            type: `string`
        }
    }
});
