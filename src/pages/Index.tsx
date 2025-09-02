import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Building, Users, BookOpen, Lightbulb, Trophy, Globe, ExternalLink, CircleCheckBig, GraduationCap, Code, Smartphone, Bot, Palette, Shield, ChartColumn, Laptop, Briefcase, FlaskConical } from "lucide-react";

const Index = () => {
  const scrollToCourses = () => {
    document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-soft">
            <Sparkles className="w-5 h-5 text-ufba-purple" />
            <span className="text-sm font-medium text-gray-800">Bem-vindo ao Instituto de Computação da UFBA!</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-ufba-blue via-ufba-purple to-ufba-green bg-clip-text text-transparent leading-tight">
            Entre no mundo que transforma o presente
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
            e constrói o futuro: a <span className="text-ufba-blue">Computação!</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Descubra como transformar ideias em tecnologia, criar soluções para problemas reais e desenvolver habilidades que estão entre as <strong>mais procuradas do mercado</strong> no Brasil e no mundo!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToCourses}
              className="px-8 py-4 text-lg"
            >
              <span className="flex items-center gap-2">
                Explore os Cursos
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            
            <a 
              href="https://www.ufba.br/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero-outline" size="lg">
                Saiba Mais sobre a UFBA
              </Button>
            </a>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-ufba-blue mb-2">3</div>
              <div className="text-sm text-gray-600">Cursos de Graduação</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-ufba-purple mb-2">50+</div>
              <div className="text-sm text-gray-600">Anos de Tradição</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-ufba-green mb-2">100%</div>
              <div className="text-sm text-gray-600">Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instituto Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🏛️ Instituto de Computação (IC) da <span className="text-ufba-blue">UFBA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-ufba-blue" />
                <h3 className="text-2xl font-bold text-gray-800">História</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><strong>Criação oficial:</strong> 18 de junho de 2021, pela Resolução 05/2021 do Conselho Universitário da UFBA.</p>
                <p><strong>Origem:</strong> O IC surgiu a partir do Departamento de Ciência da Computação (DCC), que fazia parte do Instituto de Matemática e Estatística (IME). O DCC foi institucionalizado em 1968, sendo um dos pioneiros da área de Computação no Brasil.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-ufba-purple" />
                <h3 className="text-2xl font-bold text-gray-800">Composição Atual</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>O IC é composto por dois departamentos:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Departamento de Ciência da Computação (DCC)</li>
                  <li>Departamento de Computação Interdisciplinar (DCI)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cursos de Graduação */}
          <div className="bg-gradient-primary text-white p-8 rounded-3xl mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">🎓 Cursos de Graduação</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Bacharelado em Ciência da Computação (BCC)</h4>
                <p className="text-blue-100 text-sm mb-2"><strong>Criação:</strong> 2010</p>
                <p className="text-blue-100 text-sm">Formar profissionais com sólida base científica e tecnológica, capazes de projetar, desenvolver e avaliar sistemas computacionais complexos, atuando com competência em pesquisa, inovação e resolução de problemas nas mais diversas áreas da Computação.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Bacharelado em Sistemas de Informação (BSI)</h4>
                <p className="text-green-100 text-sm mb-2"><strong>Criação:</strong> 2010</p>
                <p className="text-green-100 text-sm">Formar profissionais capazes de planejar, organizar e gerenciar o processamento, armazenamento e recuperação de informações, atendendo às demandas do mercado de trabalho.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">Licenciatura em Computação (LC)</h4>
                <p className="text-purple-100 text-sm mb-2"><strong>Criação:</strong> 2010</p>
                <p className="text-purple-100 text-sm">Formar profissionais de educação com sólida formação em Computação e Informática, sendo educadores com domínio dos fundamentos da Computação e das metodologias de ensino, capazes de atuar de forma crítica, criativa e comprometida com a inclusão e a inovação no ensino.</p>
              </div>
            </div>
          </div>

          {/* Projetos e Pesquisas */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🧠 Projetos e <span className="text-ufba-purple">Pesquisas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-8 h-8 text-ufba-green" />
                <h3 className="text-2xl font-bold text-gray-800">InovaComp – Núcleo de Inovação</h3>
              </div>
              <p className="text-gray-700">Laboratório virtual que promove a experimentação e o desenvolvimento de sistemas, hardware e software. Ambiente ideal para estimular a criatividade, o trabalho em equipe e o empreendedorismo através de projetos de tecnologia da informação.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-ufba-orange" />
                <h3 className="text-2xl font-bold text-gray-800">Grupos de Pesquisa</h3>
              </div>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>ToLOCA:</strong> Teoria da Computação, Lógica, Otimização, Combinatória e Algoritmos</p>
                <p><strong>iVisionLab:</strong> Percepção de Máquina e Computação Gráfica</p>
                <p><strong>FORMAS:</strong> Formalismos e Aplicações Semânticas</p>
                <p><strong>Gaudi:</strong> Algoritmos e Computação Distribuída</p>
                <p><strong>LASID:</strong> Laboratório de Sistemas Distribuídos</p>
                <p><strong>LES:</strong> Laboratório de Engenharia de Software</p>
              </div>
            </div>
          </div>

          {/* Vivência Estudantil */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🎒 Vivência <span className="text-ufba-blue">Estudantil</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A jornada no Instituto de Computação vai muito além das salas de aula. A vivência universitária é enriquecida por uma série de iniciativas que conectam os estudantes, promovem o aprendizado prático e abrem portas para o mercado de trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-ufba-blue" />
                <h3 className="text-xl font-bold text-gray-800">Representação Estudantil</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm mb-4">Os estudantes são representados por suas entidades de base:</p>
                <div className="space-y-2">
                  <p className="text-sm"><strong>CASI</strong> - Centro Acadêmico de Sistemas de Informação</p>
                  <p className="text-sm"><strong>CACC</strong> - Centro Acadêmico de Ciência da Computação</p>
                  <p className="text-sm"><strong>DALC</strong> - Diretório Acadêmico de Licenciatura em Computação</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Briefcase className="w-8 h-8 text-ufba-green" />
                <h3 className="text-xl font-bold text-gray-800">Empresas Juniores</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm"><strong>InfoJr UFBA:</strong> Desenvolvimento de software e soluções digitais como sites, sistemas web e aplicativos.</p>
                <p className="text-sm"><strong>TITAN:</strong> Projetos que integram hardware e software, automação, sistemas embarcados e IoT.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <FlaskConical className="w-8 h-8 text-ufba-purple" />
                <h3 className="text-xl font-bold text-gray-800">Projetos de Extensão</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm"><strong>Onda Digital:</strong> Programa de inclusão sociodigital na Bahia desde 2004.</p>
                <p className="text-sm"><strong>PROFCOMP:</strong> Formação de professores de Computação para educação básica.</p>
                <p className="text-sm"><strong>GruPro:</strong> Maratonas de programação e programação competitiva.</p>
              </div>
            </div>
          </div>

          {/* Prêmios */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-3xl mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">🏆 Prêmios e Reconhecimentos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2°</div>
                <div className="text-sm">Melhor Projeto de Inovação TicTalk 2023</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🥇</div>
                <div className="text-sm">Melhor Artigo SBCARS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🥇</div>
                <div className="text-sm">Melhor Artigo SBES</div>
              </div>
            </div>
          </div>

          {/* Pós-graduação */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-3xl mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">🎓 Pós-Graduação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">PGCOMP - Mestrado e Doutorado</h4>
                <p className="text-indigo-100 text-sm mb-2"><strong>Conceito CAPES:</strong> 4</p>
                <p className="text-indigo-100 text-sm">Programa de Pós-Graduação em Ciência da Computação com linhas em Computação Aplicada, Engenharia de Software e Sistemas Computacionais.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3">PPGM - Mecatrônica</h4>
                <p className="text-purple-100 text-sm mb-2"><strong>Modalidade:</strong> Mestrado e Doutorado</p>
                <p className="text-purple-100 text-sm">Programa interdisciplinar coordenado pelo IC e Escola Politécnica, na intersecção entre mecânica, eletrônica e computação.</p>
              </div>
            </div>
          </div>

          {/* Cooperação */}
          <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🌐 Cooperação e Intercâmbio</h3>
            <p className="text-gray-700 max-w-4xl mx-auto">O Instituto mantém parcerias com instituições nacionais e internacionais, promovendo projetos conjuntos de pesquisa e desenvolvimento, intercâmbio de docentes e estudantes, e participação em programas de doutorado sanduíche.</p>
          </div>
        </div>
      </section>

      {/* Por que entrar na universidade */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🎓 Por que entrar na <span className="text-ufba-blue">universidade?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entrar na UFBA é mais do que fazer um curso: é fazer parte de uma comunidade que pesquisa, cria, compartilha e <strong>transforma vidas através do conhecimento</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CircleCheckBig, text: "Ensino gratuito e de qualidade" },
              { icon: Users, text: "Professores especialistas e atuantes no mercado" },
              { icon: BookOpen, text: "Contato com projetos reais desde o início" },
              { icon: Lightbulb, text: "Oportunidades de pesquisa, extensão e empreendedorismo" },
              { icon: Trophy, text: "Programas de bolsa, apoio estudantil e intercâmbio" },
              { icon: Globe, text: "Estudar com colegas de todo o Brasil em ambiente diverso" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <item.icon className="w-8 h-8 text-ufba-green" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você pode fazer com Computação */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🚀 O que você pode fazer com <span className="text-ufba-green">Computação?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A tecnologia está em todos os lugares — e quem domina Computação pode trabalhar em várias áreas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, text: "Desenvolvimento de jogos e apps", color: "text-ufba-blue" },
              { icon: Bot, text: "Inteligência Artificial e Robôs", color: "text-ufba-purple" },
              { icon: Palette, text: "Design de sistemas e UX/UI", color: "text-ufba-pink" },
              { icon: Shield, text: "Segurança da Informação", color: "text-red-500" },
              { icon: ChartColumn, text: "Big Data e Ciência de Dados", color: "text-ufba-green" },
              { icon: Laptop, text: "Educação com tecnologia", color: "text-indigo-500" },
              { icon: Briefcase, text: "Empreendedorismo digital", color: "text-ufba-orange" },
              { icon: FlaskConical, text: "Pesquisa e inovação científica", color: "text-cyan-500" }
            ].map((item, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <item.icon className={`w-12 h-12 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight">{item.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="courses-section" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🧠 Cursos que fazem a <span className="text-ufba-purple">diferença</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              No Instituto de Computação da UFBA, você pode escolher entre <strong>três cursos incríveis</strong>, com perfis e possibilidades diferentes, mas todos com um ponto em comum: formar profissionais preparados para o futuro!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 shadow-medium">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">Ciência da Computação</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Ideal para quem quer mergulhar no mundo da tecnologia, entender como funcionam os sistemas por trás de tudo e criar inovações com código, lógica e criatividade.</p>
              <a href="/ciencia-computacao">
                <Button variant="course" className="w-full">
                  Conhecer Curso
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-6 shadow-medium">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">Sistemas de Informação</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Une tecnologia e gestão, formando pessoas capazes de usar a computação para resolver problemas de empresas, negócios e organizações.</p>
              <a href="/sistemas-informacao">
                <Button variant="course-green" className="w-full">
                  Conhecer Curso
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 transform hover:-translate-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ufba-purple to-purple-700 rounded-2xl mb-6 shadow-medium">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">Licenciatura em Computação</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Para quem quer usar a tecnologia para transformar a educação e formar as próximas gerações com criatividade, inclusão e inovação.</p>
              <a href="/licenciatura-computacao">
                <Button variant="course-purple" className="w-full">
                  Conhecer Curso
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Links Úteis */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold mb-6 text-center">🔗 Links Úteis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { text: "Site Computação", url: "https://computacao.ufba.br/" },
                { text: "Ciência da Computação", url: "https://bcc.ufba.br/" },
                { text: "Sistemas de Informação", url: "https://bsi.ufba.br/" },
                { text: "Licenciatura em Computação", url: "https://licomp.ufba.br/" },
                { text: "Grupos de Pesquisa", url: "https://computacao.ufba.br/pt-br/grupos-de-pesquisa" },
                { text: "Tomorrow", url: "https://tomorrow.ufba.br/" },
                { text: "Grupos de Extensão", url: "https://computacao.ufba.br/pt-br/extensao" },
                { text: "Pós-graduação", url: "https://computacao.ufba.br/pt-br/sobre-pos-graduacao" },
                { text: "Guia do Estudante", url: "https://computacao.ufba.br/pt-br/guia-do-estudante" },
                { text: "Instagram Computação", url: "https://www.instagram.com/computacaoufba/" },
                { text: "Instagram DALC", url: "https://www.instagram.com/dalc.ufba/" },
                { text: "Instagram CACC", url: "https://www.instagram.com/cacc.ufba/" },
                { text: "Instagram CASI", url: "https://www.instagram.com/casiufba/" }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">✨ Faça parte do futuro.</h2>
            <p className="text-xl text-gray-300">O próximo nome da Computação pode ser o seu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">📍 Local</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Instituto de Computação (IC/UFBA)<br />
                Av. Milton Santos - Ondina<br />
                Salvador - BA, 40170-110
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-bold mb-4">📞 Contato</h3>
              <p className="text-gray-300 text-sm mb-2">(71) 3283-5750</p>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Site Oficial</span><br />
                  <a href="https://computacao.ufba.br/" target="_blank" rel="noopener noreferrer" className="text-ufba-blue hover:text-blue-300 transition-colors">
                    computacao.ufba.br
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-4">📱 Instagram</h3>
              <a 
                href="https://www.instagram.com/computacaoufba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ufba-purple hover:text-purple-300 transition-colors font-medium"
              >
                @computacaoufba
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Instituto de Computação - UFBA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;