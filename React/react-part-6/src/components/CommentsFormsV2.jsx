import { useState } from "react";

export default function ComponentsFormV2() {

  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    comments: "",
    rating: 5,
  });

  // Function to handle input changes
  const handleFormData = (e) => {
    const { name, value } = e.target;

    // Convert 'rating' to a number when it's being updated
    setFormData((currData) => ({
      ...currData,
      [name]: name === "rating" ? +value : value, // '+' converts string to number
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Reset form to initial state after submission
    setFormData({
      username: "",
      comments: "",
      rating: 5,
    });
  };

  return (
    <>
      <h4>Give me Comments!</h4>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <label htmlFor="username">Enter Your Username</label><br /><br />
        <input
          placeholder="Type here!"
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleFormData}
        /><br /><br />

        {/* Comments Text Area */}
        <label htmlFor="comments">Type your Comments</label><br /><br />
        <textarea
          name="comments"
          id="comments"
          value={formData.comments}
          onChange={handleFormData}
        ></textarea><br /><br />

        {/* Rating Input */}
        <label htmlFor="rating">Rating</label><br /><br />
        <input
          type="number"
          name="rating"
          id="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleFormData}
        /><br /><br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
