import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Clock, Users, BookOpen, Lightbulb, Trophy, Globe, ExternalLink, Mail, Moon } from "lucide-react";

const SistemasInformacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-green-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </a>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <Building className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Sistemas de Informação</h1>
              <p className="text-xl text-green-100">Bacharelado • 4,5 anos • 3.355 horas</p>
              <p className="text-lg text-green-200 mt-2 italic">"Una tecnologia e gestão, formando pessoas capazes de resolver problemas organizacionais."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre o <span className="text-green-600">Curso</span>
            </h2>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-soft mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">O que é Sistemas de Informação?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Este é o curso que constrói a ponte entre a tecnologia da computação e o mundo dos negócios. O profissional de SI é um especialista em aplicar o poder da computação para resolver problemas organizacionais, otimizar processos e criar valor para as empresas.
            </p>
          </div>

          {/* Informações do Curso */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Carga Horária</h3>
              </div>
              <p className="text-gray-700"><strong>Total:</strong> Aproximadamente 3.355 horas</p>
              <p className="text-gray-700"><strong>Duração:</strong> 4,5 anos (9 semestres)</p>
              <p className="text-gray-700"><strong>Turno:</strong> Noturno</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Moon className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Vantagens do Noturno</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">• Possibilidade de estágio durante o dia</p>
              <p className="text-gray-700 text-sm mb-2">• Experiência prática no mercado</p>
              <p className="text-gray-700 text-sm">• Aplicação imediata do conhecimento</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Diferenciais</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">• Visão estratégica de negócios</p>
              <p className="text-gray-700 text-sm mb-2">• Alta empregabilidade</p>
              <p className="text-gray-700 text-sm">• Formação gerencial</p>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-3xl mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">💼 Principais Áreas de Atuação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Análise e Desenvolvimento de Sistemas Corporativos</h4>
                <p className="text-green-100 text-sm">Planejamento e criação de softwares de gestão (ERPs), sistemas para e-commerce, plataformas de BI (Business Intelligence) e soluções que atendem às necessidades específicas de uma organização.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Gestão de Projetos de TI</h4>
                <p className="text-green-100 text-sm">Liderança de equipes de tecnologia, gerenciando prazos, orçamentos e recursos para entregar soluções de software com sucesso.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Análise de Negócios e Requisitos</h4>
                <p className="text-green-100 text-sm">Atuação como o elo entre a área técnica e os clientes ou usuários, traduzindo as necessidades do negócio em especificações claras para os desenvolvedores.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Infraestrutura e Administração de Banco de Dados</h4>
                <p className="text-green-100 text-sm">Gerenciamento da infraestrutura de TI e dos dados de uma empresa, garantindo segurança, disponibilidade e performance.</p>
              </div>
            </div>
          </div>

          {/* Por que escolher */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Por que este curso é <span className="text-green-600">atraente?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Visão Estratégica</h3>
              </div>
              <p className="text-gray-700">Você não aprende apenas a programar, mas a entender por que programar. O curso desenvolve uma visão sistêmica e gerencial essencial para cargos de liderança.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Alta Empregabilidade</h3>
              </div>
              <p className="text-gray-700">As empresas buscam ativamente por profissionais que entendam tanto de tecnologia quanto de processos de negócio, e o egresso de SI é a personificação desse perfil.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Curso Noturno</h3>
              </div>
              <p className="text-gray-700">A oferta noturna é um incentivo imenso, possibilitando a inserção precoce no mercado de trabalho e a construção de uma carreira sólida antes mesmo da formatura.</p>
            </div>
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-soft text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">📞 Contato</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800">Site:</p>
                  <a href="https://bsi.ufba.br/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors">
                    bsi.ufba.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-800">E-mail:</p>
                  <a href="mailto:bsi@ufba.br" className="text-green-600 hover:text-green-800 transition-colors">
                    bsi@ufba.br
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

export default SistemasInformacao;