const soap = require("soap");
const express = require("express");
const fs = require("fs");

const app = express();

const port = 8001

const myService = {
  ws: {
    calc: {
      somar: (args) => {
        const n = args.a + args.b;
        return { sumres: n };
      },
      multiplicar: (args) => {
        const n = args.a * args.b;
        return { mulres: n };
      },
    },
  },
};

const xml = fs.readFileSync("./wscalc1.wsdl", "utf8");

app.listen(port, () => {
  soap.listen(app, "/wscalc1", myService, xml, () => {
    console.log(" server initialized at port " + port);
  });
});
