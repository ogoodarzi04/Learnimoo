import React, { useCallback, useEffect, useReducer, useState } from "react";
import regex from "../regex/regex";
const formHandeler = (states, action) => {
   let valid = false;
   let error = states[action.id].error;
   if (action.value.length > 0) {
      valid = true;
   }

   // Min Config

   if (action.min) {
      valid = action.value.length > action.min;
   }
   if (action.max) {
      valid = valid && action.value.length < action.max;
   }
   if (action.phoneNumber) {
      valid = (action.value.length === action.phoneNumber) & !isNaN(+action.value);
   }
   //    Email Pattern

   if (action.email) {
      valid = regex.testEmail(action.value);
   }
   if (action.password) {
   }

   return { ...states, [action.id]: { value: action.value, isValid: valid, error } };
};

export default function useForm(objs) {
   let [inputs, dispach] = useReducer(formHandeler, objs);
   //    console.log(inputs);
   // is Valid All Inputs
   const [allValid, setAllValid] = useState(false);
   //
   const ClearInputs = () => {
      for (let input in inputs) {
         inputs[input].value = "";
         inputs[input].isValid = false;
         setAllValid(false);
         // return;
      }
   };
   // Change Current Valid all Inputs
   useEffect(() => {
      for (let input in inputs) {
         if (!inputs[input].isValid) {
            setAllValid(false);
            return;
         }
      }
      setAllValid(true);
   }, [inputs]);

   //    Input Handeler

   const inputHandeler = useCallback((e, config) => {
      let { id, value } = e.target;
      dispach({ id, value, ...config });
   }, []);

   return [allValid, inputs, inputHandeler, ClearInputs];
}

// if (validator.value === requiredValue) {
//     value.trim().length === 0 && resultvalidations.push(false);
//  }
//  if (validator.value === minValue) {
//     value.trim().length < validator.min && resultvalidations.push(false);
//  }
//  if (validator.value === maxValue) {
//     value.trim().length > validator.max && resultvalidations.push(false);
//  }
//  if (validator.value === emailValue) {
//     !value.trim().includes("@") | !value.trim().includes(".com") && resultvalidations.push(false);
//  }
//  if (validator.value === phonelValue) {
//     (value.trim().length !== validator.count) | isNaN(+value.trim()) && resultvalidations.push(false);
//  }
