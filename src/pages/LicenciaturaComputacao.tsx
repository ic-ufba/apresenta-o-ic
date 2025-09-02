import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, Clock, Users, BookOpen, Lightbulb, Trophy, Globe, ExternalLink, Mail, Moon, Heart } from "lucide-react";

const LicenciaturaComputacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </a>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Licenciatura em Computação</h1>
              <p className="text-xl text-purple-100">Licenciatura • 4,5 anos • 3.141 horas</p>
              <p className="text-lg text-purple-200 mt-2 italic">"Use a tecnologia para transformar a educação e formar as próximas gerações."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre o <span className="text-purple-600">Curso</span>
            </h2>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-soft mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">O que é Licenciatura em Computação?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Esta é a formação mais teórica e versátil, unindo o melhor de dois mundos. Ela engloba a base técnica e científica da computação e adiciona uma camada poderosa: o domínio sobre como o conhecimento é construído, ensinado e aplicado para transformar pessoas e a sociedade.
            </p>
          </div>

          {/* Informações do Curso */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Carga Horária</h3>
              </div>
              <p className="text-gray-700"><strong>Total:</strong> Aproximadamente 3.141 horas</p>
              <p className="text-gray-700"><strong>Duração:</strong> Projetado para 4,5 anos (9 semestres)</p>
              <p className="text-gray-700"><strong>Turno:</strong> Noturno, facilita conciliação com vida profissional</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Dupla Competência</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">• Formação técnica sólida</p>
              <p className="text-gray-700 text-sm mb-2">• Competências pedagógicas</p>
              <p className="text-gray-700 text-sm">• Habilidades de comunicação e liderança</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Diferenciais</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">• Flexibilidade total de carreira</p>
              <p className="text-gray-700 text-sm mb-2">• Impacto social direto</p>
              <p className="text-gray-700 text-sm">• Formação interdisciplinar</p>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-3xl mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">🧑‍🏫 Principais Áreas de Atuação</h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-center">No Mercado de Tecnologia (como o Bacharel):</h4>
              <p className="text-purple-100 text-center mb-6">Desenvolvimento de Software, Análise de Sistemas, Inteligência Artificial, etc. A base de programação e engenharia de software garante total competitividade para as vagas no mercado corporativo.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-lg font-bold mb-3">Docência na Educação Básica</h4>
                <p className="text-purple-100 text-sm">Com a inclusão obrigatória da Computação na BNCC, abriu-se uma demanda massiva por professores qualificados. O licenciado da UFBA é o profissional ideal para liderar essa transformação.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-lg font-bold mb-3">Liderança em Edtechs</h4>
                <p className="text-purple-100 text-sm">Atuação estratégica em empresas que criam as tecnologias educacionais do futuro (plataformas adaptativas, apps de ensino, jogos educativos).</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-lg font-bold mb-3">Formação e Treinamento Corporativo</h4>
                <p className="text-purple-100 text-sm">Desenvolvimento e aplicação de programas de capacitação técnica em empresas, unindo o conhecimento profundo do conteúdo à habilidade de ensinar.</p>
              </div>
            </div>
          </div>

          {/* Por que escolher */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Por que este curso é <span className="text-purple-600">atraente?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Flexibilidade de Carreira Total</h3>
              </div>
              <p className="text-gray-700">Te dá o poder de escolher: você pode ser um desenvolvedor em uma fintech hoje e, amanhã, liderar um projeto de transformação digital em uma rede de escolas. Você não fecha nenhuma porta, pelo contrário, abre um leque imenso de novas possibilidades.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Impacto Social Direto</h3>
              </div>
              <p className="text-gray-700">O licenciado é um agente de mudança, com a missão de capacitar as novas gerações para um futuro digital, garantindo um legado duradouro.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Dupla Competência</h3>
              </div>
              <p className="text-gray-700">O profissional formado é altamente valorizado no mercado corporativo por suas habilidades de comunicação, didática e liderança, competências desenvolvidas na área de educação.</p>
            </div>
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-soft text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">📞 Contato</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">Site:</p>
                  <a href="https://licomp.ufba.br/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                    licomp.ufba.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">E-mail:</p>
                  <a href="mailto:lc@ufba.br" className="text-purple-600 hover:text-purple-800 transition-colors">
                    lc@ufba.br
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

export default LicenciaturaComputacao;