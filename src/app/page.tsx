"use client"

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        className="bg-white p-6 rounded shadow-md w-80"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-xl font-bold mb-4 text-green-900">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Usuário
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full border border-gray-300 p-2 rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
