module.exports = db => {
  const funds = [
    {
      "manager": "Bob Smith",
      "name": "George Lopez",
      "birthdate": "04/06/1958",
      "balance": 10000,
      interest: 4,
      term: 36,
      tax: 3,
      fees: 100
    },
    {
      "manager": "Bob Smith",
      "name": "Sally Mayfield",
      "birthdate": "05/01/1968",
      "balance": 14000,
      interest: 4,
      term: 36,
      tax: 3,
      fees: 100
    },
    {
      "manager": "Bob Smith",
      "name": "Jessica Johnson",
      "birthdate": "04/06/1958",
      "balance": 12000,
      interest: 4,
      term: 36,
      tax: 3,
      fees: 100
    },
    {
      "manager": "Bob Smith",
      "name": "Tori France",
      "birthdate": "04/06/1958",
      "balance": 6000,
      interest: 4,
      term: 36,
      tax: 3,
      fees: 100
    },
    {
      "manager": "Bob Smith",
      "name": "Toni France",
      "birthdate": "04/06/1958",
      "balance": 18000,
      interest: 4,
      term: 36,
      tax: 3,
      fees: 100
    },
    {
      "manager": "Bob Smith",
      "name": "Dillon Barker",
      "birthdate": "04/06/1958",
      "balance": 100000,
      interest: 4,
      term: 36,
      tax: 3,
      fees: 100
    },
    
  ]

  funds.forEach(fund => db.funds.insert(fund))
}