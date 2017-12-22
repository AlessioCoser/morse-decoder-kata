const { equal } = require('assert')
const { decodeMorse } = require('../morse-decoder')

test('can translate a letter from morse to Text', function () {
  equal(decodeMorse('.-'), 'A')
  equal(decodeMorse('--.-'), 'Q')
})

test('can translate more letters using char separator', function () {
  equal(decodeMorse('.- --.-'), 'AQ')
  equal(decodeMorse('.- --.- .-'), 'AQA')
})

test.skip('Example from description', function () {
  equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
})
