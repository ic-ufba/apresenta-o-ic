import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Clock, Users, BookOpen, Lightbulb, Trophy, Globe, ExternalLink, Mail } from "lucide-react";

const CienciaComputacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </a>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <Code className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Ciência da Computação</h1>
              <p className="text-xl text-blue-100">Bacharelado • 4 anos • 3.347 horas</p>
              <p className="text-lg text-blue-200 mt-2 italic">"Pense como cientista, programe como um mestre."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre o <span className="text-blue-600">Curso</span>
            </h2>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-soft mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">O que é Ciência da Computação?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              É o curso para quem deseja dominar a ciência fundamental por trás do mundo digital. O foco é profundo e especializado, formando o profissional que vai liderar a vanguarda tecnológica, criando as ferramentas, os sistemas e os algoritmos que definem o futuro.
            </p>
          </div>

          {/* Informações do Curso */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Carga Horária</h3>
              </div>
              <p className="text-gray-700"><strong>Total:</strong> Aproximadamente 3.347 horas</p>
              <p className="text-gray-700"><strong>Duração:</strong> Projetado para 4 anos (8 semestres)</p>
              <p className="text-gray-700"><strong>Turno:</strong> Diurno, favorece imersão em pesquisa e extensão</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Vantagens do Diurno</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">• Imersão total no ecossistema universitário</p>
              <p className="text-gray-700 text-sm mb-2">• Acesso facilitado a pesquisa e extensão</p>
              <p className="text-gray-700 text-sm">• Dedicação integral aos estudos</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Diferenciais</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">• Base teórica robusta</p>
              <p className="text-gray-700 text-sm mb-2">• Foco em inovação de ponta</p>
              <p className="text-gray-700 text-sm">• Preparação para pesquisa</p>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-3xl mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">🚀 Principais Áreas de Atuação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Desenvolvimento de Software de Base</h4>
                <p className="text-blue-100 text-sm">Criação de sistemas operacionais, compiladores, motores gráficos (engines) e tecnologias que servem de alicerce para outras aplicações.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Inteligência Artificial e Ciência de Dados</h4>
                <p className="text-blue-100 text-sm">Desenvolvimento de novos modelos de aprendizado de máquina (machine learning), análise complexa de dados (Big Data) e pesquisa em IA.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Carreira Acadêmica e Pesquisa</h4>
                <p className="text-blue-100 text-sm">O caminho natural para quem deseja seguir em mestrados e doutorados, tornando-se pesquisadores que expandem as fronteiras do conhecimento.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Computação Gráfica, Visão Computacional e Jogos</h4>
                <p className="text-blue-100 text-sm">Criação da lógica e dos algoritmos por trás de jogos, animações e sistemas que interpretam imagens.</p>
              </div>
            </div>
          </div>

          {/* Por que escolher */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Por que este curso é <span className="text-blue-600">atraente?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Base Teórica Robusta</h3>
              </div>
              <p className="text-gray-700">A formação na UFBA é reconhecida pela excelência em fundamentos matemáticos e teóricos, preparando um profissional adaptável a qualquer tecnologia futura.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Foco na Inovação de Ponta</h3>
              </div>
              <p className="text-gray-700">É o curso ideal para quem sonha em trabalhar em big techs, criar uma startup de base tecnológica ou desenvolver algoritmos revolucionários.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Imersão em Pesquisa</h3>
              </div>
              <p className="text-gray-700">A dedicação em período diurno facilita o engajamento em projetos de iniciação científica, grupos de pesquisa e laboratórios do IC/UFBA.</p>
            </div>
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-soft text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">📞 Contato</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Site:</p>
                  <a href="https://bcc.ufba.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                    bcc.ufba.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">E-mail:</p>
                  <a href="mailto:ccc@ufba.br" className="text-blue-600 hover:text-blue-800 transition-colors">
                    ccc@ufba.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CienciaComputacao;