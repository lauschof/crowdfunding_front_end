async function postCreateProject(title, description, goal, image, is_open = true) {
  const url = `${import.meta.env.VITE_API_URL}/projects/`;
  const token = window.localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      goal: goal,
      image: image,
      is_open: is_open,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to create project`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    console.error("Backend error response:", data); // Log backend response for debugging
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postCreateProject