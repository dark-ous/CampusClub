/**
 * VIT Pune Clubs Explorer - Core Application
 * Pure Vanilla JavaScript (ES6+) - Fast, Modular, and Dependency-Free
 */

// 1. Authoritative Campus Clubs Data
const CLUBS_DATA = [
  {
    id: 'gdg',
    name: 'GDG on Campus VIT Pune',
    fullName: 'Google Developer Groups on Campus - Vishwakarma Institute of Technology',
    category: 'software',
    categoryLabel: 'Software & AI',
    accentColor: '#1a73e8', // Google Blue
    tagline: 'Connect. Learn. Grow with Google Technologies.',
    shortDesc: 'A community of passionate student developers building solutions with Android, Cloud, Web, Flutter, and Google AI / Gemini. Organizing hands-on hackathons, workshops, and study jams.',
    logoSvg: `
      <svg viewBox="0 0 48 48" fill="none" class="club-logo-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 12L4 24L14 36" stroke="#4285F4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34 12L44 24L34 36" stroke="#EA4335" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 8L20 40" stroke="#0F9D58" stroke-width="5" stroke-linecap="round"/>
        <circle cx="24" cy="24" r="3" fill="#FBBC04"/>
      </svg>
    `,
    stats: {
      members: '1,200+',
      events: '18 / Year',
      projects: '24+ Built'
    },
    tags: ['Android', 'Google Cloud', 'Flutter', 'Gemini AI', 'Web', 'Solution Challenge'],
    socials: {
      website: 'https://gdg.community.dev',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com'
    },
    about: {
      overview: 'Google Developer Groups on Campus (GDG VIT Pune) is a university-based community group supported by Google Developers. We bridge the gap between academic theory and real-world software engineering practice by empowering students with modern developer technologies.',
      mission: 'To cultivate a culture of innovation, peer mentorship, and collaborative problem solving on campus. We focus on practical software development, product building, and competing in global initiatives like the Google Solution Challenge.',
      pillars: [
        {
          title: 'Google Solution Challenge',
          desc: 'Mentoring student teams to address the UN Sustainable Development Goals using Google tech.'
        },
        {
          title: 'Android & Flutter Study Jams',
          desc: 'Hands-on project tracks building modern cross-platform mobile experiences.'
        },
        {
          title: 'Applied AI & Gemini Labs',
          desc: 'Workshops on Generative AI, multimodal prompting, and deploying machine learning models.'
        },
        {
          title: 'Open Source Culture',
          desc: 'Fostering git workflows, clean architecture, and contribution to high-impact open source repositories.'
        }
      ],
      details: {
        facultyAdvisor: 'Prof. Dr. S. R. Shinde (Dept. of Computer Engineering)',
        established: '2019',
        activeMembers: '1,200+ Students',
        meetingSchedule: 'Bi-weekly Saturdays (Auditorium & Lab 204)'
      }
    },
    events: [
      {
        id: 'gdg-evt-1',
        title: 'DevFest VIT Pune 2026',
        status: 'upcoming',
        date: 'November 14, 2026',
        time: '10:00 AM - 5:00 PM IST',
        location: 'Sharad Arena Auditorium, VIT Pune',
        badgeColor: 'badge-upcoming',
        tags: ['Flagship', 'AI', 'Cloud', 'Networking'],
        desc: 'Our annual flagship developer convention featuring 6 industry tech talks, Google Developer Experts, live coding battles, and swags for all registered attendees.',
        isRsvpOpen: true
      },
      {
        id: 'gdg-evt-2',
        title: 'Solution Challenge 2026 Kickoff',
        status: 'upcoming',
        date: 'December 05, 2026',
        time: '4:00 PM - 6:30 PM IST',
        location: 'Seminar Hall 3 & Google Meet',
        badgeColor: 'badge-upcoming',
        tags: ['Hackathon', 'Mentorship', 'Global'],
        desc: 'Official orientation and ideation sprint for students participating in the global Google Solution Challenge. Team formation and mentor matchmaking.',
        isRsvpOpen: true
      },
      {
        id: 'gdg-evt-3',
        title: 'Generative AI & Gemini API Workshop',
        status: 'past',
        date: 'September 18, 2026',
        time: '2:00 PM - 5:30 PM IST',
        location: 'Computer Center Lab 102',
        badgeColor: 'badge-past',
        tags: ['Workshop', 'GenAI', 'Gemini'],
        desc: 'Hands-on buildathon where 140+ students integrated Gemini Flash 2.0 with React and Node.js backends.',
        isRsvpOpen: false
      },
      {
        id: 'gdg-evt-4',
        title: 'Android Compose Masterclass',
        status: 'past',
        date: 'August 12, 2026',
        time: '3:00 PM - 6:00 PM IST',
        location: 'Online Webinar',
        badgeColor: 'badge-past',
        tags: ['Android', 'Kotlin', 'Mobile'],
        desc: 'Deep dive into Jetpack Compose, state hoisting, and reactive architecture with GDE mobile experts.',
        isRsvpOpen: false
      }
    ],
    members: [
      {
        name: 'Aditya Kulkarni',
        role: 'GDG Campus Lead',
        branch: 'B.Tech Computer Engg (TY)',
        avatarBg: '#1a73e8',
        skills: ['Cloud', 'Go', 'Community'],
        bio: 'Passionate about distributed systems and community building. Leading GDG VIT Pune with a focus on practical developer enablement and hackathon mentoring.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Ananya Deshmukh',
        role: 'AI / ML Track Lead',
        branch: 'B.Tech AI & Data Science (TY)',
        avatarBg: '#ea4335',
        skills: ['Gemini', 'PyTorch', 'LLMs'],
        bio: 'Research enthusiast working on multimodal LLMs and RAG architectures. Conducts workshops on machine learning engineering and Kaggle sprints.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Rohan Sharma',
        role: 'Mobile & Flutter Head',
        branch: 'B.Tech Information Tech (SY)',
        avatarBg: '#34a853',
        skills: ['Flutter', 'Android', 'Dart'],
        bio: 'Mobile architect who has published 3 apps to Google Play Store. Mentors junior students in clean architecture and cross-platform UI/UX.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Sneha Patil',
        role: 'Design & Branding Lead',
        branch: 'B.Tech Computer Engg (TY)',
        avatarBg: '#f9ab00',
        skills: ['Figma', 'UI/UX', 'Design Systems'],
        bio: 'Specializes in Material 3 design systems, visual storytelling, and high-conversion interactive event web experiences.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Vikram Joshi',
        role: 'Web Development Lead',
        branch: 'B.Tech Information Tech (TY)',
        avatarBg: '#1a73e8',
        skills: ['React', 'Next.js', 'TypeScript'],
        bio: 'Fullstack developer obsessed with web performance, clean component design, and serverless backend pipelines.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Pooja Kadam',
        role: 'Public Relations & Outreach',
        branch: 'B.Tech AI & DS (SY)',
        avatarBg: '#ea4335',
        skills: ['Outreach', 'Partnerships', 'Events'],
        bio: 'Connects the chapter with industry partners, tech sponsors, and student communities across Maharashtra.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    ]
  },
  {
    id: 'aws',
    name: 'AWS Student Club VIT Pune',
    fullName: 'Amazon Web Services Student Community - VIT Pune Chapter',
    category: 'cloud',
    categoryLabel: 'Cloud & DevOps',
    accentColor: '#ff9900', // AWS Orange / Google Yellow accent harmony
    tagline: 'Build on Cloud. Scale to the World.',
    shortDesc: 'A premier campus cloud collective dedicated to AWS infrastructure, Serverless, DevOps, and Cloud Practitioner study cohorts. Equipping students with industry-grade cloud certifications.',
    logoSvg: `
      <svg viewBox="0 0 48 48" fill="none" class="club-logo-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28C8.68629 28 6 25.3137 6 22C6 19.0435 8.14076 16.5888 11.0003 16.0827C11.5847 10.9788 15.894 7 21.1 7C25.4379 7 29.1706 9.88264 30.4357 13.8826C31.5478 13.3175 32.8122 13 34.1429 13C38.4822 13 42 16.5178 42 20.8571C42 21.6115 41.8935 22.341 41.6947 23.0315C42.4938 23.7554 43 24.8183 43 26C43 28.2091 41.2091 30 39 30H12" stroke="#FF9900" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 38C20 42 28 42 34 38" stroke="#1A73E8" stroke-width="4" stroke-linecap="round"/>
        <path d="M32 35L36 38L32 41" stroke="#1A73E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    stats: {
      members: '850+',
      events: '14 / Year',
      projects: '40+ AWS Certified'
    },
    tags: ['AWS EC2', 'Lambda', 'Docker & K8s', 'Terraform', 'DevOps', 'Cloud Security'],
    socials: {
      website: 'https://aws.amazon.com/developer/community/students/',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com'
    },
    about: {
      overview: 'AWS Student Club at VIT Pune is the official university hub for aspiring cloud architects, DevOps engineers, and serverless builders. We organize structured study groups for AWS Certified Cloud Practitioner and Solutions Architect Associate exams.',
      mission: 'Demystifying cloud architecture and lowering the barrier to entry for modern cloud-native engineering. We grant students hands-on lab credits, real cloud sandbox access, and project mentorship.',
      pillars: [
        {
          title: 'AWS Certification Cohorts',
          desc: 'Peer study circles providing study material, mock tests, and exam fee voucher guidance.'
        },
        {
          title: 'Serverless & Microservices',
          desc: 'Hands-on training with AWS Lambda, API Gateway, DynamoDB, and event-driven patterns.'
        },
        {
          title: 'DevOps & Infrastructure as Code',
          desc: 'Automating multi-environment cloud infrastructure using Terraform, CDK, and GitHub Actions.'
        },
        {
          title: 'AWS DeepRacer League',
          desc: 'Training reinforcement learning models to race 1/18th autonomous cars on virtual tracks.'
        }
      ],
      details: {
        facultyAdvisor: 'Prof. K. A. Ghadge (Dept. of Information Technology)',
        established: '2021',
        activeMembers: '850+ Students',
        meetingSchedule: 'Weekly Friday Evenings (Cloud Innovation Lab)'
      }
    },
    events: [
      {
        id: 'aws-evt-1',
        title: 'AWS Cloud Genesis Bootcamp 2026',
        status: 'upcoming',
        date: 'November 22, 2026',
        time: '9:30 AM - 4:30 PM IST',
        location: 'IT Dept Cloud Lab & AWS Learner Labs',
        badgeColor: 'badge-upcoming',
        tags: ['Hands-on', 'Certification', 'EC2', 'S3'],
        desc: 'Intensive full-day workshop covering core AWS fundamentals, IAM security, VPC networks, and deploying containerized web applications with free AWS credits.',
        isRsvpOpen: true
      },
      {
        id: 'aws-evt-2',
        title: 'AWS DeepRacer Autonomous Racing Challenge',
        status: 'upcoming',
        date: 'December 18, 2026',
        time: '2:00 PM - 6:00 PM IST',
        location: 'VIT Main Courtyard & Virtual Console',
        badgeColor: 'badge-upcoming',
        tags: ['Reinforcement Learning', 'AI', 'Competition'],
        desc: 'Compete against campus teams by fine-tuning reward functions and racing autonomous vehicle models in the AWS console.',
        isRsvpOpen: true
      },
      {
        id: 'aws-evt-3',
        title: 'Building Serverless APIs with AWS Lambda',
        status: 'past',
        date: 'August 29, 2026',
        time: '4:00 PM - 7:00 PM IST',
        location: 'Virtual Workshop',
        badgeColor: 'badge-past',
        tags: ['Serverless', 'Node.js', 'DynamoDB'],
        desc: 'Explored pay-per-use architecture, cold-start mitigation, and event bridging with Amazon EventBridge.',
        isRsvpOpen: false
      }
    ],
    members: [
      {
        name: 'Devavrat Mandhare',
        role: 'Club President & Lead',
        branch: 'B.Tech Information Tech (TY)',
        avatarBg: '#ff9900',
        skills: ['AWS SAA', 'Terraform', 'Kubernetes'],
        bio: 'AWS Certified Solutions Architect Associate. Led 4 production deployments on AWS and passionate about teaching scalable infrastructure to peers.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Prutha Sawant',
        role: 'Vice President & DevOps Head',
        branch: 'B.Tech Computer Engg (TY)',
        avatarBg: '#1a73e8',
        skills: ['CI/CD', 'Docker', 'CloudFormation'],
        bio: 'Automates cloud delivery pipelines. Focuses on container orchestration, observability, and cost-optimized cloud architectures.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Nikhil Rathi',
        role: 'DeepRacer & AI Lead',
        branch: 'B.Tech AI & DS (SY)',
        avatarBg: '#34a853',
        skills: ['Python', 'SageMaker', 'RL'],
        bio: 'Ranked in the top 50 in India AWS DeepRacer Student League. Helps student teams engineer reinforcement learning algorithms.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Aishwarya Gite',
        role: 'Technical Events Coordinator',
        branch: 'B.Tech Electronics & Telecomm (TY)',
        avatarBg: '#ea4335',
        skills: ['Event Ops', 'IoT on AWS', 'Public Speaking'],
        bio: 'Coordinates chapter symposiums, manages speaker hospitality, and leads IoT device connectivity sprints with AWS IoT Core.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    ]
  },
  {
    id: 'ieee',
    name: 'IEEE Student Branch VIT Pune',
    fullName: 'Institute of Electrical and Electronics Engineers - Student Branch 62841',
    category: 'hardware',
    categoryLabel: 'Hardware & Research',
    accentColor: '#00629b', // IEEE Blue with Google Red/Green details
    tagline: 'Advancing Technology for Humanity through Research & Engineering.',
    shortDesc: 'A prestigious scientific & technical chapter promoting academic research, robotics, signal processing, IoT hardware prototypes, and international research publications.',
    logoSvg: `
      <svg viewBox="0 0 48 48" fill="none" class="club-logo-svg" xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,4 42,24 24,44 6,24" stroke="#00629B" stroke-width="4" stroke-linejoin="round"/>
        <line x1="24" y1="12" x2="24" y2="36" stroke="#EA4335" stroke-width="4" stroke-linecap="round"/>
        <circle cx="24" cy="24" r="5" fill="#34A853"/>
        <path d="M16 24C16 19.5817 19.5817 16 24 16" stroke="#00629B" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    stats: {
      members: '600+',
      events: '12 / Year',
      projects: '15+ IEEE Papers'
    },
    tags: ['Robotics', 'Embedded IoT', 'Research Papers', 'Signal Processing', 'VLSI', 'Antenna'],
    socials: {
      website: 'https://www.ieee.org',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com'
    },
    about: {
      overview: 'IEEE Student Branch at VIT Pune connects engineering undergraduates with the global IEEE network of researchers, professionals, and academicians. Our student branch bridges hardware innovation, embedded robotics, and rigorous peer-reviewed scientific publishing.',
      mission: 'To foster technological excellence, encourage interdisciplinary student research papers, and provide practical exposure in robotics, cyber-physical systems, and signal processing.',
      pillars: [
        {
          title: 'Research Paper Colloquium',
          desc: 'Mentorship on writing, reviewing, and presenting research papers for IEEE Xplore indexed conferences.'
        },
        {
          title: 'Robotics & Mechatronics Lab',
          desc: 'Hands-on construction of autonomous line-followers, robotic manipulators, and drone telemetry.'
        },
        {
          title: 'Embedded Systems & IoT Hardware',
          desc: 'Prototyping with ESP32, STM32, ARM Cortex microcontrollers, and real-time edge processing.'
        },
        {
          title: 'Women in Engineering (WIE)',
          desc: 'Dedicated affinity group empowering female engineering leaders through mentorship and scholarships.'
        }
      ],
      details: {
        facultyAdvisor: 'Dr. C. M. Mahajan (Dept. of Electronics & Telecommunication)',
        established: '2004',
        activeMembers: '600+ Members',
        meetingSchedule: 'Alternate Thursdays (Robotics Research Center)'
      }
    },
    events: [
      {
        id: 'ieee-evt-1',
        title: 'TechnoTrack 2026: National Hardware Expo',
        status: 'upcoming',
        date: 'December 10, 2026',
        time: '9:00 AM - 5:30 PM IST',
        location: 'VIT Central Lawn & Mechanical Block',
        badgeColor: 'badge-upcoming',
        tags: ['Hardware', 'Robotics', 'IoT', 'Prizes'],
        desc: 'Inter-college technical exhibition featuring autonomous robotics combat, IoT smart city demonstrators, and project funding grants for student teams.',
        isRsvpOpen: true
      },
      {
        id: 'ieee-evt-2',
        title: 'How to Write & Publish an IEEE Research Paper',
        status: 'upcoming',
        date: 'December 24, 2026',
        time: '3:00 PM - 5:30 PM IST',
        location: 'Conference Room A & MS Teams',
        badgeColor: 'badge-upcoming',
        tags: ['Research', 'LaTeX', 'Academic', 'Writing'],
        desc: 'Comprehensive guidance on literature review methodology, LaTeX formatting, IEEE citation standards, and overcoming reviewer rebuttals.',
        isRsvpOpen: true
      },
      {
        id: 'ieee-evt-3',
        title: 'Embedded Firmware with STM32 & FreeRTOS',
        status: 'past',
        date: 'July 25, 2026',
        time: '10:00 AM - 4:00 PM IST',
        location: 'Microprocessor Lab 304',
        badgeColor: 'badge-past',
        tags: ['Embedded', 'C/C++', 'RTOS'],
        desc: 'Hands-on lab mastering multithreaded microcontroller tasks, interrupt handlers, and hardware timers.',
        isRsvpOpen: false
      }
    ],
    members: [
      {
        name: 'Atharva Chitnis',
        role: 'Student Branch Chair',
        branch: 'B.Tech Electronics & Telecomm (TY)',
        avatarBg: '#00629b',
        skills: ['Embedded C', 'IoT', 'Leadership'],
        bio: 'Published author of 2 IEEE conference papers on smart telemetry. Passionate about bringing industrial IoT standards into undergraduate student projects.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Gauri Kulkarni',
        role: 'IEEE WIE Affinity Chair',
        branch: 'B.Tech Computer Engg (TY)',
        avatarBg: '#ea4335',
        skills: ['Robotics', 'Computer Vision', 'ROS2'],
        bio: 'Leading the Women In Engineering chapter at VIT. Developing robot perception stacks with ROS2 and OpenCV.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Omkar Shinde',
        role: 'Research & Publication Head',
        branch: 'B.Tech Instrumentation Engg (TY)',
        avatarBg: '#1e8e3e',
        skills: ['LaTeX', 'Signal Processing', 'MATLAB'],
        bio: 'Guides undergraduates through drafting scientific papers, analyzing statistical significance, and submitting to Scopus/IEEE indexed venues.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        name: 'Pranav Joshi',
        role: 'Robotics Team Captain',
        branch: 'B.Tech Mechanical Engg (SY)',
        avatarBg: '#f9ab00',
        skills: ['Mechatronics', 'CAD/CAM', '3D Printing'],
        bio: 'Designs rapid mechanical chassis prototypes, drivetrain actuators, and leads the Robocon squad at VIT Pune.',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    ]
  }
];

// 2. Application State Management
const AppState = {
  currentView: 'directory', // 'directory' | 'club-detail' | 'all-events' | 'about'
  activeClubId: null,
  activeTab: 'about',
  searchQuery: '',
  activeFilter: 'all',
  eventFilter: 'all'
};

// 3. UI Helpers & Material Ripple Effect
function initRippleEffect() {
  document.addEventListener('click', function(e) {
    const rippleTarget = e.target.closest('.ripple');
    if (!rippleTarget) return;

    const circle = document.createElement('span');
    const diameter = Math.max(rippleTarget.clientWidth, rippleTarget.clientHeight);
    const radius = diameter / 2;

    const rect = rippleTarget.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-circle');

    const existingRipple = rippleTarget.querySelector('.ripple-circle');
    if (existingRipple) {
      existingRipple.remove();
    }

    rippleTarget.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
}

// Toast System
function showToast(message, type = 'success', duration = 3800) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `
      <svg class="toast-icon g-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;
  } else if (type === 'info') {
    iconSvg = `
      <svg class="toast-icon g-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;
  } else {
    iconSvg = `
      <svg class="toast-icon g-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    `;
  }

  toast.innerHTML = `
    ${iconSvg}
    <div class="toast-message">${message}</div>
    <button class="toast-close" aria-label="Dismiss">&times;</button>
  `;

  container.appendChild(toast);

  const dismissToast = () => {
    toast.classList.add('hiding');
    setTimeout(() => {
      toast.remove();
    }, 260);
  };

  toast.querySelector('.toast-close').addEventListener('click', dismissToast);

  setTimeout(dismissToast, duration);
}

// 4. Modal Manager
const ModalManager = {
  open(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  close(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  init() {
    // Backdrop clicks close modal
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          ModalManager.close(modal.id);
        }
      });
    });

    // Close buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-backdrop');
        if (modal) ModalManager.close(modal.id);
      });
    });

    // Keyboard ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
          ModalManager.close(modal.id);
        });
      }
    });

    // Quick Join button in nav
    const quickJoinBtn = document.getElementById('quick-join-btn');
    if (quickJoinBtn) {
      quickJoinBtn.addEventListener('click', () => {
        ModalManager.openJoinClubModal(AppState.activeClubId || 'gdg');
      });
    }

    const footerJoinLink = document.getElementById('footer-join-link');
    if (footerJoinLink) {
      footerJoinLink.addEventListener('click', () => {
        ModalManager.openJoinClubModal(AppState.activeClubId || 'gdg');
      });
    }

    const footerNewsletterBtn = document.getElementById('footer-newsletter-btn');
    if (footerNewsletterBtn) {
      footerNewsletterBtn.addEventListener('click', () => {
        const email = prompt('Enter your VIT Pune student email to receive weekly announcements:');
        if (email && email.includes('@vit.edu')) {
          showToast(`Subscribed ${email} to campus event briefings!`, 'success');
        } else if (email) {
          showToast('Please enter an official @vit.edu email address.', 'warning');
        }
      });
    }

    // Join Form Submit Handler
    const joinForm = document.getElementById('join-club-form');
    if (joinForm) {
      joinForm.addEventListener('submit', this.handleJoinSubmit);
      document.getElementById('cancel-join-btn')?.addEventListener('click', () => {
        ModalManager.close('join-modal');
      });
    }

    // Event RSVP Form Submit Handler
    const rsvpForm = document.getElementById('event-rsvp-form');
    if (rsvpForm) {
      rsvpForm.addEventListener('submit', this.handleRsvpSubmit);
      document.getElementById('cancel-rsvp-btn')?.addEventListener('click', () => {
        ModalManager.close('event-modal');
      });
    }
  },

  openJoinClubModal(preselectedClubId = 'gdg') {
    const select = document.getElementById('join-club-select');
    if (select && preselectedClubId) {
      select.value = preselectedClubId;
    }
    this.open('join-modal');
  },

  handleJoinSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('join-name');
    const prnInput = document.getElementById('join-prn');
    const emailInput = document.getElementById('join-email');
    const clubSelect = document.getElementById('join-club-select');

    let isValid = true;

    // Name Validation
    if (!nameInput.value.trim()) {
      document.getElementById('err-join-name').classList.add('visible');
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('err-join-name').classList.remove('visible');
      nameInput.classList.remove('is-invalid');
    }

    // PRN Validation
    if (!prnInput.value.trim() || prnInput.value.trim().length < 6) {
      document.getElementById('err-join-prn').classList.add('visible');
      prnInput.classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('err-join-prn').classList.remove('visible');
      prnInput.classList.remove('is-invalid');
    }

    // Email validation
    const emailVal = emailInput.value.trim().toLowerCase();
    if (!emailVal || !emailVal.endsWith('@vit.edu')) {
      document.getElementById('err-join-email').classList.add('visible');
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('err-join-email').classList.remove('visible');
      emailInput.classList.remove('is-invalid');
    }

    if (!isValid) return;

    // Simulate submission with button feedback
    const submitBtn = document.getElementById('submit-join-btn');
    const spinner = submitBtn.querySelector('.btn-spinner');
    const labelSpan = submitBtn.querySelector('span');
    
    spinner.style.display = 'inline-block';
    labelSpan.textContent = 'Submitting...';
    submitBtn.disabled = true;

    setTimeout(() => {
      spinner.style.display = 'none';
      labelSpan.textContent = 'Submit Application';
      submitBtn.disabled = false;

      const targetClub = CLUBS_DATA.find(c => c.id === clubSelect.value);
      const clubName = targetClub ? targetClub.name : 'the club';

      ModalManager.close('join-modal');
      const joinForm = document.getElementById('join-club-form');
      if (joinForm) joinForm.reset();

      showToast(`Application submitted! Welcome to ${clubName}. We'll reach out via ${emailVal}.`, 'success', 5000);
    }, 800);
  },

  openRsvpModal(eventId) {
    let matchedEvent = null;
    let matchedClub = null;

    for (const club of CLUBS_DATA) {
      const found = club.events.find(ev => ev.id === eventId);
      if (found) {
        matchedEvent = found;
        matchedClub = club;
        break;
      }
    }

    if (!matchedEvent) return;

    document.getElementById('rsvp-event-id').value = eventId;
    document.getElementById('event-modal-title').textContent = `RSVP: ${matchedEvent.title}`;
    document.getElementById('event-modal-subtitle').textContent = `Hosted by ${matchedClub.name}`;

    const summaryBox = document.getElementById('event-summary-box');
    summaryBox.innerHTML = `
      <div class="summary-title">${matchedEvent.title}</div>
      <div class="summary-meta">
        <div><strong>Date & Time:</strong> ${matchedEvent.date} &bull; ${matchedEvent.time}</div>
        <div><strong>Location:</strong> ${matchedEvent.location}</div>
      </div>
    `;

    this.open('event-modal');
  },

  handleRsvpSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('rsvp-name');
    const prnInput = document.getElementById('rsvp-prn');
    const emailInput = document.getElementById('rsvp-email');

    let isValid = true;

    if (!nameInput.value.trim()) {
      document.getElementById('err-rsvp-name').classList.add('visible');
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('err-rsvp-name').classList.remove('visible');
      nameInput.classList.remove('is-invalid');
    }

    if (!prnInput.value.trim()) {
      document.getElementById('err-rsvp-prn').classList.add('visible');
      prnInput.classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('err-rsvp-prn').classList.remove('visible');
      prnInput.classList.remove('is-invalid');
    }

    if (!emailInput.value.trim()) {
      document.getElementById('err-rsvp-email').classList.add('visible');
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('err-rsvp-email').classList.remove('visible');
      emailInput.classList.remove('is-invalid');
    }

    if (!isValid) return;

    const submitBtn = document.getElementById('submit-rsvp-btn');
    submitBtn.textContent = 'Securing Pass...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Confirm RSVP & Get Pass';
      submitBtn.disabled = false;

      ModalManager.close('event-modal');
      e.target.reset();

      showToast('RSVP Confirmed! Your student pass has been emailed. See you there!', 'success', 4500);
    }, 700);
  },

  openMemberModal(member, clubName) {
    const spotlightBody = document.getElementById('member-spotlight-body');
    spotlightBody.innerHTML = `
      <div class="spotlight-avatar" style="background-color: ${member.avatarBg}">
        ${member.name.charAt(0)}
      </div>
      <h3 class="spotlight-name">${member.name}</h3>
      <div class="spotlight-role">${member.role}</div>
      <div class="spotlight-club">${clubName} &bull; ${member.branch}</div>

      <div class="spotlight-bio">
        "${member.bio}"
      </div>

      <div class="member-skills-row mb-3">
        ${member.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
      </div>

      <div class="spotlight-socials">
        <a href="${member.linkedin}" target="_blank" rel="noopener" class="social-btn ripple" title="LinkedIn Profile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="${member.github}" target="_blank" rel="noopener" class="social-btn ripple" title="GitHub Profile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    `;

    this.open('member-modal');
  }
};

// 5. Renderers: Club Cards, Detail Pages, Events, Members
function renderClubCard(club) {
  return `
    <article class="club-card ripple" data-club-id="${club.id}" role="button" tabindex="0" aria-label="Explore ${club.name}">
      <div class="club-card-accent-bar" style="background-color: ${club.accentColor}"></div>
      <div class="club-card-header">
        <div class="club-logo-wrapper">
          ${club.logoSvg}
        </div>
        <span class="club-category-tag" style="background-color: ${club.accentColor}18; color: ${club.accentColor};">
          ${club.categoryLabel}
        </span>
      </div>

      <h3 class="club-card-name">${club.name}</h3>
      <div class="club-card-tagline">${club.tagline}</div>
      <p class="club-card-desc">${club.shortDesc}</p>

      <div class="club-stats-row">
        <div class="club-stat-item">
          <span class="club-stat-val">${club.stats.members}</span>
          <span class="club-stat-label">Students</span>
        </div>
        <div class="club-stat-item">
          <span class="club-stat-val">${club.stats.events}</span>
          <span class="club-stat-label">Activities</span>
        </div>
        <div class="club-stat-item">
          <span class="club-stat-val">${club.stats.projects}</span>
          <span class="club-stat-label">Achievements</span>
        </div>
      </div>

      <div class="club-tags-list">
        ${club.tags.slice(0, 4).map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
      </div>

      <div class="club-card-footer">
        <div class="btn-explore">
          <span>Explore Club</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </article>
  `;
}

function renderDirectoryView() {
  const grid = document.getElementById('clubs-grid');
  const countBadge = document.getElementById('clubs-count');
  const noResults = document.getElementById('no-results');

  const filteredClubs = CLUBS_DATA.filter(club => {
    const matchesFilter = (AppState.activeFilter === 'all') || (club.category === AppState.activeFilter);
    const query = AppState.searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      club.name.toLowerCase().includes(query) ||
      club.tagline.toLowerCase().includes(query) ||
      club.shortDesc.toLowerCase().includes(query) ||
      club.tags.some(t => t.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  if (filteredClubs.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    countBadge.textContent = '0 clubs match';
  } else {
    noResults.style.display = 'none';
    grid.innerHTML = filteredClubs.map(renderClubCard).join('');
    countBadge.textContent = `Showing ${filteredClubs.length} active ${filteredClubs.length === 1 ? 'club' : 'clubs'}`;
  }

  // Bind clicks on club cards
  grid.querySelectorAll('.club-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const clubId = card.getAttribute('data-club-id');
      window.location.hash = `#/club/${clubId}`;
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const clubId = card.getAttribute('data-club-id');
        window.location.hash = `#/club/${clubId}`;
      }
    });
  });
}

function renderClubDetailView(clubId) {
  const club = CLUBS_DATA.find(c => c.id === clubId);
  if (!club) {
    window.location.hash = '#/';
    return;
  }

  AppState.activeClubId = clubId;

  // Breadcrumb
  document.getElementById('crumb-club-name').textContent = club.name;

  // Hero
  const heroContainer = document.getElementById('club-hero-container');
  heroContainer.innerHTML = `
    <div class="container club-hero-card">
      <div class="club-hero-logo">
        ${club.logoSvg}
      </div>
      <div class="club-hero-info">
        <div class="club-hero-badges">
          <span class="badge" style="background-color: ${club.accentColor}18; color: ${club.accentColor}; border: 1px solid ${club.accentColor}30;">
            ${club.categoryLabel}
          </span>
          <span class="badge hero-badge" style="margin-bottom: 0;">
            VIT Pune Chapter &bull; Est. ${club.about.details.established}
          </span>
        </div>
        <h1 class="club-hero-title">${club.name}</h1>
        <div class="club-hero-tagline">${club.tagline}</div>
        <div class="club-hero-socials">
          <a href="${club.socials.website}" target="_blank" rel="noopener" class="social-btn ripple" title="Official Web">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
          <a href="${club.socials.linkedin}" target="_blank" rel="noopener" class="social-btn ripple" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="${club.socials.github}" target="_blank" rel="noopener" class="social-btn ripple" title="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="club-hero-actions">
        <button class="btn btn-primary ripple" id="detail-join-btn">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7.5" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
          <span>Apply to Join Club</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('detail-join-btn')?.addEventListener('click', () => {
    ModalManager.openJoinClubModal(club.id);
  });

  // Tab 1: About content
  const aboutContainer = document.getElementById('about-details-content');
  aboutContainer.innerHTML = `
    <div class="about-main-card">
      <h3 class="about-block-title">
        <span class="g-blue">&bull;</span> About the Organization
      </h3>
      <p class="about-paragraph">${club.about.overview}</p>
      
      <h3 class="about-block-title">
        <span class="g-green">&bull;</span> Our Mission & Focus
      </h3>
      <p class="about-paragraph">${club.about.mission}</p>

      <h3 class="about-block-title">
        <span class="g-red">&bull;</span> Key Flagship Initiatives
      </h3>
      <div class="pillars-grid">
        ${club.about.pillars.map(p => `
          <div class="pillar-item">
            <h5>${p.title}</h5>
            <p>${p.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <aside class="about-sidebar-card">
      <h4 style="font-size: 1.125rem; font-weight: 700;">Club Factsheet</h4>
      <div class="info-row">
        <span class="info-label">Faculty Advisor</span>
        <span class="info-val">${club.about.details.facultyAdvisor}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Year Established</span>
        <span class="info-val">${club.about.details.established}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Active Campus Strength</span>
        <span class="info-val">${club.about.details.activeMembers}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Regular Meetups</span>
        <span class="info-val">${club.about.details.meetingSchedule}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Primary Tech Focus</span>
        <div class="club-tags-list" style="margin-top: 6px;">
          ${club.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </aside>
  `;

  // Tab 2: Events
  renderClubEvents(club);

  // Tab 3: Members
  renderClubMembers(club);

  // Switch to current active tab
  switchClubTab(AppState.activeTab);
}

function renderClubEvents(club) {
  const eventsContainer = document.getElementById('events-list-container');
  
  const filteredEvents = club.events.filter(ev => {
    if (AppState.eventFilter === 'all') return true;
    return ev.status === AppState.eventFilter;
  });

  if (filteredEvents.length === 0) {
    eventsContainer.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <p>No ${AppState.eventFilter} events to display at the moment.</p>
      </div>
    `;
    return;
  }

  eventsContainer.innerHTML = filteredEvents.map(ev => `
    <div class="event-card">
      <span class="event-status-badge ${ev.badgeColor}">
        ${ev.status === 'upcoming' ? 'Upcoming Session' : 'Completed Event'}
      </span>
      <h4 class="event-title">${ev.title}</h4>
      <div class="event-meta">
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${ev.date} &bull; ${ev.time}</span>
        </div>
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${ev.location}</span>
        </div>
      </div>
      <p class="event-desc">${ev.desc}</p>
      <div class="club-tags-list mb-3">
        ${ev.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div class="event-card-action">
        ${ev.isRsvpOpen ? `
          <button class="btn btn-primary btn-sm ripple rsvp-btn" data-event-id="${ev.id}" style="width: 100%;">
            <span>Register / RSVP Pass</span>
          </button>
        ` : `
          <button class="btn btn-secondary btn-sm" disabled style="width: 100%; opacity: 0.6; cursor: default;">
            <span>Event Concluded</span>
          </button>
        `}
      </div>
    </div>
  `).join('');

  // Bind RSVP button clicks
  eventsContainer.querySelectorAll('.rsvp-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const eventId = btn.getAttribute('data-event-id');
      ModalManager.openRsvpModal(eventId);
    });
  });
}

function renderClubMembers(club) {
  const membersContainer = document.getElementById('members-list-container');
  const countBadge = document.getElementById('members-count-badge');
  countBadge.textContent = `${club.members.length} Core Members & Leads`;

  membersContainer.innerHTML = club.members.map((member, idx) => `
    <div class="member-card ripple" data-member-index="${idx}">
      <div class="member-avatar-wrapper" style="background-color: ${member.avatarBg}">
        ${member.name.charAt(0)}
      </div>
      <h4 class="member-name">${member.name}</h4>
      <div class="member-role">${member.role}</div>
      <div class="member-batch">${member.branch}</div>
      <div class="member-skills-row">
        ${member.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
      </div>
      <button class="member-action-btn ripple">
        <span>View Profile & Bio</span>
        <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  `).join('');

  // Bind member spotlight popup
  membersContainer.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-member-index'), 10);
      ModalManager.openMemberModal(club.members[idx], club.name);
    });
  });
}

function renderAllCampusEvents() {
  const container = document.getElementById('global-events-grid');
  const allEvents = [];

  CLUBS_DATA.forEach(club => {
    club.events.forEach(ev => {
      allEvents.push({ ...ev, clubName: club.name, clubColor: club.accentColor });
    });
  });

  // Sort upcoming first
  allEvents.sort((a, b) => (a.status === 'upcoming' ? -1 : 1));

  container.innerHTML = allEvents.map(ev => `
    <div class="event-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <span class="badge" style="background-color: ${ev.clubColor}18; color: ${ev.clubColor};">
          ${ev.clubName}
        </span>
        <span class="event-status-badge ${ev.badgeColor}" style="margin-bottom: 0;">
          ${ev.status === 'upcoming' ? 'Upcoming' : 'Past'}
        </span>
      </div>
      <h4 class="event-title">${ev.title}</h4>
      <div class="event-meta">
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>${ev.date} &bull; ${ev.time}</span>
        </div>
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${ev.location}</span>
        </div>
      </div>
      <p class="event-desc">${ev.desc}</p>
      <div class="event-card-action">
        ${ev.isRsvpOpen ? `
          <button class="btn btn-primary btn-sm ripple global-rsvp-btn" data-event-id="${ev.id}" style="width: 100%;">
            <span>Register for Free Pass</span>
          </button>
        ` : `
          <button class="btn btn-secondary btn-sm" disabled style="width: 100%; opacity: 0.6;">
            <span>Completed</span>
          </button>
        `}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.global-rsvp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const eventId = btn.getAttribute('data-event-id');
      ModalManager.openRsvpModal(eventId);
    });
  });
}

function switchClubTab(tabName) {
  AppState.activeTab = tabName;

  document.querySelectorAll('.club-tab').forEach(tab => {
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  document.querySelectorAll('.tab-pane').forEach(pane => {
    if (pane.id === `pane-${tabName}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });
}

// 6. Client-Side Hash Router
function handleRouting() {
  const hash = window.location.hash || '#/';
  
  // Hide all view panels
  const directoryView = document.getElementById('directory-view');
  const clubDetailView = document.getElementById('club-detail-view');
  const allEventsView = document.getElementById('all-events-view');
  const aboutHubView = document.getElementById('about-hub-view');

  directoryView.style.display = 'none';
  clubDetailView.style.display = 'none';
  allEventsView.style.display = 'none';
  aboutHubView.style.display = 'none';

  // Update navbar links active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  if (hash.startsWith('#/club/')) {
    const clubId = hash.replace('#/club/', '').trim().toLowerCase();
    clubDetailView.style.display = 'block';
    renderClubDetailView(clubId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (hash === '#/events') {
    allEventsView.style.display = 'block';
    document.querySelector('[data-nav="all-events"]')?.classList.add('active');
    renderAllCampusEvents();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (hash === '#/about-vit') {
    aboutHubView.style.display = 'block';
    document.querySelector('[data-nav="about"]')?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Default: Directory
    directoryView.style.display = 'block';
    document.querySelector('[data-nav="explore"]')?.classList.add('active');
    renderDirectoryView();
  }
}

// 7. Event Listeners & Bootstrapping
document.addEventListener('DOMContentLoaded', () => {
  // Initialize tactile ripple effect
  initRippleEffect();

  // Initialize modal manager
  ModalManager.init();

  // Search input listeners
  const searchInput = document.getElementById('club-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
      renderDirectoryView();
    });

    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      AppState.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      searchInput.focus();
      renderDirectoryView();
    });
  }

  // Filter chips
  document.querySelectorAll('#filter-pills .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#filter-pills .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.activeFilter = chip.getAttribute('data-filter');
      renderDirectoryView();
    });
  });

  // Reset filters button
  document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
    AppState.searchQuery = '';
    AppState.activeFilter = 'all';
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    document.querySelectorAll('#filter-pills .filter-chip').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-filter') === 'all');
    });
    renderDirectoryView();
  });

  // Back button from club detail view
  document.getElementById('back-to-directory-btn')?.addEventListener('click', () => {
    window.location.hash = '#/';
  });

  // Club internal tabs (About / Events / Members)
  document.querySelectorAll('.club-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabTarget = tab.getAttribute('data-tab');
      switchClubTab(tabTarget);
    });
  });

  // Event filter pills inside club detail
  document.querySelectorAll('#events-filter-btns .filter-chip-sm').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#events-filter-btns .filter-chip-sm').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.eventFilter = chip.getAttribute('data-event-filter');
      const currentClub = CLUBS_DATA.find(c => c.id === AppState.activeClubId);
      if (currentClub) {
        renderClubEvents(currentClub);
      }
    });
  });

  // Scroll shadow effect on navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Router listeners
  window.addEventListener('hashchange', handleRouting);
  
  // Initial route execution
  handleRouting();
});
