import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface BagQtyProps {
  total: number;
}

export default function BagQty(props:BagQtyProps) {
  return (
    <>
      <Link to="/bag">Cart Total: {props.total}</Link>
    </>
  );
}
