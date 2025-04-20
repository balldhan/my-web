import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaFigma, FaPhp, FaLaravel, FaNodeJs, } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about" className="p-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-cyan-500 inline-block">About Me</h2>
        <p className="text-lg leading-relaxed">
          Saya adalah seorang mahasiswa Informatika. Saat ini saya sedang menempuh semester 4 di Institut Teknologi Nasional Bandung.
          Saya tertarik dalam pengembangan web, khususnya pada bidang frontend development. 
          Saya menyukai pembuatan UI yang modern dan responsif menggunakan teknologi terkini.
          Selama kuliah, saya telah belajar dalam pembuatan dan pengembangan sebuah website dan sudah menguasai beberapa bahasa pemrograman dan tools untuk membuat website.

        </p>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaHtml5 className="text-4xl mx-auto text-orange-600" />
              <p className="mt-2 text-sm font-medium">HTML</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaCss3Alt className="text-4xl mx-auto text-blue-500" />
              <p className="mt-2 text-sm font-medium">CSS</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaJs className="text-4xl mx-auto text-yellow-500" />
              <p className="mt-2 text-sm font-medium">JavaScript</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaPhp className="text-4xl mx-auto text-sky-400" />
              <p className="mt-2 text-sm font-medium">PHP</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaNodeJs className="text-4xl mx-auto text-pink-500" />
              <p className="mt-2 text-sm font-medium">Node JS</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <VscCode className="text-4xl mx-auto text-indigo-500" />
              <p className="mt-2 text-sm font-medium">VS Code</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaGithub className="text-4xl mx-auto text-gray-700 dark:text-gray-200" />
              <p className="mt-2 text-sm font-medium">GitHub</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaFigma className="text-4xl mx-auto text-pink-500" />
              <p className="mt-2 text-sm font-medium">Figma</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaReact className="text-4xl mx-auto text-cyan-400" />
              <p className="mt-2 text-sm font-medium">React</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <SiTailwindcss className="text-4xl mx-auto text-sky-400" />
              <p className="mt-2 text-sm font-medium">Tailwind CSS</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <FaLaravel className="text-4xl mx-auto text-sky-400" />
              <p className="mt-2 text-sm font-medium">Laravel</p>
            </div>
          </div>
        </div>

        </div>
    </section>
  );
}
