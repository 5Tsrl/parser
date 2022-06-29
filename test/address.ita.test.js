const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('Corso Duca degli Abruzzi', [
    { street: 'Corso Duca degli Abruzzi' }
  ])

  assert('v. Piazzi 17 10129 Torino', [
    { street: 'v. Piazzi' }, { housenumber: '17' },
    { postcode: '10129' }, { locality: 'Torino' }
  ])

  assert('p.zza Vittorio Veneto 7/A', [
    { street: 'p.zza Vittorio Veneto' }, { housenumber: '7/A' }
  ])

  assert('Corso Cristoforo Colombo, 11 20144 Milano ITA', [
    { street: 'Corso Cristoforo Colombo' }, { housenumber: '11' },
    { postcode: '20144' }, { locality: 'Milano' }, { country: 'ITA' }
  ])
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`address ITA: ${name}`, testFunction)
  }

  testcase(test, common)
}
