export default function Projects() {
  const projectList = [
    {
      name: "Web Perpustakaan",
      year: "2024",
      image: "https://blog.mostar.co.id/wp-content/uploads/2024/09/123863.jpg",
      description:
        "Aplikasi pengelolaan buku dan transaksi perpustakaan berbasis web menggunakan PHP dan MySQL.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
      link: "#"
    },
    {
      name: "Portofolio React",
      year: "2025",
      image: "web.png",
      description:
        "Website portofolio pribadi dengan React JS dan Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#"
    }
  ];

  return (
    <section
      id="projects"
      className="p-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-cyan-500 inline-block">
          My Projects
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          Beberapa proyek yang pernah saya kerjakan:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {project.name} <span className="text-sm text-gray-400">({project.year})</span>
                </h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <p className="text-xs mt-2 text-cyan-400">
                  Teknologi: {project.tech.join(", ")}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-sm text-cyan-500 hover:underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat Proyek →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
