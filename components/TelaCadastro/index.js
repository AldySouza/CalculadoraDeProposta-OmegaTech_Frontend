import React from "react";
import Omega from "../../assets/Omega.png";




const TelaCadastro = ({ props }) => {

return(

   <div className="w-full flex flex-wrap">
  {/* Register Section */}
  <div className="w-full md:w-1/2 flex flex-col">
    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
    <img src={Omega} alt="Omega"></img>
    </div>
    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
      <p className="text-center text-3xl">Cadastro.</p>
      <form className="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
        <div className="flex flex-col pt-4">
          <label htmlFor="name" className="text-lg">Nome</label>
          <input type="text" id="name" minLength={3} placeholder="Digite seu nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="email" className="text-lg">Email</label>
          <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="password" className="text-lg">Senha</label>
          <input type="password" id="password" minLength={8} placeholder="Senha" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="confirm-password" className="text-lg">Confirme Senha</label>
          <input type="password" id="confirm-password" minLength={8} placeholder="Senha" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <input type="submit" defaultValue="Register" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
      </form>
      <div className="text-center pt-12 pb-12">
        <p>Já tem uma conta? <a href="login.html" className="underline font-semibold">Entre aqui.</a></p>
      </div>
    </div>

    
    
  </div>
 
</div>

)

}

export default TelaCadastro;