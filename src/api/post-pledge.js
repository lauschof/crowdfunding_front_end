async function postPledge({ amount, project_id, anonymous = false, comment = "" }) {
  const url = `${import.meta.env.VITE_API_URL}/pledges/`;
  const token = window.localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
      amount: amount,
      project_id: project_id,
      anonymous: anonymous,
      comment: comment,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to create a pledge`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postPledge;