import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600">Bem-vindo ao Quiz Interativo!</h1>
      <p className="mt-4 text-xl text-gray-700">Teste seus conhecimentos e divirta-se!</p>
      <Link href="/quiz" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Iniciar Quiz
      </Link>
    </div>
  );
}
