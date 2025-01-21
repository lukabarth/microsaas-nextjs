const LoginPage = () => {

  const login = async(formData: FormData) => {
    "use server"

    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl text-emerald-700 font-bold text-center mb-6">Login</h1>
      <form action={login} className="form flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
        <label htmlFor="user" className="block text-sm font-medium text-gray-700">
          Usuário
          <input 
            type="text" 
            id="user" 
            name="user" 
            placeholder="Insira seu usuário"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          />
        </label>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Senha
          <input
            type="password" 
            id="password" 
            name="password" 
            placeholder="Insira sua senha"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          ></input>
        </label>
        <button type="submit" className="px-4 py-2 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-opacity-50">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;