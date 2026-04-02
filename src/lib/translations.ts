export const LANGUAGE_OPTIONS = [
  {
    code: "pt-BR",
    shortLabel: "PT",
    fullLabel: "Português (Brasil)",
  },
  {
    code: "es",
    shortLabel: "ES",
    fullLabel: "Español",
  },
  {
    code: "en",
    shortLabel: "EN",
    fullLabel: "English",
  },
] as const;

export type Language = (typeof LANGUAGE_OPTIONS)[number]["code"];

export const DEFAULT_LANGUAGE: Language = "pt-BR";

export interface NavItem {
  label: string;
  href: string;
}

export interface SearchPlatformCopy {
  name: string;
  description: string;
  icon: string;
  glow: string;
}

export interface SolutionFeatureCopy {
  title: string;
  description: string;
}

export interface ExplorationItemCopy {
  id: number;
  title: string;
  image: string;
  href?: string;
}

export interface LandingCopy {
  metadata: {
    title: string;
  };
  nav: {
    backLabel: string;
    languageLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    themeToggleLabel: string;
    items: NavItem[];
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
  };
  search: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    platforms: SearchPlatformCopy[];
    footer: string;
  };
  mission: {
    paragraph1: string;
    paragraph2: string;
    imageAlt: string;
  };
  solution: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    features: SolutionFeatureCopy[];
  };
  explorations: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    placeholderLabel: string;
    openItemLabel: string;
    items: ExplorationItemCopy[];
  };
  contact: {
    ctaPrefix: string;
    ctaHighlight: string;
  };
  footer: {
    logoAlt: string;
    rightsText: string;
  };
}

const searchPlatformVisuals = [
  {
    name: "Codex",
    icon: "claude.png",
    glow: "radial-gradient(circle, rgba(61, 220, 151, 0.38) 0%, rgba(61, 220, 151, 0) 72%)",
  },
  {
    name: "Claude",
    icon: "chat.png",
    glow: "radial-gradient(circle, rgba(251, 146, 60, 0.38) 0%, rgba(251, 146, 60, 0) 72%)",
  },
  {
    name: "Google AI",
    icon: "google.png",
    glow: "radial-gradient(circle, rgba(148, 163, 184, 0.34) 0%, rgba(148, 163, 184, 0) 72%)",
  },
] as const;

const explorationMedia = [
  {
    id: 1,
    image: "/level.png",
    href: "https://danihono.github.io/LEVEL/",
  },
  {
    id: 2,
    image: "/advisor.png",
    href: "https://www.followadvisor.com/",
  },
  {
    id: 3,
    image: "/labs.png",
    href: "https://www.followlabs.com.br/",
  },
  {
    id: 4,
    image: "/travessia.png",
    href: "https://travessia.solutions/travessia.html",
  },
  {
    id: 5,
    image: "/explorations/wave.jpeg",
  },
  {
    id: 6,
    image: "/explorations/cubes.jpeg",
  },
] as const;

export const landingCopy: Record<Language, LandingCopy> = {
  "pt-BR": {
    metadata: {
      title: "Hono AI",
    },
    nav: {
      backLabel: "Voltar",
      languageLabel: "Idioma",
      openMenuLabel: "Abrir menu",
      closeMenuLabel: "Fechar menu",
      themeToggleLabel: "Alternar tema da barra",
      items: [
        { label: "Início", href: "#home" },
        { label: "Como funciona", href: "#how-it-works" },
        { label: "Filosofia", href: "#philosophy" },
        { label: "Solução", href: "#solution" },
      ],
    },
    hero: {
      titlePrefix: "Encontre",
      titleHighlight: "inspiração",
      titleSuffix: "com a gente.",
      description:
        "Acompanhe nosso feed para receber novidades relevantes, atualizações sobre tecnologia e uma jornada compartilhada com mais profundidade e direção.",
    },
    search: {
      titlePrefix: "A forma de buscar",
      titleHighlight: "mudou.",
      titleSuffix: "Sua marca acompanhou?",
      description:
        "As pessoas não pesquisam mais só por palavras-chave. Elas fazem perguntas que Codex, Claude e Google respondem. As marcas que crescem hoje são as que aparecem nessas respostas.",
      platforms: [
        {
          ...searchPlatformVisuals[0],
          description:
            "Ganha espaço quando seu conteúdo é estruturado, confiável e claro o suficiente para ser reaproveitado dentro das respostas.",
        },
        {
          ...searchPlatformVisuals[1],
          description:
            "Valoriza explicações bem pensadas, contexto forte e páginas que realmente ajudem pessoas reais.",
        },
        {
          ...searchPlatformVisuals[2],
          description:
            "Destaca páginas que respondem à pergunta completa com autoridade, profundidade e clareza.",
        },
      ],
      footer: "Se você não responde às perguntas, outra marca responde por você.",
    },
    mission: {
      paragraph1:
        "Estamos construindo um espaço onde curiosidade encontra clareza, leitores encontram profundidade e cada newsletter vira uma conversa que vale a pena acompanhar.",
      paragraph2:
        "Uma plataforma onde conteúdo, comunidade e insight caminham juntos, com menos ruído, menos fricção e mais significado para todo mundo.",
      imageAlt: "Ilustração abstrata com blocos empilhados",
    },
    solution: {
      eyebrow: "SOLUÇÃO",
      titlePrefix: "A plataforma para conteúdo",
      titleHighlight: "relevante",
      titleSuffix: "de verdade",
      features: [
        {
          title: "Feed Curado",
          description:
            "Um fluxo personalizado de conteúdo de alta qualidade alinhado aos seus interesses.",
        },
        {
          title: "Ferramentas para autores",
          description:
            "Recursos de publicação criados para dar clareza, consistência e alcance.",
        },
        {
          title: "Comunidade",
          description:
            "Conversas significativas que vão além da caixa de entrada.",
        },
        {
          title: "Distribuição Inteligente",
          description:
            "Sistemas que ajudam o seu melhor trabalho a encontrar a audiência certa.",
        },
      ],
    },
    explorations: {
      eyebrow: "EXPLORAÇÕES",
      titlePrefix: "Laboratório",
      titleHighlight: "visual",
      description:
        "Um espaço para experimentos criativos, estudos de movimento e explorações visuais.",
      placeholderLabel: "Prévia visual",
      openItemLabel: "Abrir",
      items: [
        { ...explorationMedia[0], title: "Planetas Celestiais" },
        { ...explorationMedia[1], title: "Estudo em ASCII" },
        { ...explorationMedia[2], title: "Fumaça Atmosférica" },
        { ...explorationMedia[3], title: "Cilindro Abstrato" },
        { ...explorationMedia[4], title: "Ondas Orgânicas" },
        { ...explorationMedia[5], title: "Cubos Geométricos" },
      ],
    },
    contact: {
      ctaPrefix: "Fale com nosso",
      ctaHighlight: "time",
    },
    footer: {
      logoAlt: "Logo da HONO AI",
      rightsText: "Copyright 2026 HONO AI. Todos os direitos reservados.",
    },
  },
  en: {
    metadata: {
      title: "Hono AI",
    },
    nav: {
      backLabel: "Back",
      languageLabel: "Language",
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      themeToggleLabel: "Toggle toolbar theme",
      items: [
        { label: "Home", href: "#home" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Philosophy", href: "#philosophy" },
        { label: "Solution", href: "#solution" },
      ],
    },
    hero: {
      titlePrefix: "Find",
      titleHighlight: "inspiration",
      titleSuffix: "with us.",
      description:
        "Follow our feed for meaningful updates, technology news, and a shared journey with more depth and direction.",
    },
    search: {
      titlePrefix: "The way people search",
      titleHighlight: "has changed.",
      titleSuffix: "Has your brand kept up?",
      description:
        "People no longer search with keywords alone. They ask questions that Codex, Claude, and Google answer. The brands growing today are the ones appearing inside those answers.",
      platforms: [
        {
          ...searchPlatformVisuals[0],
          description:
            "Shows up when your content is structured, trustworthy, and clear enough to be reused inside answers.",
        },
        {
          ...searchPlatformVisuals[1],
          description:
            "Rewards thoughtful explanations, strong context, and pages that feel genuinely useful to real people.",
        },
        {
          ...searchPlatformVisuals[2],
          description:
            "Highlights pages that answer the full question directly, with authority, depth, and clarity.",
        },
      ],
      footer: "If you do not answer the questions, another brand will.",
    },
    mission: {
      paragraph1:
        "We are building a space where curiosity meets clarity, readers find depth, and every newsletter becomes a conversation worth following.",
      paragraph2:
        "A platform where content, community, and insight move together with less noise, less friction, and more meaning for everyone involved.",
      imageAlt: "Abstract illustration with stacked blocks",
    },
    solution: {
      eyebrow: "SOLUTION",
      titlePrefix: "The platform for",
      titleHighlight: "meaningful",
      titleSuffix: "content",
      features: [
        {
          title: "Curated Feed",
          description:
            "A personalized stream of high-quality content tailored to your interests.",
        },
        {
          title: "Writer Tools",
          description:
            "Publishing tools designed to bring more clarity, consistency, and reach.",
        },
        {
          title: "Community",
          description:
            "Meaningful conversations that go beyond the inbox.",
        },
        {
          title: "Smart Distribution",
          description:
            "Systems that help your best work reach the right audience.",
        },
      ],
    },
    explorations: {
      eyebrow: "EXPLORATIONS",
      titlePrefix: "Visual",
      titleHighlight: "playground",
      description:
        "A space for creative experiments, motion studies, and visual explorations.",
      placeholderLabel: "Visual placeholder",
      openItemLabel: "Open",
      items: [
        { ...explorationMedia[0], title: "Celestial Planets" },
        { ...explorationMedia[1], title: "ASCII Art Study" },
        { ...explorationMedia[2], title: "Atmospheric Smoke" },
        { ...explorationMedia[3], title: "Abstract Cylinder" },
        { ...explorationMedia[4], title: "Organic Waves" },
        { ...explorationMedia[5], title: "Geometric Cubes" },
      ],
    },
    contact: {
      ctaPrefix: "Talk with our",
      ctaHighlight: "team",
    },
    footer: {
      logoAlt: "HONO AI logo",
      rightsText: "Copyright 2026 HONO AI. All rights reserved.",
    },
  },
  es: {
    metadata: {
      title: "Hono AI",
    },
    nav: {
      backLabel: "Volver",
      languageLabel: "Idioma",
      openMenuLabel: "Abrir menú",
      closeMenuLabel: "Cerrar menú",
      themeToggleLabel: "Cambiar tema de la barra",
      items: [
        { label: "Inicio", href: "#home" },
        { label: "Cómo funciona", href: "#how-it-works" },
        { label: "Filosofía", href: "#philosophy" },
        { label: "Solución", href: "#solution" },
      ],
    },
    hero: {
      titlePrefix: "Encuentra",
      titleHighlight: "inspiración",
      titleSuffix: "con nosotros.",
      description:
        "Sigue nuestro feed para recibir novedades relevantes, noticias sobre tecnología y un camino compartido con más profundidad y dirección.",
    },
    search: {
      titlePrefix: "La forma de buscar",
      titleHighlight: "cambió.",
      titleSuffix: "¿Tu marca acompañó el cambio?",
      description:
        "Las personas ya no buscan solo con palabras clave. Hacen preguntas que Codex, Claude y Google responden. Las marcas que crecen hoy son las que aparecen dentro de esas respuestas.",
      platforms: [
        {
          ...searchPlatformVisuals[0],
          description:
            "Gana espacio cuando tu contenido está estructurado, es confiable y lo bastante claro para reutilizarse dentro de las respuestas.",
        },
        {
          ...searchPlatformVisuals[1],
          description:
            "Valora explicaciones bien pensadas, contexto sólido y páginas que realmente ayuden a personas reales.",
        },
        {
          ...searchPlatformVisuals[2],
          description:
            "Destaca páginas que responden la pregunta completa con autoridad, profundidad y claridad.",
        },
      ],
      footer: "Si no respondes las preguntas, otra marca lo hará.",
    },
    mission: {
      paragraph1:
        "Estamos construyendo un espacio donde la curiosidad se encuentra con la claridad, los lectores encuentran profundidad y cada newsletter se vuelve una conversación que vale la pena seguir.",
      paragraph2:
        "Una plataforma donde contenido, comunidad e insight avanzan juntos, con menos ruido, menos fricción y más significado para todos.",
      imageAlt: "Ilustración abstracta con bloques apilados",
    },
    solution: {
      eyebrow: "SOLUCIÓN",
      titlePrefix: "La plataforma para contenido",
      titleHighlight: "relevante",
      titleSuffix: "de verdad",
      features: [
        {
          title: "Feed Curado",
          description:
            "Un flujo personalizado de contenido de alta calidad alineado con tus intereses.",
        },
        {
          title: "Herramientas para autores",
          description:
            "Recursos de publicación creados para aportar claridad, consistencia y alcance.",
        },
        {
          title: "Comunidad",
          description:
            "Conversaciones significativas que van más allá de la bandeja de entrada.",
        },
        {
          title: "Distribución Inteligente",
          description:
            "Sistemas que ayudan a que tu mejor trabajo encuentre a la audiencia correcta.",
        },
      ],
    },
    explorations: {
      eyebrow: "EXPLORACIONES",
      titlePrefix: "Laboratorio",
      titleHighlight: "visual",
      description:
        "Un espacio para experimentos creativos, estudios de movimiento y exploraciones visuales.",
      placeholderLabel: "Vista previa visual",
      openItemLabel: "Abrir",
      items: [
        { ...explorationMedia[0], title: "Planetas Celestiales" },
        { ...explorationMedia[1], title: "Estudio ASCII" },
        { ...explorationMedia[2], title: "Humo Atmosférico" },
        { ...explorationMedia[3], title: "Cilindro Abstracto" },
        { ...explorationMedia[4], title: "Ondas Orgânicas" },
        { ...explorationMedia[5], title: "Cubos Geométricos" },
      ],
    },
    contact: {
      ctaPrefix: "Habla con nuestro",
      ctaHighlight: "equipo",
    },
    footer: {
      logoAlt: "Logo de HONO AI",
      rightsText: "Copyright 2026 HONO AI. Todos los derechos reservados.",
    },
  },
};

export function isLanguage(value: string): value is Language {
  return Object.prototype.hasOwnProperty.call(landingCopy, value);
}