import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center m-auto">
      <div>
        <Image
          className="animate-bounce"
          src="/alter.png"
          alt="Logo"
          width={300}
          height={300}
        />
      </div>
      <p className="mb-4 font-extralight ">
        Crie sua cartilha de treino com uma IA
      </p>
      <Link href="/form">
        <button className="uiverse">
          <div className="wrapper">
            <span>GO TO AI</span>
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
      </Link>
    </section>
  );
}
