const { port, server,graphql } = require("./config");
const express = require("express");
const graphqlHTTP = require('express-graphql');
const { resolvers } = require("./resolvers");
const { schema } = require("./schema");
const app = express();
// const cors = require('cors');

// app.use(cors());
app.use((req, res, next) => {
  // console.log("Time:", new Date() + 3600000 * -5.0); // GMT-->EST
  next();
});
app.use(express.static('public'));


app.use(graphql, graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
})
);

app.listen(port);

console.log(`Server ready at ${server}:${port}${graphql} - ${process.env.NODE_ENV}`);

