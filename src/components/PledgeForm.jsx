import { useState } from "react";
import postPledge from "../api/post-pledge";

function PledgeForm({ projectId }) {
  const [pledgeData, setPledgeData] = useState({
    amount: "",
    anonymous: false,
    comment: "",
  });

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setPledgeData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postPledge({
      amount: Number(pledgeData.amount),
      project_id: projectId,
      anonymous: pledgeData.anonymous,
      comment: pledgeData.comment,
    })
      .then((response) => {
        console.log("Pledge created successfully:", response);
        alert("Thank you for your pledge!");
      })
      .catch((error) => {
        console.error("Error creating pledge:", error.message);
        alert(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={pledgeData.amount}
          onChange={handleChange}
          placeholder="Enter pledge amount"
          required
        />
      </div>
      <div>
        <label htmlFor="anonymous">
          <input
            type="checkbox"
            id="anonymous"
            checked={pledgeData.anonymous}
            onChange={handleChange}
          />
          Pledge anonymously
        </label>
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={pledgeData.comment}
          onChange={handleChange}
          placeholder="Leave a comment (optional)"
        />
      </div>
      <button type="submit">Submit Pledge</button>
    </form>
  );
}

export default PledgeForm;