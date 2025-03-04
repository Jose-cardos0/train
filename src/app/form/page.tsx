"use client";
import { FormEvent, useState } from "react";

const API_KEY = "AIzaSyD2DGLj6TrFyuU7rsigVe4UCIGmcKkzw-g";
const API_URL = "https://api-traning.vercel.app/api";

export default function FormData() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const apiKey = "AIzaSyD2DGLj6TrFyuU7rsigVe4UCIGmcKkzw-g";
    const mensagem = `MONTE UM TREINO PARA UM ${sexo} de ${peso} com ${altura} e idade ${idade} anos. Ele frequenta a academia ${frequencia} e tem o foco de ${objetivo}. Monte um treino detalhado com as quantidades de repetição e progressão de carga adequada semanalmente.`;

    fetch("https://api.gemini.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey, // Autenticação com a chave API da Gemini AI
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Verifique se o modelo é o mesmo utilizado pela Gemini AI
        messages: [
          {
            role: "user",
            content: mensagem,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    // const apiUrl = "https://api-traning.vercel.app/api/treino";
    // const apiKey = "AIzaSyD2DGLj6TrFyuU7rsigVe4UCIGmcKkzw-g";
    // const mensagem = `MONTE UM TREINO PARA UM ${sexo} de ${peso} com ${altura} e idade ${idade} anos. Ele frequenta a academia ${frequencia} e tem o foco de ${objetivo}. Monte um treino detalhado com as quantidades de repetição e progressão de carga adequada semanalmente.`;

    // fetch(apiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${apiKey}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "user",
    //         content: mensagem,
    //       },
    //     ],
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const resposta = data;
    //     // Enviar a resposta para a API
    //     fetch("https://api-traning.vercel.app/api/treino", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ treino: resposta }),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => console.log(data))
    //       .catch((error) => console.error(error));
    //   })
    //   .catch((error) => console.error(error));
  }
  return (
    <section className="h-screen flex flex-col items-center justify-center m-auto">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl flex items-center justify-between  flex-col"
      >
        <input
          className="w-full border-b outline-none text-sm text-gray-500 py-2 "
          required
          type="text"
          name="name"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          className="w-full border-b my-6 outline-none text-sm text-gray-500 py-2"
          required
          type="text"
          name="idade"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <input
          className="w-full border-b mb-6 outline-none text-sm text-gray-500 py-2 "
          type="text"
          required
          name="peso"
          placeholder="Seu peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          className="w-full border-b mb-6 outline-none text-sm text-gray-500 py-2 "
          type="text"
          name="altura"
          required
          placeholder="Sua altura, EX: 1.60"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <p className="font-extralight text-gray-500 text-sm">
          Selecione seu sexo:
        </p>
        <select
          className="w-full border-b outline-none mt-2 mb-6 text-sm text-gray-500 py-2"
          name="Frequencia"
          required
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option className="bg-black" value=""></option>
          <option className="bg-black text-sm" value="Masculino">
            Masculino
          </option>
          <option className="bg-black text-sm" value="Feminino">
            Feminino
          </option>
        </select>

        <p className="font-extralight text-gray-500 text-sm">
          Selecione a frequência que você treina:
        </p>
        <select
          className="w-full border-b outline-none mt-2 text-sm text-gray-500 py-2"
          name="Frequencia"
          required
          value={frequencia}
          onChange={(e) => setFrequencia(e.target.value)}
        >
          <option className="bg-black" value=""></option>
          <option className="bg-black text-sm" value="7 dias">
            7 dias na semana
          </option>
          <option className="bg-black text-sm" value="5 dias">
            5 dias na semana
          </option>
          <option className="bg-black text-sm" value="3 dias">
            3 dias na semana
          </option>
        </select>

        <p className="font-extralight text-gray-500 text-sm mt-6">
          Selecione seu objetivo:
        </p>
        <select
          className="w-full border-b outline-none mb-8 mt-2 text-sm text-gray-500 py-2"
          name="Frequencia"
          required
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
        >
          <option className="bg-black text-sm" value=""></option>
          <option className="bg-black text-sm" value="Hipertrofia">
            Hipertrofia
          </option>
          <option className="bg-black text-sm" value="Perca de peso">
            Perca de peso
          </option>
          <option className="bg-black text-sm" value="Manutenção da saúde">
            Manutenção da saúde
          </option>
        </select>

        <button className="uiverse" type="submit">
          <div className="wrapper">
            <span>ENVIAR</span>
            <div className="circle circle-12"></div>
            <div className="circle circle-11"></div>
            <div className="circle circle-10"></div>
            <div className="circle circle-9"></div>
            <div className="circle circle-8"></div>
            <div className="circle circle-7"></div>
            <div className="circle circle-6"></div>
            <div className="circle circle-5"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-1"></div>
          </div>
        </button>
      </form>
      <p className="text-center font-extralight text-xs mt-8 text-gray-400">
        Atenção: Procure um profissional <br /> credenciado, lembre-se que esse
        app <br /> retorna uma informação gerada por uma IA.
      </p>
    </section>
  );
}
