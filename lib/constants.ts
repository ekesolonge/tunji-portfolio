export const siteConfig = {
  name: "Olatunji Tajudeen",
  title: "Olatunji Tajudeen - Product Designer",
  description: "Crafting impactful user experiences and profitable solutions",
  url: "https://olatunjitaj.com",
};

export const PROJECTS = [
  {
    name: "Blukard",
    description: "Digitizing paper business cards to enhance professional networking",
    tags: ["WEB DESIGN", "WEB APP", "MOBILE APP"],
    thumbnail: "/images/projects/blukard/thumbnail.png",
    slug: "blukard",
    url: "https://blukard.com",
    full: {
      banner: "/images/projects/blukard/banner.png",
      bannerAlt: "Blukard app splash screen and authentication screen",
      banner1: "/images/projects/blukard/banner-1.png",
      banner1Alt: "Blukard app broadcasting and home screen",
      overview:
        "Blukard is an innovative digital platform aimed at digitizing the traditional paper business card experience by transforming it into a dynamic digital asset. This app is designed to boost networking opportunities and improve business visibility for both individual professionals and businesses.",
      problemStatement:
        "In a rapidly digitalizing world, traditional paper business cards are increasingly seen as outdated. They often get lost, are environmentally unfriendly, and fail to keep up with the dynamic nature of today’s professional connections. There’s also the challenge of enhancing visibility in competitive markets. Many professionals and small businesses struggle to find platforms that both increase their networking reach and give them space to showcase their services.",
      researchFindings: `<p>I researched with 20 participants in the corporate and entrepreneur category. Findings revealed that;<p/>
    <ol>
      <li>Preventing card loss or damage</li>
      <li>Avoiding inconvenient moments when users forget their cards,</li>
      <li>Ensuring timely follow-ups with connection</li>
      <li>Converting identities of businesses that have established a brand around their paper card to digital assets</li>
    </ol>
    <p>and are top priorities for users.<p/>
    `,
      notes: "/images/projects/blukard/notes.png",
      notesAlt: "Sticky notes outlining the design process",
      solutions: `<p>From this research, Blukard’s core features were developed, ensuring that pain points were addressed. Users can:</p>
    <div>
      <p><b>Maintain brand identity:</b> This addresses the challenge of transferring identities of paper cards to digital assets. Users can convert their existing paper cards to digital assets while maintaining their brand identities.</p>
      <p><b>Enhance networking:</b> By transitioning to digital cards, users can easily share their contact information via QR codes, or direct links reducing the chances of losing important connections</p>
      <p><b>Chat with connections:</b> An in app chat feature was conceived to ensure timely and convenient follow up with connects</p>
      <p><b>Marketplace:</b> Users can also showcase their services and businesses on Blukard’s marketplace, allowing for greater visibility and reach within a broader audience.</p>
    </div>
    `,
      flowchart: "/images/projects/blukard/flowchart.png",
      flowchartAlt: "Flowchart showing the user journey on the app",
      wireframe:
        "I proceeded with implementing  the low-fi concepts for blukard’s features based off of research findings.\n\nOnce the low-fi concepts were approved, I then worked on digitalising the designs.",
      wireframes: [
        { image: "/images/projects/blukard/wireframe.png", alt: "Wireframes of the mobile app" },
        { image: "/images/projects/blukard/wireframe-1.png", alt: "More wireframes of the mobile app" },
        { image: "/images/projects/blukard/wireframe-2.png", alt: "Wireframes of the web app" },
        { image: "/images/projects/blukard/wireframe-3.png", alt: "More wireframes of the web app" },
      ],
      components: [
        {
          title: "Network Enhancing",
          description:
            "Implementing the share card option to allow users easily share their digital cards via their preferred methods thereby  reducing chances of inconvenient moments",
          image: "/images/projects/blukard/component.png",
          alt: "share card screen on Blukard app",
        },
        {
          title: "Brand Identity Maintenance",
          description:
            "Utilising the snapshot option to allow users who already built an identity around their paper card to maintain same while transitioning to digital assets",
          image: "/images/projects/blukard/component-1.png",
          alt: "Snapshot screen on Blukard app",
        },
        {
          title: "Market place",
          description:
            "Implementing the marketplace feature to enhance visibility for business professionals within their vicinity",
          image: "/images/projects/blukard/component-2.png",
          alt: "Marketplace screen on Blukard app",
        },
        {
          title: "Prompt communication",
          description: "Users can easily follow up with connections directly in-app, ensuring timely and efficient networking.",
          image: "/images/projects/blukard/component-3.png",
          alt: "Chat screen on Blukard app",
        },
      ],
      screens: [
        {
          image: "/images/projects/blukard/screen.png",
          alt: "Referral, Broadcasting, Business and Market screens on Blukard web app",
          cover: false,
        },
        {
          image: "/images/projects/blukard/screen-1.png",
          alt: "Subscription, Market, Chat and FAQ screens on Blukard web app",
          cover: false,
        },
      ],
      reflection:
        "One of the challenges I faced was the case of transitioning users business identity, which was built around their paper cards, to digital ones. There were several issues, especially with users who had more complex card designs. To address this, I teamed up with the Development lead. We focused on what was most important to the users, allowing us to meet the product deadlines while continuing to work on the best long-term solution.\n\nAs Blukard grows in the market, I’ll continue to focus on iterative improvements based on user needs to drive growth.",
    },
  },
  {
    name: "AFF Flagit",
    description: "Enhancing the accountability of govt agencies on societal \nissues",
    tags: ["MOBILE APP"],
    thumbnail: "/images/projects/flagit/thumbnail.png",
    slug: "aff-flagit",
    url: "https://play.google.com/store/apps/details?id=com.iqubelabs.reportcorruption&hl=en",
    full: {
      banner: "/images/projects/flagit/banner.png",
      bannerAlt: "Flagit app splash screen and get started screen",
      banner1: "/images/projects/flagit/banner-1.png",
      banner1Alt: "Flagit app home screen and report screen",
      overview:
        "AFF FLAGIT is a transformative app aimed at improving the reporting and response mechanisms of government parastatals on critical societal issues such as bribery, domestic abuse, extortion, and other forms of misconduct in Nigeria. The app empowers citizens to report these issues efficiently while ensuring that their reports reach the appropriate authorities.",
      problemStatement:
        "In Nigeria, issues like bribery, domestic violence, and extortion are pervasive, yet reporting such abuses often remains a challenging task for citizens. Existing reporting channels can be inefficient, unresponsive, and sometimes dangerous, leading to under-reporting of incidents. Citizens often lack confidence that their reports will be addressed adequately or that the right authorities will take necessary actions. There’s a clear need for a platform that not only simplifies the reporting process but also provides a secure and anonymous way for users to gather and share evidence of abuse and misconduct.",
      researchFindings: `<p>Given the nature of the project, I needed to gather information from individuals who are either in the academic and public environment who could give information on incidents around their vicinity. Research interview done with 15 participants revealed concerns about;<p/>
    <ol>
      <li>Safety,</li>
      <li>Anonymity, and</li>
      <li>Inefficiency in the reporting process from the users.</li>
    </ol>
    <p>These insights guided the development of the app's features, focusing on ease of use, security, and transparency.<p/>`,
      notes: "/images/projects/flagit/notes.png",
      notesAlt: "Sticky notes outlining the design process",
      ideation: `<p>To effectively report excesses, users should be able to;<p/>
  <ul>
    <li>Easily report incidents of abuse, misconduct, and corruption by providing necessary details through the app with the option to do so anonymously. Reports are then routed to the appropriate government agencies for swift action.</li>
    <li>Attach evidences to their report for effective follow-up</li>
    <li>Receive updates on their reports, from the initial submission to the resolution stage, ensuring transparency and accountability in the response process</li>
    <li>Discreetly record conversations or incidents of abuse and misconduct. This feature enables users to gather critical evidence without exposing themselves to danger, which can then be used to support their reports.</li>
  </ul>`,
      flowchart: "/images/projects/flagit/flowchart.png",
      flowchartAlt: "Flowchart showing the user journey on the app",
      visualizing:
        "Once I had a clear direction of the user flow, I proceeded to capture these visually. The goal was to minimize decision-making and simplify the user experience by providing user needs at a glance",
      screens: [
        {
          image: "/images/projects/flagit/screen.png",
          alt: "Flagit app showcasing the discreet recording feature",
          cover: false,
        },
        {
          image: "/images/projects/flagit/screen-1.png",
          alt: "Flagit app showcasing the fields on the report screen",
          cover: false,
        },
        { image: "/images/projects/flagit/screen-2.png", alt: "Flagit app report updates screen", cover: false },
        { image: "/images/projects/flagit/screen-3.png", alt: "Flagit app chat screen", cover: false },
      ],
      outcome:
        "The number of reports submitted to government agencies through the app has significantly increased. Since inception last year, we’ve had 353 reported cases and over <b>40% resolved cases</b>.\n\nThe anonymous and discreet recording feature has proven to be impactful in reporting cases that previously went unaddressed. With this feature, users can now report incidents anonymously, leading to swift action.\n\nContinuous improvement is key to every user-centered business. Therefore, we will keep refining the app based on user feedback to ensure it meets evolving needs.",
    },
  },
  {
    name: "Padshare",
    description: "Improving the sanitary hygiene of underprivileged women and girls",
    tags: ["MOBILE APP"],
    thumbnail: "/images/projects/padshare/thumbnail.png",
    slug: "padshare",
    full: {
      banner: "/images/projects/padshare/banner.png",
      bannerAlt: "Padshare app welcome screen and home screen",
      banner1: "/images/projects/padshare/banner-1.png",
      banner1Alt: "Padshare app notifications and latest news screens",
      overview:
        "Padshare is a dedicated platform committed to tackling the significant challenge of limited access to essential sanitary pads for women in Nigeria. Our focus is on creating meaningful impact by forging crucial connections between Non-Governmental Organizations (NGOs) and compassionate donors. Through these strategic partnerships, we work to bridge the gap in access, ensuring that every woman in need can experience the comfort, dignity, and hygiene they deserve during their menstrual cycles.",
      problemStatement:
        "In Nigeria, the average cost of sanitary pads is around N800 per pack, making them inaccessible for many families living below the poverty line of $1.20 per day. This financial barrier forces many girls and women, especially in rural areas, to use makeshift alternatives like socks, tissue, and rags due to limited access to sanitary products and menstrual hygiene education. Additionally, a typical pack of eight pads often isn't enough for a full menstrual cycle, and smaller packs with just two pads are sometimes sold, worsening the situation.",
      researchFindings: `<p>A researched with a survey form distributed among 20 of the target audience to gather valuable insights. Findings are that;<p/>
    <ol>
      <li>There are no verifiable means of identifying legit NGO</li>
      <li>There are limited platforms to access a comprehensive list of verified NGO’s</li>
      <li>Some users who are donors forget to make donations due to busy work schedule</li>
    </ol>`,
      ideation:
        "Armed with research findings, I developed a user flow to capture the proposed solutions. This helps to ensure smooth navigation from start to finish, aiming to identify and remove any obstacles that could disrupt the user experience.",
      flowchart: "/images/projects/padshare/flowchart.png",
      flowchartAlt: "Flowchart showing the user journey on the app",
      wireframe: "With the data and proposed solutions gathered, I proceeded with the low and hi-fidelity visuals",
      wireframes: [
        { image: "/images/projects/padshare/wireframe.png", alt: "Wireframes showing sign up process" },
        { image: "/images/projects/padshare/wireframe-1.png", alt: "Wireframes of inner screens" },
      ],
      screens: [
        {
          image: "/images/projects/padshare/screen.png",
          alt: "Welcome, Home, and News screens",
          cover: false,
        },
        {
          image: "/images/projects/padshare/screen-1.png",
          alt: "Notifications, NGO Search and Donations screens",
          cover: false,
        },
        {
          image: "/images/projects/padshare/screen-2.png",
          alt: "Donation process and NGO list screens",
          cover: false,
        },
      ],
      conclusion:
        "Working on Padshare highlighted the importance of addressing both accessibility and trust in creating impactful solutions. Through research, I learned that connecting users with verified NGOs and making the donation process simpler can make a big difference. This project taught me how crucial it is to design with both the needs of the beneficiaries and the donors in mind, ensuring a seamless experience for all involved.",
    },
  },
  {
    name: "4pay",
    description: "Facilitating payments for individuals and businesses across Africa",
    tags: ["MOBILE APP"],
    thumbnail: "/images/projects/4pay/thumbnail.png",
    slug: "4pay",
    full: {
      banner: "/images/projects/4pay/banner.png",
      bannerAlt: "4pay app welcome screen",
      banner1: "/images/projects/4pay/banner-1.png",
      banner1Alt: "4pay app home screen and successful payment screen",
      mobileBanner: "/images/projects/4pay/mobile-banner.png",
      mobileBannerAlt: "4pay app welcome screen",
      mobileBanner1: "/images/projects/4pay/mobile-banner-1.png",
      mobileBanner1Alt: "4pay app home screen and successful payment screen",
      contain: true,
      problemStatementBefore:
        "Sending money between African banks requires converting to USD, which increases reliance on foreign currency. To solve this, the African Finance Cooperation and African Union introduced the Pan African Payment and Settlement System (PAPSS), a platform designed to make intra-African payments easier. The goal of this app is to allow users to send money across African countries seamlessly.",
      researchFindings:
        "In the first phase of the design process, we designed an online survey with Google Forms to observe patterns and similarities in the needs of potential users. A total of 40 people responded to the Survey. Given below is the google form prepared of the research.",
      chart: "/images/projects/4pay/chart.png",
      chartAlt: "Charts with survey answers during research",
      brainstorming:
        "From the information gathered from the survey, we ideated on different possible solutions to help attend the concerns of users",
      brainstormingDiagram: "/images/projects/4pay/brainstorming.png",
      brainstormingDiagramAlt: "Diagram showing brainstorming process",
      flowchart: "/images/projects/4pay/flowchart.png",
      flowchartAlt: "Flowchart showing the user journey on the app",
      visualDesign:
        "After identifying potential solutions to address these pain points, we moved on to create visual designs that incorporate all the gathered insights.",
      screens: [
        {
          image: "/images/projects/4pay/screen.png",
          alt: "Welcome, and Transaction screens on 4pay web app",
          cover: false,
        },
        { image: "/images/projects/4pay/screen-1.png", alt: "All screens on 4pay web app", cover: true },
        { image: "/images/projects/4pay/screen-2.png", alt: "More screens on 4pay web app", cover: true },
      ],
      conclusion:
        "4pay is all about making payments simple and stress-free for people and businesses across Africa. By focusing on real user needs and tackling common issues with payments, this project offers a practical way to handle transactions smoothly and securely. As it grows, 4pay aims to help create a more connected and convenient financial landscape in Africa.",
    },
  },
  {
    name: "The Nigerian Incentive Based Risk Sharing System For Agricultural Lending (NIRSAL)",
    description: "Redefining agribusiness credit risks in Nigeria",
    tags: ["WEB APP", "MOBILE APP"],
    thumbnail: "/images/projects/nirsal/thumbnail.png",
    slug: "nirsal",
  },
  {
    name: "Federal Road Safety \nCommission",
    description: "Curbing high rate of road accidents through innovative devices",
    tags: ["WEB DESIGN", "WEB APP", "MOBILE APP"],
    thumbnail: "/images/projects/frsc/thumbnail.png",
    slug: "frsc",
  },
];

export type Project = (typeof PROJECTS)[number];

export const EXPERIENCE = [
  { organisation: "Palmview Technologies", role: "Product Designer", year: "2022-Present" },
  { organisation: "Lemonwares Technologies", role: "Product Designer", year: "2024" },
  { organisation: "Oriz", role: "Product Designer", year: "2023-2024" },
  { organisation: "Codeboulevard Systems Ltd  ", role: "Product Designer", year: "2022-2023" },
];

export const TINKERING = [
  { name: "Resend Development", url: "https://resend.webflow.io" },
  { name: "Raft Development", url: "https://raft-8e2108.webflow.io" },
  { name: "Magazine Development", url: "https://magazine-ui.webflow.io" },
  { name: "Fumiwo Development", url: "https://fumiwo-baea09.webflow.io" },
  { name: "Vaultflow Development", url: "https://vaultflow-fdde8f.webflow.io" },
];
