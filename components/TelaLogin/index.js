import React from "react";
import Omega from "../../assets/Omega.png";
import "./TelaLogin.css";



const TelaLogin = ({ props }) => {

    return(
        <div className="bg-white font-family-karla h-screen">
        <div className="tela-login">
          {/* Login Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <img src={Omega} alt="Omega"></img>
            </div>
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <br/>
              <form className="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                <div className="flex flex-col pt-4">
                  <label htmlFor="email" className="text-lg">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex flex-col pt-4">
                  <label htmlFor="password" className="text-lg">Senha</label>
                  <input type="password" id="password" minLength={8} placeholder="Senha" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <input type="submit" defaultValue="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
              </form>
              <div className="text-center pt-12 pb-12">
                <p>Não tem uma conta? <a href="register.html" className="underline font-semibold">Crie Conta.</a></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      

    );


}

export default TelaLogin;