var chai = require('chai')
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

var urlBase = "http://192.168.0.106:3000";

describe('Suíte de testes - 1', function() {
    it('Aqui vai código de teste', function (done) {
        chai.request(urlBase)
        .get('/users.json')
        .set('X-Redmine-API-Key', '57fd3ce9d5929c4bfba4f0ec25ae03caaad331e8')
        .set('Content-Type', 'application/json')
        .send(
            {
                "user": {
                    "login": "thiagolima05",
                    "password": "thiago12345",
                    "firstname": "Thiago",
                    "lastname": "Lima",
                    "mail": "thiagolima05.ad@gmail.com"
                }
            }
        )
        .end(function(err, res) {
            expect(res).to.have.status(200);
            // Aqui executa tudo
            done();
        })
    });
})