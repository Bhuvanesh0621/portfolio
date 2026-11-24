// Pure Node.js ATS-compliant vector PDF generator for Bhuvanesh Kumar
const fs = require('fs');
const path = require('path');

function createResumePDF(outputPath) {
  // Page size: A4 = 595.28 x 841.89 points
  const pw = 595.28;
  const ph = 841.89;

  let stream = [];

  // Helper to add commands
  const add = (cmd) => stream.push(cmd);

  // Background subtle fill (pure white for ATS compatibility)
  add('1 1 1 rg');
  add(`0 0 ${pw} ${ph} re f`);

  // Accent header band (dark charcoal #0F172A with subtle purple border)
  add('0.06 0.08 0.12 rg'); // #0F141F
  add(`0 ${ph - 110} ${pw} 110 re f`);

  // Purple accent rule line below header (#8B5CF6)
  add('0.54 0.36 0.96 RG');
  add('2.5 w');
  add(`0 ${ph - 110} m ${pw} ${ph - 110} l S`);

  // Text in header
  add('BT');
  // Name
  add('/F2 26 Tf'); // Helvetica-Bold 26
  add('1 1 1 rg'); // White
  add(`36 ${ph - 42} Td`);
  add('(BHUVANESH KUMAR M) Tj');
  add('ET');

  add('BT');
  // Title
  add('/F1 11 Tf'); // Helvetica 11
  add('0.78 0.65 0.98 rg'); // Light purple #C4B5FD
  add(`36 ${ph - 60} Td`);
  add('(SOFTWARE DEVELOPER  |  AI & WEB TECHNOLOGIES) Tj');
  add('ET');

  add('BT');
  // Contact details
  add('/F1 8.5 Tf');
  add('0.85 0.88 0.92 rg'); // Silver
  add(`36 ${ph - 78} Td`);
  add('(WhatsApp: +91 99411 35545   |   Email: bhuvaneshkumar299@gmail.com   |   LinkedIn: linkedin.com/in/bhuvaneshkumar0621) Tj');
  add('0 -13 Td');
  add('(GitHub: github.com/Bhuvanesh0621   |   Chennai, Tamil Nadu, India   |   B.Tech Information Technology (2023 - 2027)) Tj');
  add('ET');

  // Body layout
  let y = ph - 132;
  const leftX = 36;
  const rightX = pw - 36;
  const contentW = rightX - leftX;

  function drawSectionHeading(title) {
    y -= 14;
    // Section title
    add('BT');
    add('/F2 11 Tf');
    add('0.1 0.1 0.15 rg'); // Dark slate
    add(`${leftX} ${y} Td`);
    add(`(${title.toUpperCase()}) Tj`);
    add('ET');

    // Horizontal underline with purple accent
    add('0.54 0.36 0.96 RG');
    add('1 w');
    add(`${leftX} ${y - 4} m ${leftX + 45} ${y - 4} l S`);

    add('0.82 0.84 0.88 RG');
    add('0.5 w');
    add(`${leftX + 48} ${y - 4} m ${rightX} ${y - 4} l S`);

    y -= 16;
  }

  function drawText(text, size = 9, font = '/F1', r = 0.2, g = 0.2, b = 0.25, indent = 0) {
    add('BT');
    add(`${font} ${size} Tf`);
    add(`${r} ${g} ${b} rg`);
    add(`${leftX + indent} ${y} Td`);
    add(`(${escapePDF(text)}) Tj`);
    add('ET');
    y -= size + 3.5;
  }

  function drawBullet(text, boldPrefix = '', size = 8.5) {
    add('BT');
    add('/F2 8.5 Tf');
    add('0.54 0.36 0.96 rg'); // Purple bullet
    add(`${leftX + 8} ${y} Td`);
    add('(\\225) Tj'); // Bullet symbol
    add('ET');

    add('BT');
    if (boldPrefix) {
      add('/F2 8.5 Tf');
      add('0.1 0.1 0.15 rg');
      add(`${leftX + 20} ${y} Td`);
      add(`(${escapePDF(boldPrefix)}) Tj`);

      // Add following text
      add('/F1 8.5 Tf');
      add('0.25 0.25 0.3 rg');
      add(` (${escapePDF(text)}) Tj`);
    } else {
      add('/F1 8.5 Tf');
      add('0.25 0.25 0.3 rg');
      add(`${leftX + 20} ${y} Td`);
      add(`(${escapePDF(text)}) Tj`);
    }
    add('ET');
    y -= 12.5;
  }

  function escapePDF(str) {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)')
      .replace(/–/g, '-')
      .replace(/—/g, '-')
      .replace(/•/g, '*');
  }

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeading('Professional Summary');
  drawText('Passionate B.Tech Information Technology student at Sri Muthukumaran Institute of Technology with a strong', 8.5, '/F1', 0.2, 0.2, 0.25);
  drawText('foundation in software engineering, database management, and emerging web technologies. Proven track record', 8.5, '/F1', 0.2, 0.2, 0.25);
  drawText('of architecting practical, AI-driven applications including SmartPark.AI and BillBrain. Eager to contribute to high-impact', 8.5, '/F1', 0.2, 0.2, 0.25);
  drawText('software engineering teams through innovative problem solving, clean code architecture, and continuous learning.', 8.5, '/F1', 0.2, 0.2, 0.25);

  y -= 4;

  // 2. TECHNICAL EXPERTISE
  drawSectionHeading('Technical Expertise');
  drawBullet('C, Python, Java, JavaScript (ES6+), TypeScript', 'Programming Languages: ');
  drawBullet('HTML5, CSS3, React, Tailwind CSS, Vite, Responsive Web Design', 'Frontend & UI: ');
  drawBullet('Node.js, Express.js, RESTful APIs, JSON, WebSockets', 'Backend & APIs: ');
  drawBullet('Git, GitHub, VS Code, Cloudflare Pages, Linux Fundamentals, Postman', 'Tools & Platforms: ');
  drawBullet('Gemini AI API Integration, OCR (Tesseract.js), Exploratory Data Analysis (Pandas, NumPy)', 'AI & Data Concepts: ');

  y -= 4;

  // 3. FEATURED SOFTWARE PROJECTS
  drawSectionHeading('Featured Software Projects');

  // Project 1: SmartPark.AI
  add('BT');
  add('/F2 10 Tf');
  add('0.08 0.08 0.15 rg');
  add(`${leftX} ${y} Td`);
  add('(SmartPark.AI - AI-Based Smart Parking Management System) Tj');
  add('/F1 8.5 Tf');
  add('0.54 0.36 0.96 rg');
  add('  |  React, TypeScript, Tailwind, Gemini AI, OCR, Razorpay) Tj');
  add('ET');
  y -= 14;
  drawBullet('Architected a full-stack parking management system featuring real-time multi-level slot allocation telemetry across floors.');
  drawBullet('Integrated Google Gemini AI for conversational voice/text slot queries and Tesseract.js OCR for license plate recognition.');
  drawBullet('Implemented interactive bay selection, dynamic demand pricing algorithms, and instant simulated digital checkout workflows.');

  y -= 4;

  // Project 2: BillBrain
  add('BT');
  add('/F2 10 Tf');
  add('0.08 0.08 0.15 rg');
  add(`${leftX} ${y} Td`);
  add('(BillBrain - AI-Driven Payment & Subscription Intelligence) Tj');
  add('/F1 8.5 Tf');
  add('0.54 0.36 0.96 rg');
  add('  |  React, TypeScript, Node.js, NLP, Chart.js, Vite) Tj');
  add('ET');
  y -= 14;
  drawBullet('Developed a personal finance intelligence dashboard delivering automated recurring bill tracking and spend analytics.');
  drawBullet('Engineered natural-language expense search and multi-modal expense capture with Tamil and Tanglish voice logging support.');
  drawBullet('Created predictive category expenditure forecasting models to identify hidden subscriptions and prevent auto-debit overdrafts.');

  y -= 4;

  // Project 3: EBPL-PROJECT
  add('BT');
  add('/F2 10 Tf');
  add('0.08 0.08 0.15 rg');
  add(`${leftX} ${y} Td`);
  add('(EBPL Data Science & Predictive Analytics Pipeline) Tj');
  add('/F1 8.5 Tf');
  add('0.54 0.36 0.96 rg');
  add('  |  Python, Pandas, NumPy, Data Modeling) Tj');
  add('ET');
  y -= 14;
  drawBullet('Built exploratory data analytics pipelines in Python to extract statistical insights and model predictive data trends.');

  y -= 4;

  // 4. EDUCATION
  drawSectionHeading('Education');

  add('BT');
  add('/F2 9.5 Tf');
  add('0.08 0.08 0.15 rg');
  add(`${leftX} ${y} Td`);
  add('(Sri Muthukumaran Institute of Technology) Tj');
  add('/F1 9 Tf');
  add('0.4 0.4 0.45 rg');
  add(' - Chennai, Tamil Nadu) Tj');
  add('/F2 9 Tf');
  add('0.1 0.1 0.15 rg');
  add(`  (                                                              2023 - 2027) Tj`);
  add('ET');
  y -= 13;
  drawBullet('Bachelor of Technology (B.Tech) in Information Technology');
  drawBullet('Coursework: Data Structures, Algorithms, Object-Oriented Programming (Java), DBMS, Web Tech, Networks.');

  y -= 3;

  add('BT');
  add('/F2 9.5 Tf');
  add('0.08 0.08 0.15 rg');
  add(`${leftX} ${y} Td`);
  add('(Sivanthi Matriculation Higher Secondary School) Tj');
  add('/F1 9 Tf');
  add('0.4 0.4 0.45 rg');
  add(' - Chennai, Tamil Nadu) Tj');
  add('/F2 9 Tf');
  add('0.1 0.1 0.15 rg');
  add(`  (                                                                     2023) Tj`);
  add('ET');
  y -= 13;
  drawBullet('Higher Secondary Certificate (State Board of Tamil Nadu) - Focus: Mathematics, Physics, Chemistry, Biology.');

  y -= 4;

  // 5. CERTIFICATIONS & HONORS
  drawSectionHeading('Certifications & Honors');
  drawBullet('Elite Certification (Score: 64%) issued by IIT Kharagpur and Ministry of Education, Govt. of India.', 'NPTEL Online Certification - Programming in Java: ');
  drawBullet('Completed certified coursework covering Object-Oriented Principles, Multithreading, Exception Handling, and Collections.', 'Java Engineering Foundation: ');
  drawBullet('Demonstrated continuous learning and active repository version control on GitHub (@Bhuvanesh0621).', 'Open Source Contributor: ');

  // Compile PDF Stream
  const streamData = stream.join('\n');
  const streamLength = Buffer.byteLength(streamData, 'utf-8');

  let objects = [];
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pw} ${ph}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj`);
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamData}\nendstream\nendobj`);
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');
  objects.push('6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj');

  let xref = [];
  let offset = 0;
  let pdfOutput = '%PDF-1.4\n';
  offset = Buffer.byteLength(pdfOutput, 'utf-8');

  xref.push('0000000000 65535 f ');

  for (let i = 0; i < objects.length; i++) {
    xref.push(String(offset).padStart(10, '0') + ' 00000 n ');
    const objStr = objects[i] + '\n';
    pdfOutput += objStr;
    offset += Buffer.byteLength(objStr, 'utf-8');
  }

  const xrefOffset = offset;
  pdfOutput += `xref\n0 ${objects.length + 1}\n`;
  for (let i = 0; i < xref.length; i++) {
    pdfOutput += xref[i] + '\n';
  }

  pdfOutput += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  fs.writeFileSync(outputPath, pdfOutput, 'binary');
  console.log('PDF successfully created at:', outputPath, 'Size:', fs.statSync(outputPath).size, 'bytes');
}

// Generate to both public and dist directories
const publicPath = path.resolve('C:/Users/bhuva/.gemini/antigravity/scratch/jack-3d-portfolio/public/bhuvanesh-kumar-resume.pdf');
const distPath = path.resolve('C:/Users/bhuva/.gemini/antigravity/scratch/jack-3d-portfolio/dist/bhuvanesh-kumar-resume.pdf');

createResumePDF(publicPath);
if (fs.existsSync(path.dirname(distPath))) {
  createResumePDF(distPath);
}
