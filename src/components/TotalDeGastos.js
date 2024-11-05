
import React from 'react';

function TotalExpenses({ total }) {
  return <h2>Total em gastos: R${total.toFixed(2)}</h2>;
}

export default TotalExpenses;
