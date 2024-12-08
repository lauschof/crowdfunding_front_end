async function postLikeProject(projectId) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}/like/`;
    const token = window.localStorage.getItem("token");
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      },
    });
  
    if (!response.ok) {
      const fallbackError = `Error trying to like the project`;
  
      const data = await response.json().catch(() => null); // Prevent JSON parse errors
      const errorMessage = data?.detail || fallbackError;
      throw new Error(errorMessage);
    }
  
    return await response.json();
  }
  
  export default postLikeProject;