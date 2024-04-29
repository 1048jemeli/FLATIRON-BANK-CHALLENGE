import React from "react";
import Transaction from "./Transaction";

function TransactionsList() {
  const transactions = [
    {
      "id": 1,
      "date": "2019-12-01",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": 2,
      "date": "2019-12-01",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": 3,
      "date": "2019-12-02",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": 4,
      "date": "2019-12-04",
      "description": "Sunglasses, Urban Outfitters",
      "category": "Fashion",
      "amount": -24.99
    },
    {
      "id": 5,
      "date": "2019-12-06",
      "description": "Venmo, Alice Pays you for Burrito",
      "category": "Food",
      "amount": 8.75
    },
    {
      "id": 6,
      "date": "2019-12-06",
      "description": "Chipotle",
      "category": "Food",
      "amount": -17.59
    },
    {
      "id": 7,
      "date": "2019-12-07",
      "description": "Birthday Check from Grandma",
      "category": "Gift",
      "amount": 50
    },
    {
      "id": 8,
      "date": "2019-12-09",
      "description": "Lyft Ride",
      "category": "Transportation",
      "amount": -13.25
    },
    {
      "id": 9,
      "date": "2019-12-11",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": 10,
      "date": "2019-12-16",
      "description": "Tickets, Flatiron Multiplex Cinemas",
      "category": "Entertainment",
      "amount": -24
    },
    {
      "id": 11,
      "date": "2019-12-16",
      "description": "MTA Vending Machine: MetroCard",
      "category": "Transportation",
      "amount": -116.39
    },
    {
      "id": 12,
      "date": "2019-12-17",
      "description": "Venmo, Pay Roommate for Rent",
      "category": "Housing",
      "amount": -975
    }
    
  ];

  const transactionItems = transactions.map((item) => (
    <Transaction
      key={item.id}
      date={item.date}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionItems}
      </tbody>
    </table>
  );
}

export default TransactionsList;
