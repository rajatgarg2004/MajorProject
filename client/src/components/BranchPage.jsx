import React from "react";
import { useParams } from "react-router-dom";

const BranchPage = () => {
  const { branch } = useParams();
  const branchName = branch.replace(/([A-Z])/g, " $1").trim(); // Convert camelCase to spaced name
  return <h2>Welcome to the {branchName} Engineering Page!</h2>;
};

export default BranchPage;
