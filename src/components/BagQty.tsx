import React from "react";
import { Link } from "react-router-dom";

interface BagQtyProps {
  total: number;
}

export default function BagQty(props:BagQtyProps) {
  return (
    <>
      <Link to="/bag">{props.total}</Link>
    </>
  );
}
