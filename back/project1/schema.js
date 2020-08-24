const { buildSchema } = require("graphql");
const schema = buildSchema(`
type Query {
    setupalerts: String,
    alerts: [Alert],
    alertsforregion(region: String): [Alert],
    alertsforsubregion(subregion: String): [Alert],
    regions: [String],
    subregions: [String],
    countries: [String]
    advisories: [Advisory]
    travellers: [String]
    alertsfortravellers(travellername: String): [Advisory]
}

type Alert {
    country: String
    name: String
    text: String
    date: String
    region: String
    subregion: String
}

type Advisory {
    travellername: String
    name: String
    date: String
    text: String
}

type Mutation {
    postadvisory(travellername: String, name: String): Advisory
}

`);

module.exports = { schema };