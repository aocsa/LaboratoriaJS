var assert = require('assert');
var Converter = require('../ejercicio-01.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('stringToHash', function(){
  it("should succesfully convert any string into a number",function(){
    assert.equal(Converter.stringToHash("Diana me gustas."),1460)
    assert.equal(Converter.stringToHash("Hola mundo"),967)
    assert.equal(Converter.stringToHash("!@#$%^^&*()_"),649)
  });

  it("should throw an error if a non string parameter is provided",function(){
    assert.equal(Converter.stringToHash(false),"Error de dato")
    assert.equal(Converter.stringToHash(3),"Error de dato")
    assert.equal(Converter.stringToHash(undefined),"Error de dato")
  });
})
