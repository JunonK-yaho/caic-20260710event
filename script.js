const siteConfig = {
  registrationUrl: "https://20260710caicevent.peatix.com/view",
  socialUrl: "https://x.com/cellagri_jp",
  socialLabel: "Xで見る"
};

const topics = [
  {
    label: "Session 1",
    title: "日本の企業・アカデミアのアップデート",
    description: "国内の細胞農業プレイヤーが、直近の技術開発、量産化、事業展開の現在地を共有します。",
    speakers: [
      "インテグリカルチャー 株式会社 / 羽生 雄毅 CEO",
      "株式会社オルガノイドファーム / 山木 多恵子 CEO",
      "ImpacFat Pte. Ltd. / 髙木 安那 事業運営・リサーチアソシエイト",
      "Circular Cell Culture 株式会社 / 大友 春輝 CEO",
      "培養肉未来創造コンソーシアム / 松﨑典弥教授"
    ]
  },
  {
    label: "Session 2",
    title: "海外の動向を受けた日本情勢 企業×アカデミア",
    description: "グローバル動向を踏まえて、日本における制度設計、研究開発、事業化の接点を多面的に掘り下げます。",
    speakers: [
      "北里大学 海洋生命科学部 / 池田大介准教授",
      "Veneno Technologies株式会社 / 木村忠史 取締役",
      "岐阜大学 科学研究基盤センター / 鎌足雄司 助教授",
      "日本細胞農業協会. 東京大学 / 岡田健成",
      "西村あさひ法律事務所・外国法共同事業 アグリ・フードプラクティスグループ / 片桐 秀樹 様 弁護士",
      "国立医薬品食品衛生研究所 安全性生物試験研究センター 安全性予測評価部 / 北嶋 聡 シニアフェロー",
      "日本細胞農業協会. 東京大学 / 岡田健成（司会）",
      "味の素株式会社 グリーン事業推進部 / 降籏 泰史 企画グループ長",
      "東京科学大学 未来社会創成研究院 / 日比野 愛子 教授",
      "株式会社メロス コンサルティング / 小倉千沙 CEO"
    ]
  },
  {
    label: "Session 3",
    title: "代替タンパク質エコシステムの進化が加速させる食の未来",
    description: "細胞農業の外側に広がる代替タンパク質領域から、エコシステム形成と市場接続のヒントを探ります。",
    speakers: [
      "アサヒグループジャパン株式会社FCH部 Likemilk / 畠 徳望博 シニアマネージャー",
      "ファーメランタ株式会社 / 柊崎 庄吾 CEO",
      "株式会社麹ラボ / 萩原 大祐 CEO",
      "株式会社UnlocX / 田中 宏隆 CEO"
    ]
  }
];

const speakerProfiles = [
  {
    name: "岡田 健成",
    organization: "日本細胞農業協会. 東京大学",
    role: "日本細胞農業協会理事",
    summary: "日本細胞農業協会理事。国内最大級の細胞農業のカンファレンス「細胞農業会議」において2023年より統括。東京大学竹内研究室にて細胞性食品(培養肉)研究を行う。東京大学の投資事業会社東大IPCにて4年間ディープテックスタートアップ調査などに従事。",
    photo: "./assets/speakers/okada.png?v=20260324",
    photoPosition: "50% 18%",
    photoScale: 1.2,
    logo: "./assets/caic-logo.svg"
  },
  {
    name: "小池 樹音",
    organization: "日本細胞農業協会",
    role: "アナリスト",
    summary: "北海道大学農学部細胞組織生物学研究室 4年生。大学1年生次より日本細胞農業協会にインターンとして所属し、2024年度より細胞農業会議の企画・運営を担当。今年は岡田と共同統括を務める。",
    photo: "./assets/speakers/koike.png",
    logo: "./assets/caic-logo.svg"
  },
  {
    name: "羽生 雄毅 様",
    organization: "インテグリカルチャー株式会社",
    role: "CEO",
    summary: "2010年、University of Oxford Ph.D (化学)取得。東北大学 PD研究員、東芝研究開発センター システム技術ラボラトリーを経て、2015年10月にインテグリカルチャーを共同創業。",
    photo: "./assets/speakers/hanyu.png",
    logo: "./assets/logos/integriculture.png"
  },
  {
    name: "山木 多恵子 様",
    organization: "株式会社オルガノイドファーム",
    role: "CEO",
    summary: "2008年に総合エンジニアリング企業・日揮グループに入社し、プラント設計に従事。その後、国内新規事業の開発を担う未来戦略室にて、培養肉の社会実装を目指す新規事業を立ち上げ、2021年に株式会社オルガノイドファームを設立、代表取締役 CEO に就任しました。\n現在は、培養肉の産業化を見据え、細胞培養による新たな畜産の仕組みづくりに向けて、生産技術の開発に取り組んでいます。\n",
    photo: "./assets/speakers/yamaki.jpg",
    logo: "./assets/logos/organoidfarm.jpg"
  },
  {
    name: "髙木 安那",
    organization: "ImpacFat Pte. Ltd.",
    role: "事業運営・リサーチアソシエイト",
    summary: "カナダでの高校生活を経て、モナッシュ大学マレーシア校 食品科学技術学科を最優秀成績（First-Class Honours）で卒業。在学中は、学科初となる学生団体の創設・代表を務めるなど、学業と並行してコミュニティ形成にも注力した。研究面では脂質構造に関する研究に従事。\n卒業後はシンガポール発のスタートアップImpacFatに参画し、現在は魚の培養脂肪の社会実装に向けた日本での事業運営およびリサーチに従事している。日本・カナダ・マレーシアでの経験を活かし、グローバルな視点から食の未来に取り組んでいる。",
    photo: "./assets/speakers/takagi.png",
    logo: "./assets/logos/impacfat.jpg"
  },
  {
    name: "大友 春輝",
    organization: "Circular Cell Culture株式会社",
    role: "CEO",
    summary: "2021年に早稲田大学創造理工学研究科修了。在学時代は東京女子医科大学先端生命医科学研究所に交換学生として在籍し、立体組織を活用した創薬開発支援機器の研究開発を実施。新卒でFood Tech領域を専門とするコンサルティングファームに所属し、大手企業の戦略策定支援、新規事業立案支援に従事。大学院時代の恩師らと再会し、2025年3月にCircular Cell Culture株式会社を創業。",
    photo: "./assets/speakers/otomo.jpg",
    logo: "./assets/logos/ccc.png"
  },
  {
    name: "池田 大介准教授",
    organization: "北里大学 海洋生命科学部",
    role: "准教授",
    summary: "　2004年、東京大学大学院農学生命科学研究科博士課程修了。ポスドク等を経て、2008年より北里大学海洋生命科学部に着任。これまで一貫して、魚類の筋タンパク質遺伝子、筋発生および筋分化に関する研究を行ってきた。また、魚類筋芽細胞の分離・培養にも関心を持ち、基盤技術の構築を進めてきた。2020年にニホンウナギ細胞性魚肉（培養肉）に関する研究課題で科研費に採択されて以来、魚類の筋形成研究の知見を基盤として、細胞性魚肉の実現に向けた細胞培養技術の研究に取り組んでいる。",
    photo: "./assets/speakers/ikeda.jpg",
    logo: ""
  },
  {
    name: "片桐 秀樹 様",
    organization: "西村あさひ法律事務所・外国法共同事業 アグリ・フードプラクティスグループ",
    role: "弁護士",
    summary: "西村あさひ法律事務所・外国法共同事業 Agri Food Legal Practice Groupの共同創設者。アグリ・フードテック分野を中心に、国内外の先端技術に関するリーガル・規制戦略支援に従事。Wageningen University & ResearchにてFood Law & Regulatory Affairs修士号を取得し、EU・米国の食品安全、サステナビリティ政策（Farm to Fork戦略等）やCarbon Farming規制を研究。欧州フードテックスタートアップではRegulatory Leadとして新規技術のGo-to-Marketを主導。細胞農業を含む次世代食産業の実装と制度設計を横断的に支援している。",
    photo: "./assets/speakers/katagiri.jpg",
    photoPosition: "50% 32%",
    photoScale: 0.9,
    logo: ""
  },
  {
    name: "北嶋 聡 様",
    organization: "国立医薬品食品衛生研究所 安全性生物試験研究センター 安全性予測評価部",
    role: "シニアフェロー",
    summary: "石川県金沢市生まれ（1965年）。東京大学農学部獣医学科卒（1990年）（獣医師免許取得）、同大学院農学系研究科博士課程獣医学専攻修了（1994年）（専門は獣医薬理学、特に平滑筋・循環器・プリン受容体の薬理）、その後現在に至るまで国立医薬品食品衛生研究所に勤務。2018年同 毒性部長、2025年より同 安全性予測評価部シニアフェロー。2007年より岐阜大学大学院共同獣医学研究科 客員教授を兼任。日本毒性学会理事、日本毒性学会医薬品毒性機序研究部会部会長、内閣府消費者庁 食品衛生基準審議会 新開発食品調査部会 委員（部会長代理）、医薬品医療機器総合研究機構(PMDA)専門委員 など。現在の専門は、毒性学（特に、一般毒性、生殖発生毒性、吸入毒性、皮膚感作性）、分子毒性学、基礎発生学（特に心臓中胚葉形成、及び、発生工学）。最近の主な研究分野は、発達神経毒性、PFASや新開発食品に係る安全性研究、トキシコゲノミクスなど。\n趣味・特技：音楽鑑賞/ドラム演奏（フュージョン系）、卓球、アマチュア無線など\n",
    photo: "./assets/speakers/kitajima.jpg",
    photoPosition: "50% 26%",
    photoScale: 0.9,
    logo: "./assets/logos/nihs.jpg"
  },
  {
    name: "降籏 泰史",
    organization: "味の素株式会社 グリーン事業推進部",
    role: "企画グループ長",
    summary: "略歴：\t2001年　東京大学農学研究科応用動物化学専攻　博士課程修了\n2001年　味の素株式会社　入社\n2001年　サプリメントの機能性評価業務に従事\n2015年　食品研究所　健康栄養価値創造グループ長\n2018年　研究開発企画部に異動、代替たんぱく質の研究開発を主導\n2023年-　グリーン事業推進部が新設され、現職。　",
    photo: "./assets/speakers/furuhata.jpg",
    logo: "./assets/logos/ajinomoto.jpeg"
  },
  {
    name: "日比野 愛子 教授",
    organization: "東京科学大学 未来社会創成研究院",
    role: "教授",
    summary: "京都大学大学院人間・環境学研究課博士課程修了（博士(人間・環境学)）。弘前大学人文社会科学部准教授、同教授を経て2025年10月より東京科学大学未来社会創成研究院教授。専門は社会心理学、科学社会学。萌芽的技術におけるユーザーとテクノロジーの相互作用に関心を持ち、近年では培養肉の社会的影響を分析する分野横断的研究プロジェクトを進めている。主な著作に「科学技術社会学（STS）：テクノサイエンス時代を航行するために」（新曜社、2021年）、「培養肉とは何か」（岩波書店、2022年）など。",
    photo: "./assets/speakers/hibino.jpeg",
    photoPosition: "50% 28%",
    photoScale: 0.9,
    logo: ""
  },
  {
    name: "畠 徳望博 様",
    organization: "アサヒグループジャパン株式会社FCH部 Likemilk",
    role: "シニアマネージャー",
    summary: "２００３年　アサヒビール株式会社　営業本部、マーケティング本部（ビールマーケ・宣伝）\n２０１９年　アサヒグループ食品株式会社　企画本部（経営企画/DX推進・長期戦略推進）\n２０２４年　アサヒグループジャパン株式会社　（事業企画部・Future Creation Headquarters）\n～２０２３年にアサヒグループを横断した新価値創造プログラムに参画。そこから生まれた「フードダイバーシティ事業（LIKEブランド）」案の一つである、酵母からうまれた非動物性ミルク「LIKE MILK」を2024年よりテスト販売開始。本格的な事業化に向けて現在アサヒグループ各社と連携しながら推進中。",
    photo: "./assets/speakers/hata.jpg",
    logo: "./assets/logos/asahi.jpg"
  },
  {
    name: "柊崎 庄吾 様",
    organization: "ファーメランタ株式会社",
    role: "CEO",
    summary: "東京大学経済学部金融学科を卒業後、バークレイズ証券株式会社投資銀行部門投資銀行本部に新卒入社。その後、ドイツ証券株式会社投資銀行部門コーポレートアドバイザリーグループに転職。一貫して、消費財セクターの大手上場企業に対して、クロスボーダーM&Aや資金調達のファイナンシャルアドバイザリー業務に従事した。2022年にファーメランタ株式会社を設立した。",
    photo: "./assets/speakers/fukizaki.jpg",
    logo: "./assets/logos/fermelanta.png"
  },
  {
    name: "萩原 大祐 様",
    organization: "株式会社麹ラボ",
    role: "CEO",
    summary: "名古屋大学大学院生命農学研究科修了、博士（農学）、同大学博士研究員を経て\n東北大学未来科学技術共同研究センター　日本学術振興会特別研究員PD、中央大学理工学部　機構助教、千葉大学真菌医学研究センター　特任助教、筑波大学生命環境系／微生物サステイナビリティ研究センター　准教授（2025年3月退職）\n2024年12月、株式会社麹ラボ設立　代表取締役\n",
    photo: "./assets/speakers/hagiwara.jpg",
    logo: "./assets/logos/kojilabo.png"
  },
  {
    name: "田中 宏隆 様",
    organization: "株式会社UnlocX",
    role: "CEO",
    summary: "パナソニックを経て、McKinsey & Companyにてハイテク・通信業界を中心に8年間に渡り、成長戦略立案・実行、M&A、新事業開発、ベンチャー協業などに従事。 2017年シグマクシスに参画しグローバルフードテックサミット「SKS JAPAN」を立上げ。食に関わる事業開発伴走、コミュニティづくりに取り組む中で、食のエコシステムづくりを目指し2023年10月株式会社UnlocX創設。「フードテック革命」(2020年/日経BP）、「フードテックで変わる食の未来」（2024年/PHP新書）、「教養としてのフードテック」（2025年/日経BP）共著。一般社団法人 SPACE FOODSPHERE理事／ベースフード株式会社　社外取締役／TechMagic株式会社　社外取締役／一般社団法人 Next Prime Food代表理事",
    photo: "./assets/speakers/tanaka.jpg",
    logo: "./assets/logos/unlocx.png"
  }
];

const agenda = [
  { time: "13:00 - 13:10", title: "オープニング", description: "" },
  { time: "13:10 - 14:15", title: "日本の企業・アカデミアのアップデート", description: "インテグリカルチャー 株式会社 / 羽生 雄毅 CEO\n株式会社オルガノイドファーム / 山木 多恵子 CEO\nImpacFat Pte. Ltd. / 髙木 安那 事業運営・リサーチアソシエイト\nCircular Cell Culture 株式会社 / 大友 春輝 CEO\n培養肉未来創造コンソーシアム / 松﨑典弥教授" },
  { time: "14:15 - 14:45", title: "休憩", description: "" },
  { time: "14:45 - 15:35", title: "SBIRによる研究開発", description: "生研支援センター スタートアップ総合支援プログラム（SBIR支援）採択企業や大学による最先端研究を紹介いたします。\n\n北里大学 海洋生命科学部 / 池田大介准教授\nVeneno Technologies株式会社 / 木村忠史 取締役\n岐阜大学 科学研究基盤センター / 鎌足雄司 助教授\n日本細胞農業協会. 東京大学 / 岡田健成" },
  { time: "15:35 - 16:05", title: "休憩", description: "" },
  { time: "16:05 - 16:45", title: "細胞性食品の安全性評価と法規制", description: "西村あさひ法律事務所・外国法共同事業 アグリ・フードプラクティスグループ / 片桐 秀樹 様 弁護士\n国立医薬品食品衛生研究所 安全性生物試験研究センター 安全性予測評価部 / 北嶋 聡 シニアフェロー\n日本細胞農業協会. 東京大学 / 岡田健成（司会）" },
  { time: "16:45 - 17:15", title: "社会的受容から見る細胞農業の「売り方」", description: "味の素株式会社 グリーン事業推進部 / 降籏 泰史 企画グループ長\n東京科学大学 未来社会創成研究院 / 日比野 愛子 教授\n株式会社メロス コンサルティング / 小倉千沙 CEO" },
  { time: "17:15 - 18:05", title: "代替タンパク質エコシステムの進化が加速させる食の未来", description: "アサヒグループジャパン株式会社FCH部 Likemilk / 畠 徳望博 シニアマネージャー\nファーメランタ株式会社 / 柊崎 庄吾 CEO\n株式会社麹ラボ / 萩原 大祐 CEO\n株式会社UnlocX / 田中 宏隆 CEO" },
  { time: "18:05 - 18:15", title: "クロージングセッション", description: "" },
  { time: "18:30 - 20:30", title: "ネットワーキング", description: "" }
];

function renderTopics() {
  const container = document.getElementById("topicList");
  container.innerHTML = topics.map((topic) => `
    <article class="topic-card">
      <div class="topic-header">
        <span class="topic-label">${topic.label}</span>
        <h3>${topic.title}</h3>
      </div>
      <p>${topic.description}</p>
      <div class="speaker-tags">
        ${topic.speakers.map((speaker) => `<span>${speaker}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderProfiles() {
  const container = document.getElementById("profileGrid");
  container.innerHTML = speakerProfiles.map((speaker) => `
    <article class="profile-card">
      <div class="profile-visual">
        <img class="profile-photo" src="${speaker.photo}" alt="${speaker.name} のプロフィール写真" loading="lazy"${speaker.photoPosition || speaker.photoScale ? ` style="${speaker.photoPosition ? `object-position: ${speaker.photoPosition}; ` : ""}${speaker.photoScale ? `transform: scale(${speaker.photoScale});` : ""}"` : ""}>
      </div>
      <div class="profile-body">
        <p class="profile-org">${speaker.organization}</p>
        <div class="profile-heading-row">
          <h3>${speaker.name}</h3>
          ${speaker.logo ? `<div class="profile-logo-inline"><img class="profile-logo" src="${speaker.logo}" alt="${speaker.organization} のロゴ" loading="lazy"></div>` : ""}
        </div>
        <p class="profile-role">${speaker.role}</p>
        <p class="profile-summary">${speaker.summary}</p>
      </div>
    </article>
  `).join("");
}

function renderAgenda() {
  const container = document.getElementById("agendaList");
  container.innerHTML = agenda.map((item) => `
    <article class="agenda-item">
      <div class="agenda-time">${item.time}</div>
      <div class="agenda-main">
        <h3>${item.title}</h3>
        ${item.description ? `<p class="agenda-description">${item.description}</p>` : ""}
      </div>
    </article>
  `).join("");
}

function applyConfig() {
  ["headerCta", "heroCta", "footerCta"].forEach((id) => {
    document.getElementById(id).href = siteConfig.registrationUrl;
  });

  const socialLink = document.getElementById("socialLink");
  if (socialLink) {
    socialLink.href = siteConfig.socialUrl;
    socialLink.textContent = siteConfig.socialLabel;
  }

  document.getElementById("copyright").textContent =
    `© ${new Date().getFullYear()} Japan Association for Cellular Agriculture`;
}

renderTopics();
renderProfiles();
renderAgenda();
applyConfig();
