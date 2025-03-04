"use client";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import jsPDF from "jspdf";
import Link from "next/link";

const API_KEY = "AIzaSyD2DGLj6TrFyuU7rsigVe4UCIGmcKkzw-g";
const genAI = new GoogleGenerativeAI(API_KEY);

export default function FormData() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [respostaIa, setRespostaIa] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const mensagem = `MONTE UM TREINO PARA UM ${sexo} de ${peso} com ${altura} e idade ${idade} anos.
     Ele frequenta a academia ${frequencia} e tem o foco de ${objetivo}. 
     Monte um treino 
     detalhado com as quantidades
     de repetição e progressão de carga adequada semanalmente.`;

    setLoading(true);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = mensagem;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const texto = await response.text();

    const pdf = new jsPDF();
    pdf.setFontSize(9);

    // Adicionar o texto ao PDF em várias páginas
    const linhas = texto.split("\n");
    let y = 10;
    for (const linha of linhas) {
      if (y > 250) {
        pdf.addPage();
        y = 10;
      }
      pdf.text(linha, 10, y);
      y += 5;
    }

    const filename = "treino.pdf"; // Nome do arquivo PDF
    pdf.save(filename);

    console.log(texto);
    setRespostaIa(true);
    setLoading(false);
  }
  return (
    <main className="h-screen relative flex flex-col items-center justify-center m-auto">
      {loading ? (
        <section
          id="loading"
          className="h-screen z-50
          bg-black w-screen
          absolute flex flex-col items-center justify-center m-auto"
        >
          <div className="spinner">
            <div className="universe"></div>
          </div>
          <p className="pt-8 font-thin text-xs ml-2 animate-pulse text-center ">
            Analisando dados <br /> fornecidos com a IA.
          </p>
        </section>
      ) : (
        ""
      )}

      {respostaIa ? (
        <div className="flex flex-col items-center justify-center m-auto">
          <button className="uiverse" type="submit">
            <div className="wrapper">
              <span>PARABÉNS</span>
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
          <div>
            <p className="text-center font-extralight text-xs mt-4 text-gray-400">
              PDF gerado com sucesso <br />
              acesse seus downloads
            </p>
          </div>

          <Link
            className="cursor-pointer flex flex-col items-center justify-center m-auto mt-8"
            href="/"
          >
            <button
              className="bg-orange-400
             px-2 rounded-lg  cursor-pointer animate-bounce hover:bg-amber-700 uiverse "
            >
              <div className="spinner">
                <div className="universe"></div>
              </div>
            </button>

            <p className="text-xs">&#9745; Nova Consulta</p>
          </Link>
        </div>
      ) : (
        <section
          id="form"
          className="h-screen flex flex-col items-center justify-center m-auto"
        >
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

            <p className=" text-gray-500 text-xs">Selecione seu sexo:</p>
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

            <p className="text-gray-500 text-xs">
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

            <p className="text-gray-500 text-xs mt-6">
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
            Atenção: Procure um profissional <br /> credenciado, lembre-se que
            esse app <br /> retorna uma informação gerada por uma IA.
          </p>
        </section>
      )}
    </main>
  );
}
