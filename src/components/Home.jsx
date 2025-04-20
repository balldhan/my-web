export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-cyan-100 dark:from-gray-900 dark:to-gray-800 transition duration-500"
    >
      <img
        src="saya.jpg"
        alt="Foto Profil"
        className="rounded-full w-36 mb-4 border-4 border-cyan-500 shadow-lg hover:scale-105 transition duration-300"
      />
      <h2 className="text-xl text-gray-600 dark:text-gray-300">Halo, saya</h2>
      <h1 className="text-4xl sm:text-5xl font-extrabold mt-1 text-cyan-600 dark:text-cyan-400">
        Iqbal Ramadhan
      </h1>
      <p className="text-md sm:text-lg mt-2 max-w-xl text-gray-600 dark:text-gray-300">
        Seorang Mahasiswa Informatika yang tertarik dengan pengembangan website dan UI/UX.
      </p>

      <a
        href="#about"
        className="mt-6 px-6 py-2 bg-cyan-500 text-white font-semibold rounded-full shadow hover:bg-cyan-600 hover:shadow-lg transition duration-300"
      >
        Lebih lanjut ↓
      </a>
    </section>
  );
}
