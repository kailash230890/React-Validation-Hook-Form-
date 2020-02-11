// Apply validation

import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">First Name: </label>
        <input
          name="firstName"
          placeholder="firstname"
          ref={register({
            required: true,
            pattern: /^[A-Za-z]+$/i,
            maxLength: 20,
            minLength: 5
          })}
        />
        {errors.firstName && " your input required! min 5 characters"}
      </div>
      <div>
        <label htmlFor="name">Last Name: </label>
        <input
          name="lastName"
          placeholder="lastname"
          ref={register({
            required: true,
            pattern: /[A-Za-z]{5}/
          })}
        />
        {errors.lastName && " your input required to be more than 5 characters"}
      </div>
      <div>
        <label htmlFor="name">ContactNo: </label>
        <input
          name="contact"
          placeholder="contact no"
          type="number"
          ref={register({
            required: true,
            minLength: 10,
            maxLength: 10
          })}
        />
        {errors.contact && " your input required should be 10"}
      </div>
      <div>
        <label htmlFor="name"> Your Age: </label>
        <input
          name="age"
          placeholder="age"
          type="number"
          ref={register({
            required: true,
            min: 18,
            max: 65
          })}
        />
        {errors.age && " your age should be 18 to 65"}
      </div>
      <input type="submit" />
      <input type="reset" /> {/* standard reset button */}
    </form>
  );
}
