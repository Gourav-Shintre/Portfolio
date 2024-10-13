
function About() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-12"

    >
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 max-w-4xl w-full transform transition duration-500 hover:scale-105">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Gourav Shintre</h2>
          <p className="text-teal-600 font-medium text-lg">Frontend Developer</p>
        </div>

        {/* Personal Info Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Info</h3>
          <p className="text-gray-600 text-justify leading-relaxed">
            Hi, I'm Gourav! I'm passionate about building visually appealing and responsive web applications. With a focus on frontend technologies like React and Tailwind CSS, I enjoy crafting seamless user experiences. In my free time, I love exploring new technologies, playing Table Tennis, and Cricket.
          </p>
        </div>

        {/* Address Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">Pune, Maharashtra, India</p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Work Experience</h3>
          <div className="mb-4">
            <h4 className="font-bold text-gray-700">Jr. Software Engineer at Epam Systems</h4>
            <p className="text-gray-600 mb-2">May 2024 - September 2024 | Hyderabad, India</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>Developed responsive websites using HTML, CSS, JavaScript, and React, ensuring optimal performance and user experience across devices.</li>
              <li>Collaborated with cross-functional teams, including UX/UI designers and back-end developers, to deliver high-quality web applications.</li>
              <li>Implemented best practices in coding and design, contributing to code reviews and maintaining a clean codebase.</li>
              <li>Participated in Agile ceremonies, including daily stand-ups and sprint planning, to enhance team collaboration and project efficiency.</li>
              <li>Utilized tools like JIRA for project tracking and Git/GitHub for version control, ensuring smooth deployment and version management.</li>
            </ul>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/gourav-shintre-b52545252/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Gourav-Shintre"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
