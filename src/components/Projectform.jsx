import { useState } from "react";
import postCreateProject from "../api/post-project";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
    const navigate = useNavigate();


    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        image: "",
        goal: 0, // Already aligned with backend naming
        is_open: true, // Default value
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        postCreateProject(
          projectData.title,         // String: "test"
          projectData.description,   // String: "ettetetettedjhfkdfkdgn"
          Number(projectData.goal),  // Number: 1000
          projectData.image,         // String: "https://example.com/image.jpg"
          projectData.is_open        // Boolean: true
        )
          .then((response) => {
            console.log("Project created successfully:", response);
            navigate("/");
          })
          .catch((error) => {
            console.error("Error creating project:", error.message);
          });
      };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter project title"
                    value={projectData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    placeholder="Enter project description"
                    value={projectData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input
                    type="url"
                    id="image"
                    placeholder="Enter image URL"
                    value={projectData.image}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="goal">Target Amount:</label>
                <input
                    type="number"
                    id="goal"
                    placeholder="Enter target amount"
                    value={projectData.goal}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Create</button>
        </form>
    );
}

export default ProjectForm;