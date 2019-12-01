import React, { useState } from "react";
import { useReducerActions } from "../../store";

export default function AddItemForm() {
  const [itemValue, setItemValiue] = useState("");
  const { addItem } = useReducerActions();

  return (
    <>
      <input
        type="text"
        onChange={evt => {
          setItemValiue(evt.target.value);
        }}
        value={itemValue}
      />
      <button
        type="button"
        onClick={() => {
          if (!itemValue) {
            return;
          }
          
          addItem(itemValue);
          setItemValiue("");
        }}
      >
        Add note
      </button>
    </>
  );
}
