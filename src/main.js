import "./style.css";
import linkedinLogo from "./assets/LI-In-Bug.png";
import githubLogo from "./assets/github-mark.png";

document.querySelector("#app").innerHTML = `
<body>
  <header>
    <h1>Srivatsa BS</h1>
    <div class="header-links">
      <a class="header-link" href="/work.html">Work</a>
      <a class="header-link" href="/interests.html">Interests</a>
      <a class="header-link" href="/contact.html">Contact</a>
    </div>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/srivatsa-b-s/" target="_blank">
        <img class="linkedin-logo" style="height: 24px;"src="${linkedinLogo}"/>
      </a>
      <a href="https://github.com/Sri7-AI" target="_blank">
        <img class="linkedin-logo" style="height: 24px;"src="${githubLogo}"/>
      </a>
    </div>
  </header>
  <main>
    <div class="left-column">
      <img/>
      <div class="right-column-content">
        <h2>Expertise</h2>
        <p class="body-copy">
          I am a strategic innovation leader with over a decade of experience in scaling impact-driven solutions across education, healthcare, and emerging tech. I’ve contributed to national-level AI implementation initiatives, advised global organizations, and led GTM strategies at the intersection of business and technology. My journey spans founding and scaling education ventures, working with government ministries, and driving digital transformation through AI and operational efficiency. Most recently, I’ve supported AI integration strategies for global clients like Škoda and SandboxAQ, a Google X spin-off. While leading strategic projects with cross-functional teams, I remain deeply engaged in the process—applying lean, data-driven approaches and staying hands-on with the research, modeling, and storytelling that power scalable, meaningful change.
        </p>
      </div>
    </div>
    <div class="right-column">
      <p class="tagline">
        Driving impact at scale by enabling AI integration and go-to-market strategy across education, healthcare, and enterprise sectors.
      </p>
      <div class="left-column-content">
        <h2>Education</h2>
        <p class="body-copy">
          I’ve always been drawn to building things that create meaningful impact. Growing up, I was fascinated by how education could shape lives—and that passion led me to pursue a BTech from NIT Karnataka. While still in college, I founded my first education venture, driven by a deep belief in accessible learning. Years later, I joined Georgetown University’s STEM MBA program to refine my strategic and operational thinking, especially around scaling innovation through AI. Throughout my education, I’ve combined hands-on entrepreneurial work with formal training—launching companies, leading national programs, and consulting for global tech firms. For me, learning has always been about applying ideas to real-world problems and evolving through action.
        </p>
      </div>
    </div>
  </main>
  <footer>
    <div class="footer-links">
      <h3>Site</h3>
      <a class="footer-link" href="/interests.html">Interests</a>
      <a class="footer-link" href="/contact.html">Contact</a>
      <a class="footer-link" href="/work.html">Work</a>
    </div>
    <div class="footer-links">
      <h3>Social</h3>
      <a class="footer-link" href="https://www.linkedin.com/in/srivatsa-b-s/" target="_blank">LinkedIn</a>
      <a class="footer-link" href="/contact.html">Resume</a>
      <a class="footer-link" href="https://github.com/Sri7-AI" target="_blank">GitHub</a>
    </div>
  </footer>
</body>
`;
