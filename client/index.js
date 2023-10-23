const soap = require('soap');

const url = 'http://localhost:8001/wscalc1?wsdl';

soap.createClient(url,(err,client) => {
    if(err) throw err

    console.log(client.describe().ws.calc)

    client.multiplicar({a: 10, b: 5}, (err, res) => {
        if(err) throw err
        console.log('resposta da multiplicação: ' + res.mulres)
    })
    client.somar({a: 10, b: 5}, (err, res) => {
        if(err) throw err
        console.log('resposta da soma: ' + res.sumres)
    })

})