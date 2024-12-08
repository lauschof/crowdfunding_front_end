async function postUnlikeProject(projectId) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}/unlike/`;
    const token = window.localStorage.getItem("token");
  
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      },
    });
  
    if (!response.ok) {
      const fallbackError = `Error trying to unlike the project`;
  
      const data = await response.json().catch(() => null); // Prevent JSON parsing errors
      const errorMessage = data?.detail || fallbackError;
      throw new Error(errorMessage);
    }
  
    return await response.json();
  }
  
  export default postUnlikeProject;