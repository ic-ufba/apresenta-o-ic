import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Building, Users, BookOpen, Lightbulb, Trophy, Globe, ExternalLink, CircleCheckBig, GraduationCap, Code, Smartphone, Bot, Palette, Shield, ChartColumn, Laptop, Briefcase, FlaskConical, MapPin, Phone, Instagram } from "lucide-react";

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
              Instituto de Computação (IC) da <span className="text-ufba-blue">UFBA</span>
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

          {/* Vivência Estudantil */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Vivência <span className="text-ufba-blue">Estudantil</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Vida Estudantil no IC/UFBA: Mais que um Curso, uma Experiência. A jornada no Instituto de Computação vai muito além das salas de aula. A vivência universitária é enriquecida por uma série de iniciativas que conectam os estudantes, promovem o aprendizado prático e abrem portas para o mercado de trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-ufba-blue" />
                <h3 className="text-xl font-bold text-gray-800">Representação Estudantil</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm mb-4">A Força Coletiva dos Alunos - Os estudantes do IC são representados por suas entidades de base:</p>
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
                <p className="text-sm mb-2">A Experiência do Mercado na Universidade:</p>
                <p className="text-sm"><strong>InfoJr UFBA:</strong> Focada no desenvolvimento de software e soluções digitais como sites, sistemas web e aplicativos.</p>
                <p className="text-sm"><strong>TITAN:</strong> Atua em projetos que integram hardware e software, como automação, sistemas embarcados e Internet das Coisas (IoT).</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <FlaskConical className="w-8 h-8 text-ufba-purple" />
                <h3 className="text-xl font-bold text-gray-800">Projetos de Extensão</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm mb-2">Conectando a Universidade e a Sociedade:</p>
                <p className="text-sm"><strong>Onda Digital:</strong> Programa permanente de inclusão sociodigital na Bahia desde 2004.</p>
                <p className="text-sm"><strong>PROFCOMP:</strong> Formação de professores de Computação para educação básica.</p>
                <p className="text-sm"><strong>GruPro:</strong> Maratonas de programação e programação competitiva.</p>
              </div>
            </div>
          </div>

          {/* Grupos de Pesquisa */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Grupos de <span className="text-ufba-purple">Pesquisa</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Na Fronteira do Conhecimento - O IC/UFBA é um centro de pesquisa pulsante, abrigando múltiplos laboratórios e grupos dedicados a investigar os mais diversos ramos da Computação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Insert - Infraestrutura e Sistemas para Redes e Telecom",
              "Urban Computing Lab - Computação urbana e cidades inteligentes",
              "ToLOCA - Teoria da Computação, Lógica, Otimização, Combinatória e Algoritmos",
              "Aries Lab - Applied Research in Software Engineering",
              "SPIDeLab - Semio-Participatory Interaction Design Research Laboratory",
              "Recommender Systems Research - Sistemas de Recomendação",
              "CEManTIKA - Semântica computacional e processamento de conhecimento",
              "RISE Labs - Laboratório de pesquisa em Engenharia de Software",
              "STER - Sistemas em Tempo Real",
              "SoftVis - Grupo de Visualização de Software",
              "FORMAS - Centro de Pesquisa em Dados e Linguagem Natural",
              "Gaudi - Grupo de Algoritmos e Computação Distribuída",
              "CInO - Computational Intelligence and Optimization Research Lab",
              "GRADE - Grupo de Pesquisa em Redes de Alto Desempenho",
              "Onda Digital - Informática, Educação e Sociedade",
              "LES - Laboratório de Engenharia de Software",
              "LASID - Laboratório de Sistemas Distribuídos",
              "MEFES - Métodos Formais em Engenharia de Software",
              "IvisionLab - Intelligent Vision Research Lab",
              "WISER - Web, Internet and Intelligent Systems Research Group",
              "Software Design and Evolution Group - aSide @ UFBA"
            ].map((group, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
                <h4 className="text-sm font-semibold text-gray-800 leading-tight">{group}</h4>
              </div>
            ))}
          </div>

          {/* Extensão */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-ufba-green">Extensão</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Conectando a Universidade e a Sociedade - Os projetos de extensão do Instituto de Computação são a ponte que leva o conhecimento, a pesquisa e a inovação desenvolvidos no ambiente acadêmico para a comunidade externa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Programa Onda Digital</h3>
              <p className="text-gray-700 text-sm">Criado em 2004, é um programa permanente de extensão que visa contribuir com a inclusão sociodigital na Bahia. Coordenado pela Profª. Débora Abdalla, envolve a Universidade em ações educativas e de difusão da filosofia do Software Livre, atuando diretamente em comunidades para democratizar o acesso e o conhecimento tecnológico.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">PROFCOMP</h3>
              <p className="text-gray-700 text-sm">Programa de Ações Pedagógicas para Formação de Professores de Computação - Focado no pilar educacional, visa suprir uma demanda crítica da sociedade: a formação de qualidade para professores de computação. Desenvolvido pelo grupo Onda Digital, contribui para a formação inicial e continuada de educadores da educação básica.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Maratonas de Programação (GruPro)</h3>
              <p className="text-gray-700 text-sm">O GruPro é o grupo formado por professores e estudantes apaixonados por programação competitiva. A iniciativa busca inserir a cultura de maratonas de programação no dia a dia dos cursos de graduação, aprimorando o raciocínio lógico e a habilidade de resolução de problemas dos estudantes.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Projeto Tomorrow</h3>
              <p className="text-gray-700 text-sm">Em uma parceria com a Positivo, este projeto de extensão tem como missão democratizar o acesso a conhecimentos de ponta em computação. A iniciativa oferece cursos gratuitos, abertos e mensais sobre temas atuais como programação, inteligência artificial e cibersegurança.</p>
            </div>
          </div>

          {/* Pós-graduação */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-ufba-purple">Pós-Graduação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Aprofundando o Conhecimento - Para os estudantes e profissionais que desejam ir além da graduação, o Instituto de Computação oferece múltiplos caminhos para aprofundar a formação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Mestrado e Doutorado (Stricto Sensu)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold mb-2">PGCOMP - Programa de Pós-Graduação em Ciência da Computação</h4>
                  <p className="text-indigo-100 text-sm mb-2"><strong>Conceito CAPES:</strong> 4 | <strong>Criação:</strong> 2014</p>
                  <p className="text-indigo-100 text-sm">Linhas de Pesquisa: Computação Aplicada, Engenharia de Software e Sistemas Computacionais.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">PPGM - Programa de Pós-graduação em Mecatrônica</h4>
                  <p className="text-purple-100 text-sm">Iniciativa interdisciplinar robusta, coordenada em conjunto pelo IC e pela Escola Politécnica. Ideal para aprofundar conhecimentos na intersecção entre mecânica, eletrônica e computação.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Especialização e Residência em TI (Lato Sensu)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold mb-2">Residência em TI - Projetos para o Judiciário Federal</h4>
                  <p className="text-green-100 text-sm">Curso de Pós-graduação Lato Sensu com foco prático, voltada para a formação de recursos humanos com alto grau de especialização em desenvolvimento de software para a Seção Judiciária da Bahia (SJBA).</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Residência em TI - Foco no Setor Público (TRE/BA)</h4>
                  <p className="text-teal-100 text-sm">Curso de Pós-Graduação Lato Sensu para formar especialistas em desenvolvimento de software para o setor público, com foco no Tribunal Regional Eleitoral da Bahia (TRE/BA).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que entrar na universidade */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Por que entrar na <span className="text-ufba-blue">universidade?</span>
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
              O que você pode fazer com <span className="text-ufba-green">Computação?</span>
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
              Cursos que fazem a <span className="text-ufba-purple">diferença</span>
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
            <h2 className="text-3xl font-bold mb-4">Faça parte do futuro.</h2>
            <p className="text-xl text-gray-300">O próximo nome da Computação pode ser o seu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <MapPin className="w-5 h-5 text-ufba-blue" />
                <h3 className="text-lg font-bold">Local</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Instituto de Computação (IC/UFBA)<br />
                Av. Milton Santos - Ondina<br />
                Salvador - BA, 40170-110
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center gap-3 justify-center mb-4">
                <Phone className="w-5 h-5 text-ufba-green" />
                <h3 className="text-lg font-bold">Contato</h3>
              </div>
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
              <div className="flex items-center gap-3 justify-center md:justify-end mb-4">
                <Instagram className="w-5 h-5 text-ufba-purple" />
                <h3 className="text-lg font-bold">Instagram</h3>
              </div>
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
              © 2025 Instituto de Computação - UFBA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;