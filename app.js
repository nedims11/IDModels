/* ==================================================================
   Instructional Design Models – vanilla JS
   All content lives in the MODEL / SCENARIOS / COMPARE constants.
   Rendering: template-literal strings swapped into the DOM on state
   change; interactions handled through a single click delegator.
   ================================================================== */

// ───── Theme tokens (kept in sync with styles.css :root) ─────
const C = {
  text:  '#2d2318',
  muted: '#8a7a6a',
  dim:   '#c4b4a4',
  addie: '#b8692a', addieL: '#fef3e8',
  sam:   '#3d7d47', samL:   '#e6f4e8',
  back:  '#3d60a0', backL:  '#e6edf8',
};

// ───── Content ─────
const MODEL = {
  addie: {
    id: 'addie', name: 'ADDIE', badge: 'Sequential',
    color: C.addie, light: C.addieL,
    tagline: 'A systematic five-phase process built for thoroughness.',
    about: "ADDIE ensures nothing is skipped. Each phase feeds the next, analyze first, then design, then develop, creating a structured, sequential progression through the instructional design process. It remains the most widely used framework in corporate and government training, best suited for large-scale, high-stakes projects where time and budget allow for rigor.\n\nHowever, ADDIE is often criticized as a waterfall model: its linear structure can feel rigid and slow to adapt when project needs shift mid-development. \n\nMany scholars also argue that ADDIE is less a prescriptive model and more a broad conceptual framework, a way of organizing thinking rather than a step-by-step methodology. That said, the full model includes revision arrows between phases: analysis informs design, but discoveries during design can send the designer back to analysis. This built-in feedback loop softens the rigidity critique and reflects how experienced designers actually use the framework in practice.",
    phases: [
      { id: 'analyze',   label: 'Analyze ',   num: 1, x: 150, y: 46,
        headline: 'Understand the gap',
        desc: "Before building anything, identify who the learners are, what problem you're solving, and the constraints you're working within.",
        questions: ['What performance gap are we solving?', 'Who are the learners and what do they already know?', 'What are the time, budget, and technology constraints?'],
        example: 'Interviewing nurses and reviewing incident reports to understand root causes of medication errors, before a single slide is built.' },
      { id: 'design',    label: 'Design ',    num: 2, x: 246, y: 118,
        headline: 'Plan the architecture',
        desc: 'Write measurable learning objectives, determine assessment strategies, and sequence the content, all before creating anything.',
        questions: ['What will learners do differently after training?', 'How will you know if objectives were met?', 'What sequence makes the most sense?'],
        example: 'Writing SMART objectives and mapping a full storyboard showing module flow, interactions, and assessment checkpoints.' },
      { id: 'develop',   label: 'Develop ',   num: 3, x: 210, y: 230,
        headline: 'Build the materials',
        desc: 'Create the actual content, videos, slides, activities, facilitator guides — guided tightly by the design blueprint from phase 2.',
        questions: ['What format best serves these learners?', 'Who reviews for accuracy and tone?', 'What authoring tools are needed?'],
        example: 'Producing e-learning modules in Articulate Storyline, recording scenario-based videos, and writing manager job aids.' },
      { id: 'implement', label: 'Implement ', num: 4, x: 90,  y: 230,
        headline: 'Deliver the experience',
        desc: 'Roll out the training to learners. Support facilitators, monitor delivery, and address any live issues that surface.',
        questions: ['How will learners access the training?', 'What support do facilitators need?', 'Are all technical systems ready?'],
        example: 'Publishing the module to the LMS, running a live pilot session with a test cohort, and logging all issues found.' },
      { id: 'evaluate',  label: 'Evaluate ',  num: 5, x: 54,  y: 118,
        headline: 'Measure & improve',
        desc: 'Assess whether training achieved its objectives — during development (formative) and after delivery (summative).',
        questions: ['Did learners meet the learning objectives?', 'What changed in on-the-job performance?', 'What would you do differently?'],
        example: 'Post-training quiz results, 30-day manager observations, and Kirkpatrick Level 3 behavior change surveys.' },
    ],
  },
  sam: {
    id: 'sam', name: 'SAM', badge: 'Iterative',
    color: C.sam, light: C.samL,
    tagline: 'Build fast, test early, improve in rapid cycles.',
    about: ' The Successive Approximation Model, developed by Michael Allen of Allen Interactions, was built as a direct challenge to the "design everything before you build anything" logic that defines waterfall approaches. Where ADDIE asks designers to fully analyze, then fully design, then fully develop before a learner ever sees the product, SAM asks: why wait? /n/nThe model operates in three phases: Preparation, Iterative Design, and Iterative Development, but the defining characteristic is what happens inside those phases: rapid prototyping, stakeholder feedback, and continuous refinement. \n\nEach pass through the cycle produces something closer to the ideal, which is where the name comes from. "Successive approximation" means you are not aiming for perfection on the first build; you are aiming for good enough to learn from, then better, then great. This makes SAM particularly well-suited to agile environments, corporate training contexts, and any project where time-to-delivery is a real constraint. \n\nIt is worth noting that SAM is not simply fast ADDIE; it is a fundamentally different philosophy. Evaluation is not a phase you reach at the end; it is embedded in every iteration. Stakeholders are not consulted once during analysis and then again at review; they are active participants throughout. For designers working in organizations that cannot afford to wait months for a finished product, SAM offers a disciplined path to shipping something good, with a clear mechanism for making it great.',
    phases: [
      { id: 'prep',       label: 'Preparation ',      num: 1, x: 150, y: 52,
        headline: 'Gather & align',
        desc: 'Hold a "Savvy Start", an intensive kickoff with SMEs, stakeholders, and designers to collect what exists and rapidly prototype a first direction.',
        questions: ['What do stakeholders actually need (not just want)?', 'What content, data, or expertise already exists?', 'What are the non-negotiables?'],
        example: 'A two-day workshop where the entire team rapid-prototypes an initial module and puts it in front of a stakeholder before leaving the room.' },
      { id: 'iterdesign', label: 'Iterative Design', num: 2, x: 232, y: 196,
        headline: 'Prototype → feedback → refine',
        desc: 'Build fast, rough prototypes, paper, wireframes, click-throughs. Get feedback immediately. Improve the design. Repeat until the approach is proven.',
        questions: ['What is the simplest thing we can build and test today?', 'Who can give us real feedback right now?', 'What changed based on the last review?'],
        example: 'Building a clickable wireframe of a scenario in a few hours, testing it with three actual learners, and iterating the flow same-day.' },
      { id: 'iterdev',    label: 'Iterative Dev.',    num: 3, x: 68,  y: 196,
        headline: 'Alpha → Beta → Gold',
        desc: 'Develop through three successively polished releases. Each pass is tested with real learners and improved before the next begins.',
        questions: ['Is alpha ready for a real learner test?', 'What did beta testing reveal that needs fixing?', 'Has gold been formally approved?'],
        example: 'Alpha: rough content with placeholder media. Beta: tested with 5 real learners and revised. Gold: QA-passed and signed off.' },
    ],
  },
  backward: {
    id: 'backward', name: 'Backward Design', badge: 'Outcome-first',
    color: C.back, light: C.backL,
    tagline: 'Start at the destination. Design everything backward from there.',
    about: 'Developed by Grant Wiggins and Jay McTighe (Understanding by Design), Backward Design flips the sequence that most designers follow by instinct. The natural tendency is to start with content, the textbook, the subject matter expert\'s slide deck, the list of topics, and then build activities around it. Backward Design rejects that sequence entirely. It begins with what the learner will be able to do in the real world once learning is complete. \n\nThat transfer goal comes first. From there, the designer asks: how would we know if the learner actually achieved it? That question drives the assessment. Only after both decisions are made does the designer turn to instructional content and activities. \n\nThe practical implication is quietly liberating. Once the transfer goal and assessment are locked in, content selection becomes a filter rather than a starting point. You are no longer asking "what should I include?", you are asking "does this content actually move the learner toward the goal?" Anything that does not serve the outcome, regardless of how thoroughly it appears in the source material, can be set aside. \n\nThat shift in thinking alone changes how designers approach content curation. Backward Design is most often associated with K-12 and higher education, largely because Wiggins and McTighe wrote primarily for those audiences. That attribution, however, undersells the model\'s range. The underlying logic, define the destination, determine the evidence, then plan the path, applies equally well to corporate onboarding, compliance training, and leadership development. Any context where designers risk confusing "covering content" with "producing learning" is a context where Backward Design adds value.',
    phases: [
      { id: 'results',  label: 'Desired Results', num: 1, x: 72,  y: 108,
        headline: 'What is the destination?',
        desc: 'Define the big ideas, essential questions, and transfer goals — what learners should deeply understand and apply, long after the course ends.',
        questions: ['What transfer to real life is expected?', 'What big ideas anchor this content?', 'What essential questions should learners wrestle with?'],
        example: 'A history unit goal: "Students can construct a historical argument using primary sources as evidence." Defined before any activities are planned.' },
      { id: 'evidence', label: 'Evidence',        num: 2, x: 220, y: 108,
        headline: 'How will you know they got there?',
        desc: 'Design assessments before creating content. Focus on performance tasks that demonstrate genuine understanding, not just recall of facts.',
        questions: ['What task proves real transfer?', 'What does "good enough" look like?', 'What other evidence (quizzes, observations) supports it?'],
        example: "An annotated portfolio of primary sources plus a written argument essay, designed completely before the unit's first lesson is planned." },
      { id: 'learning', label: 'Learning Plan',   num: 3, x: 368, y: 108,
        headline: 'What experiences lead there?',
        desc: 'Now — and only now — plan the activities, content, and instruction that will prepare learners to succeed at the assessment you already designed.',
        questions: ['What knowledge and skills are prerequisites?', 'What activities develop the required understanding?', 'Is every activity aligned to the assessment?'],
        example: 'Document analysis workshops, structured debates, peer feedback sessions — all designed specifically to build toward the argument essay.' },
    ],
  },
};

const SCENARIOS = [
  { text: 'A large bank is rolling out compliance certification to 3,000 employees across 12 offices. Budget is healthy and the deadline is 6 months away.',
    answer: 'addie', hint: 'Think: scale, formality, available time.',
    why: "ADDIE's systematic phases are built for large, formal projects with adequate time and resources. You can afford deep analysis and thorough design before a single piece of content is built." },
  { text: "A startup's sales team needs a product demo skills module. The new product launches in 3 weeks and you have one SME who can meet twice a week.",
    answer: 'sam', hint: 'Think: tight deadline, limited SME time.',
    why: "SAM's rapid prototyping cycles let you ship something solid fast and improve it after launch. The iterative design phase also extracts maximum value from limited SME availability." },
  { text: 'A high school teacher is designing a semester-long unit where students should genuinely understand climate policy and propose real solutions.',
    answer: 'backward', hint: 'Think: transfer, deep understanding, real-world application.',
    why: 'Backward Design starts with the transfer goal (propose real climate solutions) and builds everything backward from there — ensuring every activity actually leads to that outcome.' },
  { text: "You're redesigning hospital new-hire onboarding. Your SME is busy, stakeholders have strong opinions, and you cannot afford a big surprise at sign-off.",
    answer: 'sam', hint: 'Think: early buy-in, limited access, risk management.',
    why: "SAM's Savvy Start and iterative cycles surface stakeholder feedback at every pass, exactly what you need when you can't do a big reveal at the end and risk major revision." },
  { text: 'A university is redesigning its entire 2-year MBA curriculum to develop leaders who can navigate real business ambiguity, not just pass exams.',
    answer: 'backward', hint: 'Think: deep transfer, long-term outcomes, curriculum design.',
    why: 'Backward Design starts with the transfer goal (navigate real business ambiguity) and works backward through assessment design before planning a single lecture or case study.' },
  { text: 'A fire department needs to certify 500 firefighters in a new emergency response protocol. The training must be standardized, documented, and meet regulatory requirements.',
    answer: 'addie', hint: 'Think: compliance, standardization, documentation.',
    why: "ADDIE's structured phases produce the thorough documentation, standardized content, and audit trail that regulated industries require. There's no shortcut when certification is on the line." },
  { text: 'An EdTech startup needs to onboard new engineers to a complex legacy codebase. The first new hire starts in 10 days.',
    answer: 'sam', hint: 'Think: urgency, prototype fast, refine after.',
    why: "SAM lets you build a rough-but-usable onboarding guide in days, get feedback from the first hire, and improve it iteratively. Waiting for a perfect ADDIE-designed course would mean missing the deadline entirely." },
  { text: 'A 4th-grade science teacher is designing a 6-week unit on ecosystems. She wants students to genuinely understand how living systems are interdependent — not just memorize food chains.',
    answer: 'backward', hint: 'Think: conceptual understanding, not just content coverage.',
    why: 'Backward Design ensures every activity and discussion is anchored to the big idea of interdependence. Starting with that transfer goal prevents the common trap of covering content without building real understanding.' },
  { text: 'The military is developing a highly technical aircraft maintenance course that requires mastery of precise procedures, must be certified by a regulatory body, and will train 1,200 technicians over 2 years.',
    answer: 'addie', hint: 'Think: precision, certification, scale, long timeline.',
    why: "ADDIE's rigorous analysis and design phases are essential here — errors in maintenance training have life-safety consequences. The structured approach ensures nothing is left to chance before content is built or delivered." },
  { text: 'A non-profit needs to train 80 volunteers on a new case management software system. The first cohort goes live in 2 weeks and the software is still being finalized.',
    answer: 'sam', hint: 'Think: moving target, short timeline, iterative feedback.',
    why: "SAM thrives when the content is still evolving. Rapid prototypes and short cycles let you update training materials in step with the software changes, rather than delivering a finished course that's already out of date." },
];

const COMPARE = [
  { aspect: 'Philosophy',   addie: 'Systematic & thorough',  sam: 'Iterative & lean',           backward: 'Outcome-first' },
  { aspect: 'Process flow', addie: 'Linear phases →',         sam: 'Repeating cycles ↻',         backward: 'Design backward ←' },
  { aspect: 'Timeline',     addie: 'Weeks to months',         sam: 'Days to weeks',              backward: 'Flexible' },
  { aspect: 'Best for',     addie: 'Large-scale, formal',     sam: 'Rapid, agile teams',         backward: 'Curriculum & deep learning' },
  { aspect: 'Risk profile', addie: 'Issues surface late',     sam: 'Low — test early & often',   backward: 'Alignment built in from the start' },
  { aspect: 'Learner role', addie: 'Recipient of training',   sam: 'Tester & co-designer',       backward: 'Central to all planning decisions' },
];

// ───── State ─────
const state = {
  tab:         localStorage.getItem('idm-tab')   || 'explore',
  model:       localStorage.getItem('idm-model') || 'addie',
  activePhase: null,
  scenarioIdx: 0,
  chosen:      null,
};

function setState(patch) {
  Object.assign(state, patch);
  render();
}

// ───── Utilities ─────
const esc = s => String(s).replace(/[&<>"']/g, c => (
  { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]
));

// Build an inline style for per-model CSS vars.
// light becomes `--ml` so styles.css can reference it.
const modelVars = m => `--m:${m.color};--ml:${m.light};`;

// ───── SVG helpers ─────
function phaseNodeSVG(p, { cx, cy, r, color, active, idx }) {
  const words = p.label.split(' ');
  const multi = words.length > 1;
  const glowR = r + 7;
  const numY  = cy + (multi ? -r * 0.25 : -r * 0.05) + 7;
  const shadow = active
    ? `drop-shadow(0 5px 18px ${color}55)`
    : `drop-shadow(0 2px 8px ${color}22)`;
  const labelFill = active ? 'rgba(255,255,255,0.9)' : color;

  let labelSVG;
  if (multi) {
    labelSVG = `
      <text text-anchor="middle" font-size="13" font-weight="700"
            fill="${labelFill}" font-family="Nunito,sans-serif"
            style="pointer-events:none">
        <tspan x="${cx}" y="${cy + r * 0.28}">${esc(words[0])}</tspan>
        <tspan x="${cx}" dy="16">${esc(words.slice(1).join(' '))}</tspan>
      </text>`;
  } else {
    labelSVG = `
      <text x="${cx}" y="${cy + r * 0.5}" text-anchor="middle" font-size="13"
            font-weight="700" fill="${labelFill}"
            font-family="Nunito,sans-serif" style="pointer-events:none">
        ${esc(p.label)}
      </text>`;
  }

  return `
    <g class="phase-node" data-phase="${p.id}" role="button" aria-label="${esc(p.label)}"
       style="cursor:pointer">
      <circle cx="${cx}" cy="${cy}" r="${glowR}"
              fill="${active ? color : 'transparent'}"
              opacity="${active ? 0.12 : 0}"
              style="transition:opacity 0.2s"/>
      <circle cx="${cx}" cy="${cy}" r="${r}"
              fill="${active ? color : '#fff'}"
              stroke="${color}" stroke-width="2.5"
              style="transition:all 0.22s ease; filter:${shadow}"/>
      <text x="${cx}" y="${numY}" text-anchor="middle" font-size="20"
            font-weight="800" fill="${active ? '#fff' : color}"
            font-family="Nunito,sans-serif" style="pointer-events:none">
        ${idx + 1}
      </text>
      ${labelSVG}
    </g>`;
}

function addieDiagram(activeId) {
  const { phases, color } = MODEL.addie;
  const cx0 = 150, cy0 = 148, NR = 40;

  const markers = phases.map((_, i) => `
    <marker id="aa${i}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0.5 L0,7.5 L8,4 z" fill="${color}" opacity="0.99"/>
    </marker>`).join('');

  const arrows = phases.map((p, i) => {
    const nxt = phases[(i + 1) % phases.length];
    const mx = (p.x + nxt.x) / 2, my = (p.y + nxt.y) / 2;
    const dx = mx - cx0, dy = my - cy0;
    const l = Math.sqrt(dx*dx + dy*dy) || 1;
    const qx = mx + (dx / l) * 26, qy = my + (dy / l) * 26;
    const adx = nxt.x - p.x, ady = nxt.y - p.y;
    const ad = Math.sqrt(adx*adx + ady*ady);
    const sx = p.x   + (adx / ad) * NR;
    const sy = p.y   + (ady / ad) * NR;
    const ex = nxt.x - (adx / ad) * NR;
    const ey = nxt.y - (ady / ad) * NR;
    return `<path d="M ${sx} ${sy} Q ${qx} ${qy} ${ex} ${ey}"
                  fill="none" stroke="${color}" stroke-width="2" opacity="0.99"
                  marker-end="url(#aa${i})"/>`;
  }).join('');

  const nodes = phases.map((p, i) =>
    phaseNodeSVG(p, { cx: p.x, cy: p.y, r: NR, color, active: p.id === activeId, idx: i })
  ).join('');

  return `
    <svg viewBox="0 0 300 295" style="width:100%;max-width:320px;overflow:visible;display:block">
      <defs>${markers}</defs>
      <text x="${cx0}" y="${cy0 + 8}" text-anchor="middle" font-size="22" font-weight="800"
            fill="${color}" opacity="0.99" font-family="Nunito,sans-serif" letter-spacing="5">ADDIE</text>
      ${arrows}
      ${nodes}
    </svg>`;
}

function samDiagram(activeId) {
  const { phases, color } = MODEL.sam;
  const CX = 150, CY = 148, CR = 96, NR = 40;
  const pos = [
    { x: CX,                              y: CY - CR },
    { x: CX + CR * Math.cos(Math.PI / 6), y: CY + CR * Math.sin(Math.PI / 6) },
    { x: CX - CR * Math.cos(Math.PI / 6), y: CY + CR * Math.sin(Math.PI / 6) },
  ];

  const markers = phases.map((_, i) => `
    <marker id="sa${i}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0.5 L0,7.5 L8,4 z" fill="${color}" opacity="0.99"/>
    </marker>`).join('');

  const arrows = pos.map((p, i) => {
    const nxt = pos[(i + 1) % pos.length];
    const mx = (p.x + nxt.x) / 2, my = (p.y + nxt.y) / 2;
    const dx = mx - CX, dy = my - CY;
    const l = Math.sqrt(dx*dx + dy*dy) || 1;
    const qx = mx + (dx / l) * 28, qy = my + (dy / l) * 28;
    const adx = nxt.x - p.x, ady = nxt.y - p.y;
    const ad = Math.sqrt(adx*adx + ady*ady);
    const sx = p.x   + (adx / ad) * NR;
    const sy = p.y   + (ady / ad) * NR;
    const ex = nxt.x - (adx / ad) * NR;
    const ey = nxt.y - (ady / ad) * NR;
    return `<path d="M ${sx} ${sy} Q ${qx} ${qy} ${ex} ${ey}"
                  fill="none" stroke="${color}" stroke-width="2" opacity="0.99"
                  marker-end="url(#sa${i})"/>`;
  }).join('');

  const nodes = phases.map((p, i) =>
    phaseNodeSVG(p, { cx: pos[i].x, cy: pos[i].y, r: NR, color, active: p.id === activeId, idx: i })
  ).join('');

  return `
    <svg viewBox="0 0 300 275" style="width:100%;max-width:320px;overflow:visible;display:block">
      <defs>${markers}</defs>
    
      ${arrows}
      ${nodes}
    </svg>`;
}

function backwardDiagram(activeId) {
  const { phases, color, light } = MODEL.backward;
  const W = 460, H = 230, NR = 46;

  const forwardMarkers = phases.slice(0, -1).map((_, i) => `
    <marker id="bc${i}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0.5 L0,7.5 L8,4 z" fill="${color}" opacity="0.99"/>
    </marker>`).join('');

  const arrows = phases.slice(0, -1).map((p, i) => {
    const nxt = phases[i + 1];
    return `<line x1="${p.x + NR + 2}" y1="${p.y}" x2="${nxt.x - NR - 2}" y2="${nxt.y}"
                  stroke="${color}" stroke-width="2" opacity="0.66"
                  marker-end="url(#bc${i})"/>`;
  }).join('');

  const nodes = phases.map((p, i) =>
    phaseNodeSVG(p, { cx: p.x, cy: p.y, r: NR, color, active: p.id === activeId, idx: i })
  ).join('');

  return `
    <svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:480px;overflow:visible;display:block">
      <defs>
        ${forwardMarkers}
        <marker id="bplan" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto">
          <path d="M8,0.5 L8,7.5 L2,4 z" fill="${color}" opacity="0.66"/>
        </marker>
        <marker id="bteach" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0.5 L0,7.5 L8,4 z" fill="${color}" opacity="0.66"/>
        </marker>
      </defs>
      <path d="M ${phases[2].x + NR + 4} 34 Q ${W/2} 8 ${phases[0].x - NR - 4} 34"
            fill="none" stroke="${color}" stroke-width="1.8" opacity="0.99"
            stroke-dasharray="7,5" marker-end="url(#bplan)"/>
      <rect x="${W/2 - 118}" y="6" width="236" height="20" rx="10" fill="${light}" opacity="0.9"/>
      <text x="${W/2}" y="20" text-anchor="middle" font-size="13" fill="${color}" opacity="0.85"
            font-family="Nunito,sans-serif" font-weight="700">← plan backward from the outcome</text>
      ${arrows}
      <path d="M ${phases[0].x - NR - 4} ${H - 34} Q ${W/2} ${H - 8} ${phases[2].x + NR + 4} ${H - 34}"
            fill="none" stroke="${color}" stroke-width="1.8" opacity="0.99"
            stroke-dasharray="7,5" marker-end="url(#bteach)"/>
      <rect x="${W/2 - 90}" y="${H - 22}" width="180" height="20" rx="10" fill="${light}" opacity="0.9"/>
      <text x="${W/2}" y="${H - 8}" text-anchor="middle" font-size="13" fill="${color}" opacity="0.85"
            font-family="Nunito,sans-serif" font-weight="700">teach forward →</text>
      ${nodes}
    </svg>`;
}

const DIAGRAM_BY_MODEL = {
  addie: addieDiagram,
  sam: samDiagram,
  backward: backwardDiagram,
};

// ───── Tab renderers ─────
function renderPhaseDetail(model, phaseId) {
  const styleVars = modelVars(model);

  if (!phaseId) {
    const rows = model.phases.map((p, i) => `
      <div class="glance-row" style="${styleVars}">
        <div class="glance-num">${i + 1}</div>
        <div class="glance-label">${esc(p.label)}</div>
        <div class="glance-headline">${esc(p.headline)}</div>
      </div>`).join('');

    return `
      <div class="detail overview" style="${styleVars}">
        <div class="badge-row">
          <div class="badge-dot"></div>
          <span class="badge-text">${esc(model.badge)}</span>
        </div>
        <div class="model-name">${esc(model.name)}</div>
        <div class="model-about">${model.about.split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join('')}</div>
        <div class="callout">Click any numbered phase in the diagram to explore it</div>
        <div class="glance-block">
          <div class="small-label">Phases at a glance</div>
          ${rows}
        </div>
      </div>`;
  }

  const ph = model.phases.find(p => p.id === phaseId);
  if (!ph) return '';

  const questions = ph.questions.map(q => `
    <div class="question">
      <span class="q-mark">•</span>
      <span>${esc(q)}</span>
    </div>`).join('');

  return `
    <div class="detail fade-slide" style="${styleVars}">
      <div class="phase-header">
        <div class="phase-badge">${ph.num}</div>
        <div>
          <div class="phase-title">${esc(ph.label)}</div>
          <div class="phase-headline">${esc(ph.headline)}</div>
        </div>
      </div>
      <div class="phase-desc">${esc(ph.desc)}</div>
      <div>
        <div class="small-label">Key Questions</div>
        <div class="questions">${questions}</div>
      </div>
      <div class="example-box">
        <div class="example-label">Real-world example</div>
        <div class="example-text">${esc(ph.example)}</div>
      </div>
    </div>`;
}

function renderExplore() {
  const model = MODEL[state.model];
  const isWide = model.id === 'backward';
  const diagram = DIAGRAM_BY_MODEL[model.id](state.activePhase);

  const pills = Object.values(MODEL).map(m => `
    <button class="pill ${m.id === state.model ? 'active' : ''}"
            style="${modelVars(m)}"
            data-model="${m.id}">${esc(m.name)}</button>`).join('');

  return `
    <div class="explore">
      <div class="model-picker">${pills}</div>
      <div class="explore-body ${isWide ? 'wide' : ''}">
        <div class="diagram-card card">
          ${diagram}
          <div class="diagram-hint">Click a ${isWide ? 'stage' : 'phase'} to explore it</div>
        </div>
        <div class="detail-card card">
          ${renderPhaseDetail(model, state.activePhase)}
        </div>
      </div>
    </div>`;
}

function renderCompare() {
  const mIds = ['addie', 'sam', 'backward'];

  const headCells = mIds.map(id => {
    const m = MODEL[id];
    return `
      <div class="compare-head-cell" style="${modelVars(m)}">
        <div class="compare-head-name">${esc(m.name)}</div>
        <div class="compare-head-badge">${esc(m.badge)}</div>
      </div>`;
  }).join('');

  const bodyRows = COMPARE.map((row, ri) => {
    const cells = mIds.map(id => `
      <div class="compare-cell">${esc(row[id])}</div>`).join('');
    return `
      <div class="compare-row compare-body ${ri % 2 ? 'alt' : ''}">
        <div class="compare-aspect">${esc(row.aspect)}</div>
        ${cells}
      </div>`;
  }).join('');

  return `
    <div class="compare">
      <div class="compare-table card">
        <div class="compare-row">
          <div class="compare-head-label">Aspect</div>
          ${headCells}
        </div>
        ${bodyRows}
      </div>
    </div>`;
}

function renderPractice() {
  const mIds = ['addie', 'sam', 'backward'];
  const sc = SCENARIOS[state.scenarioIdx];
  const chosen = state.chosen;

  const dots = SCENARIOS.map((_, i) =>
    `<button class="dot ${i === state.scenarioIdx ? 'active' : ''}" data-scenario="${i}" aria-label="Scenario ${i + 1}"></button>`
  ).join('');

  const choices = mIds.map(id => {
    const m = MODEL[id];
    const isChosen = chosen === id;
    const isCorrect = id === sc.answer;
    let cls = 'choice';
    let suffix = '';
    if (chosen) {
      if (isCorrect)      { cls += ' correct'; suffix = ' ✓'; }
      else if (isChosen)  { cls += ' wrong';   suffix = ' ✗'; }
      else                { cls += ' dimmed'; }
    }
    return `
      <button class="${cls}" style="${modelVars(m)}" data-choice="${id}">
        ${esc(m.name)}${suffix}
      </button>`;
  }).join('');

  let feedback = '';
  if (chosen) {
    const correct = chosen === sc.answer;
    const answerModel = MODEL[sc.answer];
    feedback = `
      <div class="feedback ${correct ? '' : 'wrong-fb'}" style="${modelVars(answerModel)}">
        <div class="feedback-head">
          ${correct ? '✓ Correct!' : `Not quite, best fit is ${esc(answerModel.name)}.`}
        </div>
        ${esc(sc.why)}
        <div>
          <button class="next-btn" data-action="next" style="${modelVars(answerModel)}">
            Next scenario →
          </button>
        </div>
      </div>`;
  }

  return `
    <div class="practice">
      <div class="practice-heading">
        <div class="h">Scenario Matcher</div>
        <div class="sub">Read each scenario and pick the model that fits best. You'll get immediate feedback explaining why.</div>
      </div>
      <div class="practice-card card">
        <div class="practice-card-head">
          <div class="scenario-count">Scenario ${state.scenarioIdx + 1} of ${SCENARIOS.length}</div>
          <div class="dots">${dots}</div>
        </div>
        <div class="scenario-text">
          ${esc(sc.text)}
          ${!chosen ? `<div class="scenario-hint">💡 ${esc(sc.hint)}</div>` : ''}
        </div>
        <div class="choice-row ${chosen ? 'answered' : ''}">${choices}</div>
        ${feedback}
      </div>
    </div>`;
}

// ───── Main render ─────
function render() {
  // Tabs
  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === state.tab);
  });
  const main = document.getElementById('main');
  main.innerHTML =
    state.tab === 'explore'  ? renderExplore()  :
    state.tab === 'compare'  ? renderCompare()  :
                               renderPractice();
}

// ───── Event handling (delegated) ─────
document.addEventListener('click', e => {
  const t = e.target.closest('[data-tab]');
  if (t) {
    localStorage.setItem('idm-tab', t.dataset.tab);
    setState({ tab: t.dataset.tab, activePhase: null, chosen: null });
    return;
  }

  const m = e.target.closest('[data-model]');
  if (m) {
    localStorage.setItem('idm-model', m.dataset.model);
    setState({ model: m.dataset.model, activePhase: null });
    return;
  }

  const node = e.target.closest('.phase-node');
  if (node) {
    const next = node.dataset.phase === state.activePhase ? null : node.dataset.phase;
    setState({ activePhase: next });
    return;
  }

  const dot = e.target.closest('[data-scenario]');
  if (dot) {
    setState({ scenarioIdx: Number(dot.dataset.scenario), chosen: null });
    return;
  }

  const choice = e.target.closest('[data-choice]');
  if (choice && !state.chosen) {
    setState({ chosen: choice.dataset.choice });
    return;
  }

  const action = e.target.closest('[data-action]');
  if (action && action.dataset.action === 'next') {
    setState({
      scenarioIdx: (state.scenarioIdx + 1) % SCENARIOS.length,
      chosen: null,
    });
  }
});

// ───── Init ─────
render();
