type NavigationItem = {
  label: string;
  href: `#${string}`;
};

type SkillGroup = {
  title: string;
  technologies: readonly string[];
};

export const navigation = [
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const satisfies readonly NavigationItem[];

export const profileLinks = {
  github: "https://github.com/JopoVR",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3ovvrezende/",
} as const;

export const project = {
  type: "TCC · UNIP · Projeto em equipe",
  name: "Otto Finance",
  description:
    "Protótipo de gestão financeira pessoal que permite registrar receitas e despesas por mensagens no WhatsApp e acompanhar transações, faturas, metas e orçamentos em um painel web.",
  contribution:
    "Atuei no desenvolvimento das rotas da API, do banco de dados e da autenticação dos usuários, em colaboração com a equipe.",
  technicalHighlight:
    "Autenticação por código de uso único enviado pelo WhatsApp e gerenciamento de sessões com JWT em cookies HttpOnly.",
  technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
  repository: "https://github.com/JopoVR/OttoFinance",
  originalRepository: "https://github.com/PedroBigossi/OttoFinance",
} as const;

export const skillGroups = [
  {
    title: "Backend e dados",
    technologies: ["Python", "SQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend",
    technologies: ["JavaScript", "TypeScript", "HTML", "CSS", "React"],
  },
  {
    title: "Ferramentas e análise",
    technologies: ["Git", "GitHub", "Power BI"],
  },
] as const satisfies readonly SkillGroup[];
