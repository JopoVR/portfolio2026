import { navigation, profileLinks, project, skillGroups } from "@/content/portfolio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.brand} href="#inicio" aria-label="João Rezende, início">
            <span className={styles.brandMark} aria-hidden="true">JR</span>
            <span>João Rezende</span>
          </a>

          <nav aria-label="Navegação principal">
            <ul className={styles.navigation}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                Portfólio / Desenvolvimento
              </p>
              <h1 id="hero-title">João Rezende<span className={styles.titleDot}>.</span></h1>
              <p className={styles.heroRole}>Backend <span>&amp;</span> Full Stack</p>
              <p className={styles.heroDescription}>
                Estudante de Ciência da Computação e estagiário na Embraer. Tenho
                experiência em automação de processos, desenvolvimento backend e
                dados, e busco uma oportunidade como Desenvolvedor Júnior.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#projetos">
                  Ver projeto <span aria-hidden="true">↗</span>
                </a>
                <a className={styles.textLink} href={profileLinks.linkedin}>
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className={styles.heroArtwork} aria-hidden="true">
              <div className={styles.artworkTop}>
                <span>João Rezende</span>
                <span>Portfólio pessoal</span>
              </div>
              <div className={styles.artworkMonogram}>JR</div>
              <div className={styles.artworkBottom}>
                <span>Desenvolvimento<br />Backend &amp; Full Stack</span>
                <span className={styles.artworkCross}>+</span>
              </div>
            </div>
          </div>
          <div className={`${styles.container} ${styles.heroFoot}`}>
            <span>Construindo soluções com código e dados</span>
            <a href="#projetos">Conheça meu trabalho <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className={`${styles.section} ${styles.projectsSection}`} id="projetos" aria-labelledby="projects-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionLabel}><span>01</span> / Projetos</p>
                <h2 id="projects-title">Trabalho em destaque<span className={styles.titleDot}>.</span></h2>
              </div>
              <p>Uma seleção do que venho construindo em equipe.</p>
            </div>

            <article className={styles.project}>
              <div className={styles.projectCopy}>
                <p className={styles.projectType}>{project.type}</p>
                <h3>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectDetails}>
                  <div className={styles.projectDetail}>
                    <h4>Minha contribuição</h4>
                    <p>{project.contribution}</p>
                  </div>
                  <div className={styles.projectDetail}>
                    <h4>Destaque técnico</h4>
                    <p>{project.technicalHighlight}</p>
                  </div>
                </div>
                <ul className={styles.technologyList} aria-label="Tecnologias do projeto">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className={styles.projectLinks}>
                  <a className={styles.projectLink} href={project.repository}>
                    Ver repositório <span aria-hidden="true">↗</span>
                  </a>
                  <a className={styles.projectCredit} href={project.originalRepository}>
                    Desenvolvido em equipe · Repositório original
                  </a>
                </div>
              </div>
              <div className={styles.projectArtwork} aria-hidden="true">
                <div className={styles.projectArtworkMeta}>
                  <span>Projeto em destaque</span>
                  <span>01 / 01</span>
                </div>
                <span className={styles.projectArtworkLetter}>O<span>.</span></span>
                <div className={styles.projectArtworkName}>
                  <span>Otto<br />Finance</span>
                  <span className={styles.projectArtworkArrow}>↗</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section} id="experiencia" aria-labelledby="experience-title">
          <div className={`${styles.container} ${styles.splitSection}`}>
            <div>
              <p className={styles.sectionLabel}><span>02</span> / Trajetória</p>
              <h2 id="experience-title">Experiência<span className={styles.titleDot}>.</span></h2>
              <p className={styles.sectionIntro}>Aprendizado na prática, com atenção aos detalhes.</p>
            </div>
            <div className={styles.experience}>
              <p className={styles.experienceOverline}>Estágio</p>
              <h3>Embraer</h3>
              <p>Atividades relacionadas a:</p>
              <ul className={styles.experienceList}>
                <li>Automação de processos</li>
                <li>Desenvolvimento backend</li>
                <li>Modelagem de dados</li>
                <li>Dashboards operacionais</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.aboutSection}`} id="sobre" aria-labelledby="about-title">
          <div className={`${styles.container} ${styles.splitSection}`}>
            <div className={styles.aboutCopy}>
              <p className={styles.sectionLabel}><span>03</span> / Sobre</p>
              <h2 id="about-title">Um pouco sobre mim<span className={styles.titleDot}>.</span></h2>
              <p>
                Estudante de Ciência da Computação na UNIP, com conclusão prevista
                para dezembro de 2026.
              </p>
              <p>
                Busco uma oportunidade como Desenvolvedor Júnior em Backend ou
                Full Stack.
              </p>
            </div>
            <div className={styles.skills}>
              <p className={styles.skillsHeading}>Tecnologias e ferramentas</p>
              {skillGroups.map((group) => (
                <div className={styles.skillGroup} key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.technologies.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="contato" aria-labelledby="contact-title">
          <div className={`${styles.container} ${styles.contactInner}`}>
            <div>
              <p className={styles.contactLabel}><span>04</span> / Contato</p>
              <h2 id="contact-title">Vamos conversar<span>.</span></h2>
              <p>Aberto a conversas sobre oportunidades em desenvolvimento.</p>
            </div>
            <div className={styles.contactLinks}>
              <a href={profileLinks.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={profileLinks.github}>GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <span>João Rezende<span className={styles.titleDot}>.</span></span>
          <span>Desenvolvimento Backend &amp; Full Stack</span>
          <a href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
