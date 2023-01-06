// Navigation Bar SECTION
const navBar = {
  show: true,
  icons: [
    {
      image: "fa fa-file-pdf",
      label: "navbar.link.resume",
      labelDefault: "My Resume",
      url: "https://link.storjshare.io/juiaydem2hkexh7lh7pnqdkkurqa/portfolio%2Ffiles%2Fpdf.en.varnel.joseph.pdf?download=1",
    },
    {
      image: "fa-linkedin",
      label: "navbar.link.linkedin",
      labelDefault: "My Linkedin",
      url: "https://linkedin.com/in/varnel-j-62330a1a",
    },
  ]
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Varnel",
  middleName: "",
  lastName: "Joseph",
  message: "main.message",
  messageDefault: "I like challenges and empowering products with technology",
  icons: [
    {
      image: "fa fa-file-pdf",
      label: "main.link.resume",
      labelDefault: "My Resume",
      url: "https://link.storjshare.io/juiaydem2hkexh7lh7pnqdkkurqa/portfolio%2Ffiles%2Fpdf.en.varnel.joseph.pdf?download=1",
    },
    {
      image: "fa-linkedin",
      label: "main.link.linkedin",
      labelDefault: "My Linkedin",
      url: "https://linkedin.com/in/varnel-j-62330a1a",
    },

    // {
    //   image: "fa-github",
    //   url: "https://github.com/username",
    // },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/username",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/username/",
    // },
    // {
    //   image: "fa-linkedin",
    //   url: "https://www.linkedin.com/in/username/",
    // },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/username/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"instagramAccount",
//b) a link to an hosted image
//      i.e:profilePictureLink:"https://profile_picture_url",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/profile-picture.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://resume_url",

const about = {
  show: true,
  imageShow: false,
  // imageLink: require("../editable-stuff/profile-picture.png"),
  imageSize: 375,

  heading: 'about.heading',
  headingDefault: 'About me',
  message: {
    a: 'about.message',
    aDefault: `My name is Varnel Joseph. I believe in excellence. I have always dedicated myself, my talents and my creative abilities to assure the successful accomplishment of any organization I have worked for.
    From social media to moving companies, from startup to Nasdaq 100 Enterprise.
    I like challenges and I am looking for a position where I can continue to grow with the same work ethics.`
  },
  resume: "https://link.storjshare.io/juiaydem2hkexh7lh7pnqdkkurqa/portfolio%2Ffiles%2Fpdf.en.varnel.joseph.pdf?download=1",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: {
    i18nTag: 'projects.heading',
    i18nDefault: "Work, Academic & Side Projects",
  },
  message: {
    i18nTag:'projects.message',
    i18nDefault: ""
  },
  // gitHubUsername: "githubUsername", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
  projects: [
    {
      sitelogo: require('../assets/img/challengeprize.png'),
      name: {
        i18nTag: 'projects.challengeprize.name',
        i18nDefault: "Challengeprize"
      },
      description: {
        i18nTag: 'projects.challengeprize.description',
        i18nDefault: `
          Simple, Easy Board with Money, Rewards Prizes.
          Create, organize, manage, contests, competitions, challenges, 
          with or without admission fee, in public or privately. 
          Participants can enter either as 
          challenger, referee, or observer for fun and for money rewards.
        `
      },
      externalLink: true,
      external: {
        i18nTag: 'projects.challengeprize.external',
        i18nDefault: 'Challengeprize',
        url: "https://challengeprize.com/"
      },
      visit: {
        i18nTag: 'projects.visit-website',
        i18nDefault: "Visit website"
      },
      technologies: {
        showTechno: true,
        showValues: false,
        data: [
          {
            language: {
              i18nTag: 'projects.techno.node-js',
              i18nDefault: 'Node.js',
            },
            value: 92.8,
          },
          {
            language: {
              i18nTag: 'projects.techno.ffmpeg',
              i18nDefault: 'FFmpeg',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.multimedias-transcoder',
              i18nDefault: 'Multimedias Transcoding Queue',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.db-orm',
              i18nDefault: 'Custom DB/ORM',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.no-sql',
              i18nDefault: 'NoSql',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.telemetry-observability',
              i18nDefault: 'In-house Telemetry/Observability',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.multi-cloud-saas',
              i18nDefault: 'Multi-cloud Saas',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.queue-system',
              i18nDefault: 'Custom queue system',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.ansible',
              i18nDefault: 'Ansible',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.stripe',
              i18nDefault: 'Stripe',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.payment',
              i18nDefault: 'Custom payment processing',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.docker',
              i18nDefault: 'Docker',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.microservices',
              i18nDefault: 'Microservices',
            },
            value: 85,
          }
        ]
      },
      svn_url: null,
      stargazers_count: null,
      languages_url: null,
      pushed_at: null,
    },
    {
      sitelogo: require('../assets/img/cityfew.png'),
      name: {
        i18nTag: 'projects.cityfew.name',
        i18nDefault: "Cityfew"
      },
      description: {
        i18nTag: 'projects.cityfew.description',
        i18nDefault: `
        Pre-sales and Post-sales programmatic e-commerce membership club.
        Unique sales opportunities! Each product come with it's own set of rules. 
        Custom sales "rule" are used to create a rich and exclusive experience for buyers and sellers.
        `
      },
      externalLink: true,
      external: {
        i18nTag: 'projects.cityfew.external',
        i18nDefault: 'Cityfew',
        url: "https://cityfew.com/"
      },
      visit: {
        i18nTag: 'projects.visit-website',
        i18nDefault: "Visit website"
      },
      technologies: {
        showTechno: true,
        showValues: false,
        data: [
          {
            language: {
              i18nTag: 'projects.techno.node-js',
              i18nDefault: 'Node.js',
            },
            value: 92.8,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.db-orm',
              i18nDefault: 'Multi-DB/ORM',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.telemetry-observability',
              i18nDefault: 'In-house Telemetry/Observability',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.multi-cloud-saas',
              i18nDefault: 'Multi-cloud Saas',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.queue-system',
              i18nDefault: 'Custom queue system',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.geocoding',
              i18nDefault: 'Geocoding',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.programmatic-cart',
              i18nDefault: 'Programmatic Cart/Orders',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.shipping',
              i18nDefault: 'Package/Shipping',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.in-house.payment',
              i18nDefault: 'Custom payment processing',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.docker-microservices',
              i18nDefault: 'Docker',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.microservices',
              i18nDefault: 'Microservices',
            },
            value: 85,
          }
        ]
      },
      svn_url: null,
      stargazers_count: null,
      languages_url: null,
      pushed_at: null,
    },
    {
      sitelogo: require('../assets/img/smallmoves-vancouver.png'),
      name: {
        i18nTag: 'projects.smallmoves-vancouver.name',
        i18nDefault: "Smallmoves Vancouver"
      },
      description: {
        i18nTag: 'projects.smallmoves-vancouver.description',
        i18nDefault: `
          The owner needed a solution to manage all parts of a move, 
          from lead to bill of lading to payments with a real time tracking of any steps of the move.
          I propose to build an HTML5 mobile application.
          They now process moves from an Ipad, Iphone or any mobile device that supports HTML5.
        `
      },
      externalLink: true,
      external: {
        i18nTag: 'projects.smallmoves-vancouver.external',
        i18nDefault: 'Smallmoves Vancouver',
        url: "https://smallmovesvancouver.com/"
      },
      visit: {
        i18nTag: 'projects.visit-website',
        i18nDefault: "Visit website"
      },
      technologies: {
        showTechno: true,
        showValues: false,
        data: [
          {
            language: {
              i18nTag: 'projects.techno.javascript',
              i18nDefault: 'Javascript',
            },
            value: 92.8,
          },
          {
            language: {
              i18nTag: 'projects.techno.html-5',
              i18nDefault: 'HTML-5',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.single-page-app',
              i18nDefault: 'Single Page Application',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.ruby-on-rails',
              i18nDefault: 'Ruby on Rails',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.mysql',
              i18nDefault: 'MySQL',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.paypal',
              i18nDefault: 'Paypal',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.stripe',
              i18nDefault: 'Stripe',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.ansible',
              i18nDefault: 'Ansible',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.aws-cloud',
              i18nDefault: 'AWS',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.rspec',
              i18nDefault: 'RSpec',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.capistrano',
              i18nDefault: 'Capistrano',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.jasmine',
              i18nDefault: 'Jasmine',
            },
            value: 85,
          },
        ]
      },
      svn_url: null,
      stargazers_count: null,
      languages_url: null,
      pushed_at: null,
    },
    {
      sitelogo: require('../assets/img/nativetouch-logo.png'),
      name: {
        i18nTag: 'projects.nativetouch.name',
        i18nDefault: "Nativetouch"
      },
      description: {
        i18nTag: 'projects.nativetouch.description',
        i18nDefault: `
        Guiding the world’s top brands through the complex mobile advertising ecosystem.
        The Native Touch team is comprised of passionate technology and advertising experts who pride themselves in doing things others can’t. 
        Thanks to the limitless opportunities of mobile advertising

        `
      },
      externalLink: true,
      external: {
        i18nTag: 'projects.nativetouch.external',
        i18nDefault: 'Nativetouch',
        url: "https://nativetouch.com/"
      },
      visit: {
        i18nTag: 'projects.visit-website',
        i18nDefault: "Visit website"
      },
      technologies: {
        showTechno: true,
        showValues: false,
        data: [
          {
            language: {
              i18nTag: 'projects.techno.ruby-on-rails',
              i18nDefault: 'Ruby on Rails',
            },
            value: 92.8,
          },
          {
            language: {
              i18nTag: 'projects.techno.go',
              i18nDefault: 'Go',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.python',
              i18nDefault: 'Python',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.postgresql',
              i18nDefault: 'PostgreSQL',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.apache-couchdb',
              i18nDefault: 'Apache CouchDB',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.elasticsearch',
              i18nDefault: 'Elasticsearch',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.node-js',
              i18nDefault: 'Node.js',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.angular-js',
              i18nDefault: 'AngularJS',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.vue-js',
              i18nDefault: 'Vue.js',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.d3-js',
              i18nDefault: 'D3.js',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.jenkins',
              i18nDefault: 'Jenkins',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.packer',
              i18nDefault: 'Packer',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.terraform',
              i18nDefault: 'Terraform',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.consul',
              i18nDefault: 'Consul',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.ansible',
              i18nDefault: 'Ansible',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.aws',
              i18nDefault: 'AWS',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.grafana',
              i18nDefault: 'Grafana',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.carbon-graphite',
              i18nDefault: 'Carbon/Graphite',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.docker',
              i18nDefault: 'Docker',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.microservices',
              i18nDefault: 'Microservices',
            },
            value: 85,
          },
          {
            language: {
              i18nTag: 'projects.techno.inter-ana',
              i18nDefault: 'inter|ana (scuba.io)',
            },
            value: 85,
          }
        ]
      },
      svn_url: null,
      stargazers_count: null,
      languages_url: null,
      pushed_at: null,
    },
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: {
    i18nTag: 'leadership.heading', 
    i18nDefault: "Leadership",
  },
  message: {
    i18nTag: 'leadership.message',
    i18nDefault: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  },
  images: [
    { 
      img: require("../editable-stuff/profile-picture.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile-picture.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: {
    i18nTag: 'skills.heading',
    i18nDefault: "Skills",
  },
  message: {
    i18nTag:'skills.message',
    i18nDefault: ""
  },
  hardSkills: [
    { name: {
      i18nTag: 'skills.hard.web-architecture',
      i18nDefault: "Web Architecture"
    }, value: 90 },
    { name: {
      i18nTag: 'skills.hard.html-css',
      i18nDefault: "HTML/CSS"
    }, value: 90 },
    { name: {
      i18nTag: 'skills.hard.data-structures',
      i18nDefault: "Data Structures"
    }, value: 75 },
    { name: {
      i18nTag: 'skills.hard.python',
      i18nDefault: "Python"
    }, value: 65 },
    { name: {
      i18nTag: 'skills.hard.javascript',
      i18nDefault: "Javascript/Node.js"
    }, value: 90 },
    { name: {
      i18nTag: 'skills.hard.java',
      i18nDefault: "Java"
    }, value: 65 },
    { name: {
      i18nTag: 'skills.hard.rust',
      i18nDefault: "Rust"
    }, value: 55 },
    { name: {
      i18nTag: 'skills.hard.data-science',
      i18nDefault: "Data Science"
    }, value: 65 },
    { name: {
      i18nTag: 'skills.hard.data-pipeline',
      i18nDefault: "Data Pipeline"
    }, value: 75 },
    { name: {
      i18nTag: 'skills.hard.sql-nosql',
      i18nDefault: "SQL/NoSql"
    }, value: 75 },
    { name: {
      i18nTag: 'skills.hard.ui-ux-design',
      i18nDefault: "UI/UX Design"
    }, value: 75 },
    { name: {
      i18nTag: 'skills.hard.vue-js',
      i18nDefault: "VueJs"
    }, value: 80 },
    { name: {
      i18nTag: 'skills.hard.ruby-on-rails',
      i18nDefault: "Ruby on Rails"
    }, value: 80 },
    { name: {
      i18nTag: 'skills.hard.container',
      i18nDefault: "Containers"
    }, value: 90 },
    { name: {
      i18nTag: 'skills.hard.ci-cd',
      i18nDefault: "CI/CD Pipeline"
    }, value: 90 },
    { name: {
      i18nTag: 'skills.hard.cloud-computing',
      i18nDefault: "Cloud Computing"
    }, value: 90 },
  ],
  softSkills: [
    { name: {
      i18nTag: 'skills.soft.goal-oriented',
      i18nDefault: "Goal-Oriented"
    }, value: 80 },

    { name: {
      i18nTag: 'skills.soft.collaboration',
      i18nDefault: "Collaboration"
    }, value: 90 },

    { name: {
      i18nTag: 'skills.soft.positivity',
      i18nDefault: "Positivity"
    }, value: 80 },

    { name: {
      i18nTag: 'skills.soft.adaptability',
      i18nDefault: "Adaptability"
    }, value: 75 },

    { name: {
      i18nTag: "skills.soft.problem-solving",
      i18nDefault: "Problem Solving"
    }, value: 90 },
    { name: {
      i18nTag: 'skills.soft.empathy',
      i18nDefault: "Empathy"
    }, value: 90 },

    { name: {
      i18nTag: 'skills.soft.organization',
      i18nDefault: "Organization"
    }, value: 70 },

    { name: {
      i18nTag: 'skills.soft.creativity',
      i18nDefault: "Creativity"
    }, value: 90 },
  ],
};



const achievements = {
  show: true,
  heading: {
    i18nTag: 'achievements.heading',
    i18nDefault: "Achievements",
  },
  data: [
    {
      role: {
        i18nTag: 'achievements.google.label',
        i18nDefault: "Google Project Management Certificate"
      },
      companylogo: require('../assets/img/google.png'),
      url: "https://coursera.org/share/1e9d7d0e17a75d0a89ac8f64a5fbca86",
      date: {
        i18nTag: 'achievements.google.date',
        i18nDefault: 'September 2022',
      },
      externalLink: false,
      external: {
        i18nTag: '',
        i18nDefault: "",
        url: ""
      },
      visit: {
        i18nTag: 'achievements.visit-website',
        i18nDefault: "Visit website"
      }
    },
    {
      role: {
        i18nTag: 'achievements.siia.label',
        i18nDefault: 'Best Collaboration / Social Networking Solution',
      },
      companylogo: require('../assets/img/siiacodie.webp'),
      url: "https://siia.net/codie/2012-winners/",
      date: {
        i18nTag: 'achievements.siia.date',
        i18nDefault: 'SIIA CODIE 2012',
      },
      externalLink: true,
      external: {
        i18nTag: 'achievements.siia.external',
        i18nDefault: 'Gust',
        url: "https://gust.com/"
      },
      visit: {
        i18nTag: 'achievements.visit-website',
        i18nDefault: "Visit website"
      }
    },
  ]
}



// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: {
    i18nTag: 'getintouch.heading',
    i18nDefault: "Get In Touch",
  },
  message: {
    i18nTag: 'getintouch.message',
    i18nDefault: "I'm currently looking for full-time Software Developer or Project Management related opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at ",
  },
  email: "jvarnel@gmail.com",
  repoUrl: "https://github.com/varneljoseph/portfolio"
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}


const defaultLanguage = "en";

const supportedLanguages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  // { code: "es", name: "Español" },
  // { code: "de", name: "Deutsche" },
  // { code: "ar", name: "عربي" },
];


export { 
  navBar, mainBody, about, repos, skills, achievements, leadership, getInTouch, experiences,
  defaultLanguage, supportedLanguages 
};
