
function Project() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"

    >
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 max-w-4xl w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-semibold mb-6 text-center">Projects</h1>

        {/* Recipe Management System */}
        <div className="mb-8">
          <h2 className="text-2xl mb-2">Recipe Management System</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>
              Developed a recipe management system using HTML, CSS, JavaScript, React, and TypeScript, enabling users to perform CRUD operations on recipes.
            </li>
            <li>
              Implemented user authentication and authorization, allowing users to securely register, log in, and manage their recipes.
            </li>
            <li>
              Designed a user-friendly interface for adding, editing, and deleting recipes, with real-time validation and feedback.
            </li>
            <li>
              Utilized local storage and/or Firebase for data persistence, ensuring recipes are saved and retrievable across sessions.
            </li>
            <li>
              Participated in Agile Scrum ceremonies, utilizing Jenkins and SonarQube for continuous integration and code quality analysis.
            </li>
            <li>
              Conducted unit tests for critical functionalities, ensuring a robust and maintainable codebase.
            </li>
          </ul>
        </div>

        {/* E-commerce Website */}
        <div>
          <h2 className="text-2xl mb-2">E-commerce Website</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>
              Developed a responsive e-commerce website to enhance online sales and customer shopping experiences.
            </li>
            <li>
              Introduced QR code functionality for seamless digital transactions.
            </li>
            <li>
              Utilized HTML, CSS, JavaScript, React, and .NET to create an intuitive user interface.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
