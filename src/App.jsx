import { useState } from 'react'
import {
  Activity, ArrowRight, Award, BookOpen, CheckCircle2, ChevronDown,
  Clock3, FileText, GraduationCap, HeartPulse, Laptop, Menu, MessageCircle,
  Play, ShieldCheck, Sparkles, Stethoscope, Target, Users, X
} from 'lucide-react'

const modules = [
  {
    number: '01',
    title: 'Medical Terminology',
    icon: Stethoscope,
    topics: ['Prefixes & suffixes', 'Root words', 'Abbreviations', 'Body systems', 'Clinical terminology']
  },
  {
    number: '02',
    title: 'Anatomy & Physiology',
    icon: Activity,
    topics: ['Major body systems', 'Musculoskeletal', 'Cardiovascular', 'Respiratory', 'Digestive & nervous systems']
  },
  {
    number: '03',
    title: 'ICD-10-CM',
    icon: BookOpen,
    topics: ['Alphabetic Index', 'Tabular List', 'Conventions & notes', 'Laterality', 'Diagnosis coding practice']
  },
  {
    number: '04',
    title: 'CPT®',
    icon: FileText,
    topics: ['E/M', 'Surgery', 'Radiology', 'Pathology & laboratory', 'Modifiers & procedure coding']
  },
  {
    number: '05',
    title: 'HCPCS Level II',
    icon: ShieldCheck,
    topics: ['Level II structure', 'Modifiers', 'Supplies & DME', 'Drugs & biologicals', 'HCPCS practice']
  },
  {
    number: '06',
    title: 'Coding Guidelines',
    icon: Target,
    topics: ['Official guidelines', 'Sequencing', 'Documentation', 'Medical necessity', 'Common coding errors']
  },
  {
    number: '07',
    title: 'Practical Coding',
    icon: Laptop,
    topics: ['Medical records', 'Clinical scenarios', 'Diagnosis coding', 'Procedure coding', 'Case-based exercises']
  },
  {
    number: '08',
    title: 'CPC Preparation',
    icon: Award,
    topics: ['Exam structure', 'Question strategies', 'Timed practice', 'Mock examinations', 'Final revision']
  },
]

const faqs = [
  ['Who can join the medical coding course?', 'The program can be designed for life science graduates, pharmacy and nursing graduates, allied health professionals, medical graduates, fresh graduates, existing coders, and career-transition learners.'],
  ['Is the training completely online?', 'Yes. The planned model is live online training supported by recorded learning materials for revision and missed sessions.'],
  ['How long is the program?', 'The initial framework proposes approximately 12–16 weeks, with around 100–150 total training hours.'],
  ['Will I receive a certificate?', 'Students who successfully complete the institute training program may receive an institute-issued Certificate of Completion.'],
  ['Does the institute certificate make me CPC certified?', 'No. An institute training certificate and a professional CPC credential are separate. CPC preparation may be offered as part of the training.'],
  ['Are practical coding exercises included?', 'Yes. Case-based exercises, coding assignments, module assessments, mock tests and practical scenarios are central to the proposed methodology.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openModule, setOpenModule] = useState(2)
  const [openFaq, setOpenFaq] = useState(null)

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Sparkles size={14} /> Practical U.S. Medical Coding Training</span>
          <span className="topbar-right">Live Online • Recorded Learning • Student Support</span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <button className="brand" onClick={() => go('home')} aria-label="Zion home">
            <span className="brand-mark"><HeartPulse size={23} /></span>
            <span>
              <strong>ZION</strong>
              <small>MEDICAL CODING ACADEMY</small>
            </span>
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {[
              ['home', 'Home'], ['about', 'About'], ['courses', 'Courses'],
              ['curriculum', 'Curriculum'], ['trainer', 'Trainer'], ['faq', 'FAQ']
            ].map(([id, label]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
            <button className="nav-cta" onClick={() => go('contact')}>Join Now <ArrowRight size={16} /></button>
          </nav>

          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse-dot" /> U.S. MEDICAL CODING TRAINING</div>
              <h1>Learn Medical Coding.<br /><em>Build Your Future.</em></h1>
              <p className="hero-text">
                Structured online training in U.S. healthcare coding with practical exercises,
                updated guidelines and instructor-led learning.
              </p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => go('courses')}>Explore Program <ArrowRight size={18} /></button>
                <button className="secondary-btn" onClick={() => go('contact')}><Play size={17} /> Request a Demo</button>
              </div>
              <div className="hero-proof">
                <div><strong>12–16</strong><span>Weeks</span></div>
                <div><strong>100–150</strong><span>Training Hours</span></div>
                <div><strong>Live +</strong><span>Recorded</span></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="medical-card main-card">
                <div className="card-top">
                  <span className="mini-label">CODING PATHWAY</span>
                  <span className="live-pill"><span /> LIVE</span>
                </div>
                <div className="code-display">
                  <div className="code-icon"><Activity size={30} /></div>
                  <div><span>U.S. Healthcare</span><strong>Medical Coding</strong></div>
                </div>
                <div className="progress-label"><span>Training progress</span><b>Structured</b></div>
                <div className="progress"><i /></div>
                <div className="code-tags">
                  <span>ICD-10-CM</span><span>CPT®</span><span>HCPCS</span>
                </div>
              </div>
              <div className="floating-card floating-top"><Award size={20} /><div><strong>CPC Prep</strong><span>Exam-focused learning</span></div></div>
              <div className="floating-card floating-bottom"><CheckCircle2 size={20} /><div><strong>Practical Coding</strong><span>Case-based exercises</span></div></div>
              <div className="hero-cross cross-a">+</div><div className="hero-cross cross-b">+</div>
            </div>
          </div>
          <div className="hero-wave" />
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>FOCUSED ON</span>
            <b>MEDICAL TERMINOLOGY</b><i /> <b>ANATOMY</b><i /> <b>ICD-10-CM</b><i /> <b>CPT®</b><i /> <b>HCPCS LEVEL II</b>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container two-col">
            <div className="section-heading">
              <span className="section-kicker">ABOUT ZION</span>
              <h2>A practical path into <span>U.S. medical coding.</span></h2>
              <p>
                Zion Medical Coding Academy is designed as a professional online training institute
                for students and professionals who want structured education in U.S. medical coding.
              </p>
              <p>
                Our approach combines clear instruction, coding conventions, practical case work,
                assessments and ongoing student support.
              </p>
              <button className="text-btn" onClick={() => go('curriculum')}>View our curriculum <ArrowRight size={17} /></button>
            </div>
            <div className="about-cards">
              <div className="about-feature large"><div className="feature-icon"><GraduationCap /></div><strong>Structured Learning</strong><p>Step-by-step training from terminology and anatomy through coding practice.</p></div>
              <div className="about-feature"><div className="feature-icon"><Users /></div><strong>Student Support</strong><p>Doubt clearing, revision and feedback.</p></div>
              <div className="about-feature"><div className="feature-icon"><Target /></div><strong>Career Focus</strong><p>Practical skills for the coding pathway.</p></div>
            </div>
          </div>
        </section>

        <section id="courses" className="section program-section">
          <div className="container">
            <div className="center-heading">
              <span className="section-kicker">THE PROGRAM</span>
              <h2>Medical Coding <span>Training Program</span></h2>
              <p>A complete learning pathway covering the foundations, code sets, guidelines and practical application.</p>
            </div>
            <div className="program-banner">
              <div className="program-title"><span className="program-badge">CORE PROGRAM</span><h3>U.S. Medical Coding</h3><p>Live instructor-led classes + recorded revision materials</p></div>
              <div className="program-stats">
                <div><Clock3 /><strong>12–16 Weeks</strong><span>Proposed duration</span></div>
                <div><BookOpen /><strong>8 Modules</strong><span>Structured curriculum</span></div>
                <div><Laptop /><strong>100–150 hrs</strong><span>Approx. training</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="curriculum" className="section curriculum-section">
          <div className="container">
            <div className="curriculum-head">
              <div><span className="section-kicker">CURRICULUM</span><h2>From fundamentals to <span>real coding.</span></h2></div>
              <p>Every module builds toward confident code selection and case-based application.</p>
            </div>
            <div className="module-list">
              {modules.map((m) => {
                const Icon = m.icon
                const active = openModule === Number(m.number) - 1
                return <div className={active ? 'module active' : 'module'} key={m.number}>
                  <button className="module-head" onClick={() => setOpenModule(active ? null : Number(m.number) - 1)}>
                    <span className="module-number">{m.number}</span><span className="module-icon"><Icon size={20} /></span>
                    <strong>{m.title}</strong><ChevronDown className={active ? 'rotate' : ''} size={19} />
                  </button>
                  {active && <div className="module-body">{m.topics.map(t => <span key={t}><CheckCircle2 size={15} />{t}</span>)}</div>}
                </div>
              })}
            </div>
          </div>
        </section>

        <section className="section methodology-section">
          <div className="container">
            <div className="center-heading"><span className="section-kicker">HOW YOU LEARN</span><h2>More than <span>just lectures.</span></h2><p>The proposed learning experience keeps students practicing, testing and improving.</p></div>
            <div className="method-grid">
              {[
                ['01', 'Live Classes', 'Interactive instructor-led online sessions.', 'Video'],
                ['02', 'Recorded Learning', 'Revision support when you need it.', 'Play'],
                ['03', 'Coding Practice', 'Clinical scenarios and case-based exercises.', 'Practice'],
                ['04', 'Assessments', 'Quizzes, assignments and mock examinations.', 'Assess'],
              ].map(([n, t, d]) => <div className="method-card" key={n}><span>{n}</span><div className="method-line" /><h3>{t}</h3><p>{d}</p><small>{n === '01' ? 'LEARN' : n === '02' ? 'REVISE' : n === '03' ? 'PRACTICE' : 'MASTER'}</small></div>)}
            </div>
          </div>
        </section>

        <section id="trainer" className="section trainer-section">
          <div className="container trainer-card">
            <div className="trainer-visual">
              <div className="trainer-photo-wrap">
                <img src={`${import.meta.env.BASE_URL}trainer-profile.png`} alt="Godson Y, CPC — Trainer at Zion Medical Coding Academy" className="trainer-photo" />
                <div className="trainer-photo-badge"><Award size={16} /><span>GODSON Y, CPC</span></div>
              </div>
            </div>
            <div className="trainer-copy">
              <span className="section-kicker">MEET YOUR TRAINER</span>
              <h2>Learn from <span>Godson Y, CPC.</span></h2>
              <p className="trainer-intro">Professional instruction focused on building a strong understanding of U.S. medical coding and practical code selection.</p>
              <div className="credentials">
                <div><Award /><span><strong>CPC</strong><small>Professional credential</small></span></div>
                <div><Stethoscope /><span><strong>U.S. Coding</strong><small>Core area of instruction</small></span></div>
                <div><BookOpen /><span><strong>Practical Learning</strong><small>Case-based approach</small></span></div>
              </div>
              <p className="note">* Additional trainer qualifications and experience can be added when finalized.</p>
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="center-heading"><span className="section-kicker">WHY ZION</span><h2>Built around <span>your progress.</span></h2></div>
            <div className="why-grid">
              {[
                ['01', 'Updated Curriculum', 'Designed around annual coding changes and current learning needs.'],
                ['02', 'Practical Exercises', 'Move beyond theory with scenarios, records and coding practice.'],
                ['03', 'Live Doubt Clearing', 'Get help understanding difficult concepts and coding decisions.'],
                ['04', 'Mock Examinations', 'Practice under exam-style conditions and learn from mistakes.'],
                ['05', 'Small-Batch Focus', 'A learning model designed to encourage interaction and feedback.'],
                ['06', 'Student Support', 'Revision, assessment feedback and guidance throughout the program.'],
              ].map(([n, t, d]) => <div className="why-card" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="section cpc-section">
          <div className="container cpc-inner">
            <div><span className="section-kicker light">OPTIONAL PATHWAY</span><h2>Preparing for the <span>CPC examination?</span></h2><p>Build exam readiness through coding scenarios, timed practice, mock examinations, error analysis and structured revision.</p></div>
            <div className="cpc-points"><div><CheckCircle2 /> Exam structure & strategy</div><div><CheckCircle2 /> Timed practice</div><div><CheckCircle2 /> Mock examinations</div><div><CheckCircle2 /> Error analysis</div></div>
          </div>
        </section>

        <section className="section certificate-section">
          <div className="container certificate-inner">
            <div className="certificate-copy"><span className="section-kicker">COMPLETION</span><h2>Earn your <span>Certificate of Completion.</span></h2><p>Students who successfully complete the institute's training program may receive an institute-issued certificate documenting their course completion.</p><div className="certificate-list"><span><CheckCircle2 /> Student name</span><span><CheckCircle2 /> Course & duration</span><span><CheckCircle2 /> Certificate number</span><span><CheckCircle2 /> Verification QR, if implemented</span></div></div>
            <div className="certificate-mock"><div className="cert-border"><Sparkles /><small>ZION MEDICAL CODING ACADEMY</small><h3>Certificate</h3><em>of Completion</em><div className="cert-line" /><strong>STUDENT NAME</strong><p>has successfully completed the<br />Medical Coding Training Program</p><div className="cert-bottom"><span>Trainer Signature</span><span>Certificate No.</span></div></div></div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-inner">
            <div className="faq-intro"><span className="section-kicker">FAQ</span><h2>Questions?<br /><span>We have answers.</span></h2><p>More details about the program can be added here as the institute finalizes its policies.</p></div>
            <div className="faq-list">
              {faqs.map(([q, a], i) => <div className={openFaq === i ? 'faq open' : 'faq'} key={q}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown className={openFaq === i ? 'rotate' : ''} /></button>
                {openFaq === i && <p>{a}</p>}
              </div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div><span className="section-kicker light">START YOUR JOURNEY</span><h2>Ready to explore <span>medical coding?</span></h2><p>Course fees, batch timings, WhatsApp number and enrollment details can be added here later.</p></div>
            <div className="contact-actions"><button className="white-btn" onClick={() => alert('Enrollment details will be added soon.')}>Request Enrollment <ArrowRight size={18} /></button><button className="outline-white" onClick={() => alert('Demo class details will be added soon.')}>Request a Demo</button></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><div className="brand"><span className="brand-mark"><HeartPulse size={23} /></span><span><strong>ZION</strong><small>MEDICAL CODING ACADEMY</small></span></div><p>Professional online training in U.S. medical coding.</p></div>
          <div><h4>Explore</h4><button onClick={() => go('about')}>About</button><button onClick={() => go('courses')}>Courses</button><button onClick={() => go('curriculum')}>Curriculum</button><button onClick={() => go('trainer')}>Trainer</button></div>
          <div><h4>Program</h4><button onClick={() => go('faq')}>FAQs</button><button onClick={() => go('contact')}>Registration</button><button onClick={() => go('contact')}>Contact</button></div>
          <div><h4>Important</h4><p>Institute training certificates are separate from professional certification credentials.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Zion Medical Coding Academy</span><span>U.S. Medical Coding Education</span></div>
      </footer>
    </div>
  )
}

export default App