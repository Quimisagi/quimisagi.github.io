// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'quimisagi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['MCV-Univalle/Rivit', 'Quimisagi/Walrus-Budget', 'Quimisagi/Nevera', 'Quimisagi/AnimationClipPicker',], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
    },
  },
  seo: {
    title: 'Portfolio of David Crespo',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'david-crepo',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '09063426873',
    email: 'quimisagi@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C#',
    'JavaScript',
    'Vue',
    'React',
    'React Native',
    'Github',
    'Bash',
    'Linux',
  ],
  experiences: [
    {
      company: 'Muxbit',
      position: 'System Engineer',
      from: 'February 2022',
      to: 'December 2023',
      companyLink: 'https://www.muxbit.com/https://www.muxbit.com/',
    },
  ],
  certifications: [
    {
    },
  ],
  educations: [
    {
      institution: 'Valle University',
      degree: 'Bachelor of Systems Engineering',
      from: '2016',
      to: '2022',
    },
    {
      institution: 'University of Aizu',
      degree: 'Master of Computer Science',
      from: '2024',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Rivit: A Digital Game to Cognitively Train and Entertain Heart Failure Patients',
      conferenceName: 'HCI-COLLAB 2020',
      journalName: 'Human-Computer Interaction',
      authors: 'David Crespo, Melissa Fuentes, Edwin Gamboa, Kevin Franco, Kevin Domínguez & Maria Trujillo',
      link: 'https://doi.org/10.1007/978-3-030-66919-5_23',
      description:
        'People with heart failure tend to develop cognitive impairments, anxiety and constant boredom due to the time they have to wait to get surgery while being hospitalised. Serious games may assist these in improving their cognitive abilities and get distracted while waiting for surgery. In this paper, we present Rivit, a collection mini-games aimed at improving cognition and mood of heart failure patients, which is still under development. We present the current state of the game and a preliminary user experience evaluation. The aim of this evaluation is to identify the strengths and weaknesses of Rivit so that it can be tested with real patients at a later stage. Although the evaluation was not conducted with real heart failure patients, we found that elderly people may need more effort than young people to understand game goals. Our work may serve as a basis for developers of games aimed at heart failure patients during early development stages.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'acid',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
