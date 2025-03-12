import React, { useState } from "react";

const BudgetFilter = ({ onFilter }) => {
  const [budget, setBudget] = useState("");

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleFilterSubmit = () => {
    onFilter(Number(budget)); // Convert input to number before filtering
  };

  return (
    <div className="budget-filter">
      <input
        type="number"
        placeholder="Enter your Budget"
        value={budget}
        onChange={handleBudgetChange}
        className="budget-input"
      />
      <button onClick={handleFilterSubmit} className="budget-button">
        Find
      </button>
    </div>
  );
};

export default BudgetFilter;