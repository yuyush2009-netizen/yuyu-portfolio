/*
  ✏️  كل محتوى الموقع هنا — عدّلي النصوص والصور والفيديوهات من الملف ده بس.
  ✏️  All site content lives here — edit this file only.

  إضافة شغلك:
  - حطي الصور/الفيديوهات في فولدر images/
  - ضيفيها في "media" جوه الـ case المناسبة، مثال:
      media: [
        { type: "image", src: "images/fashion-1.jpg" },
        { type: "video", src: "images/fashion-reel.mp4" },
      ]
  - "position" (اختياري) بيحدد أنهي جزء من الصورة يبان في الكارت، مثال: "50% 30%"
  - "fit": "contain" (اختياري) بيعرض الصورة كاملة من غير قص — مناسب للصور العريضة
  - أول ٣ عناصر بيظهروا على الكارت، والباقي بيظهر لما حد يدوس عليه.
  - لو "media" فاضية، بيظهر مكان فاضي بتصميم لحد ما تضيفي شغلك.
*/
window.PORTFOLIO = {
  profile: {
    // الاسم بالإنجليزي بيظهر بخط اليد تحت كلمة PORTFOLIO
    name: { ar: "يارا شريف", en: "Yara Sherif" },
    role: { ar: "صانعة محتوى بالذكاء الاصطناعي", en: "AI Content Creator" },
    photo: "images/me.webp", // صورتك (بتظهر في الغلاف و About me و Contact)
    about: [
      {
        ar: "<b>عمري 17 سنة، وصانعة محتوى بصري بالذكاء الاصطناعي</b>",
        en: "<b>17-year-old AI visual content creator</b>",
      },
      {
        ar: "نفّذت أكتر من <b>1,000 إعلان</b> واشتغلت مع عملاء وبراندات كتير",
        en: "Created <b>1,000+ ads</b> and worked with a wide range of clients and brands",
      },
      {
        ar: "بقدّم فيديوهات سينمائية بجودة 4K، من الفكرة والسكريبت لحد المونتاج النهائي",
        en: "I produce cinematic 4K videos, from concept and script to final edit",
      },
      {
        ar: "فيديو كليبات وأغاني، وإعلانات للمطاعم والمنتجات والفاشون والأثاث",
        en: "Music videos and songs, plus ads for restaurants, products, fashion and furniture",
      },
      {
        ar: "تصميم شخصيات كرتونية أصلية وتحريكها بهوية خاصة بيها",
        en: "Original cartoon characters, designed and animated with their own identity",
      },
      {
        ar: "محتوى بمستوى إنتاج احترافي، يعبّر عن البراند ويوصّل رسالته بوضوح",
        en: "Production-grade content that reflects the brand and delivers its message",
      },
    ],
    // عدّلي الأدوات حسب اللي بتستخدميه فعلًا
    toolsTitle: { ar: "الأدوات", en: "Tools" },
    tools: ["Claude", "Higgsfield", "Kling", "Midjourney", "Runway", "CapCut"],
  },

  skills: {
    pills: [
      { ar: "صور بالـ AI", en: "AI Images" },
      { ar: "فيديو بالـ AI", en: "AI Video" },
      { ar: "كتابة برومبتات", en: "Prompt Design" },
      { ar: "مونتاج وموشن", en: "Editing & Motion" },
      { ar: "ستوري بورد", en: "Storyboarding" },
    ],
    features: [
      {
        title: { ar: "أفكار مبتكرة", en: "Creative concepts" },
        text: { ar: "كونسبت مختلف لكل براند وكل ستايل", en: "A fresh concept for every brand and style" },
      },
      {
        title: { ar: "من الفكرة للنتيجة", en: "Idea to final cut" },
        text: { ar: "سكريبت، توليد، ومونتاج نهائي", en: "Script, generation and final edit" },
      },
      {
        title: { ar: "كل المقاسات", en: "Every format" },
        text: { ar: "ريلز، ستوريز، بوستات وإعلانات", en: "Reels, stories, posts and ads" },
      },
      {
        title: { ar: "التزام بالمواعيد", en: "On time, always" },
        text: { ar: "وتواصل مستمر في كل مرحلة", en: "With clear updates at every stage" },
      },
    ],
  },

  // كل case = مجال من شغلك. theme: light | white | pink | dark | dark-side
  cases: [
    {
      script: "fashion",
      theme: "light",
      project: { ar: "صور وفيديوهات فاشون بالـ AI", en: "AI fashion photos & videos" },
      role: { ar: "كونسبت، توليد صور، إخراج", en: "Concept, image generation, art direction" },
      media: [{ type: "image", src: "images/fashion-hq.webp", position: "50% 30%" }],
      link: "https://drive.google.com/drive/folders/1fIxMklcq0VXXrWTCBBKhbBUJHZCt43IL",
    },
    {
      script: "food",
      theme: "white",
      project: { ar: "محتوى مطاعم وأكل", en: "Restaurant & food content" },
      role: { ar: "تصوير منتجات بالـ AI، ريلز", en: "AI product shots, reels" },
      media: [{ type: "image", src: "images/food-1.webp", position: "50% 52%" }],
      link: "https://drive.google.com/drive/folders/14CnCJjD_1BdgBgNITDYgBV_3BYzv1RDM",
    },
    {
      script: "furniture",
      theme: "pink",
      project: { ar: "أثاث وديكور داخلي", en: "Furniture & interiors" },
      role: { ar: "مشاهد منتجات، فيديو إعلاني", en: "Product scenes, ad video" },
      media: [{ type: "image", src: "images/furniture-1.webp", position: "50% 58%" }],
      link: "https://drive.google.com/drive/folders/1wqWITFkWmig82hVd_JuwGC6GIWpVZB2t",
    },
    {
      script: "cartoon",
      theme: "dark",
      project: { ar: "شخصيات وكرتون", en: "Characters & cartoons" },
      role: { ar: "تصميم شخصيات، أنيميشن", en: "Character design, animation" },
      media: [{ type: "image", src: "images/cartoon-hq.webp", position: "50% 35%" }],
      link: "https://drive.google.com/drive/folders/1Q207b0smmycngbbkpfZHZfBw08W2T8Uf",
    },
    {
      script: "series",
      theme: "dark",
      project: { ar: "مشاهد بستايل المسلسلات", en: "Series-style scenes" },
      role: { ar: "ستوري بورد، فيديو سينمائي", en: "Storyboard, cinematic video" },
      media: [{ type: "image", src: "images/series-hq.webp", position: "50% 40%" }],
      link: "https://drive.google.com/drive/folders/1BrPVLwFMnaqiQhHiRIzp_YQIP1nXFGev",
    },
    {
      script: "products",
      theme: "dark-side",
      project: { ar: "إعلانات منتجات", en: "Product ads" },
      role: { ar: "فكرة، توليد، مونتاج", en: "Concept, generation, editing" },
      media: [{ type: "image", src: "images/products-hq.webp", position: "50% 42%" }],
      link: "https://drive.google.com/drive/folders/14CnCJjD_1BdgBgNITDYgBV_3BYzv1RDM",
    },
    {
      script: "orange",
      theme: "dark",
      project: { ar: "إعلان أورانج", en: "Orange ad" },
      role: { ar: "فكرة، سكريبت، توليد، مونتاج", en: "Concept, script, generation, editing" },
      media: [{ type: "image", src: "images/orange-hq.webp", position: "50% 55%" }],
      link: "https://drive.google.com/drive/folders/1Ll6oVQXa4SS_9VfdESfHZQQM8AzB7COH",
    },
    {
      script: "travel",
      theme: "light",
      project: { ar: "إعلان شركة سياحة", en: "Travel agency ad" },
      role: { ar: "فكرة، سكريبت، توليد، مونتاج", en: "Concept, script, generation, editing" },
      media: [{ type: "image", src: "images/travel-hq.webp", position: "50% 30%" }],
      link: "https://drive.google.com/drive/folders/1QDsD1WUafhv6-CrwGy8BJBL0O7dD7jME",
    },
    {
      script: "construction",
      theme: "dark",
      project: { ar: "إعلان شركة مقاولات", en: "Construction company ad" },
      role: { ar: "فكرة، سكريبت، توليد، مونتاج", en: "Concept, script, generation, editing" },
      media: [{ type: "image", src: "images/construction-hq.webp", fit: "contain" }],
      link: "https://drive.google.com/drive/folders/1hQmn_oCesWLsNDkmznVHrCDVyeRmo252",
    },
    {
      script: "mental health",
      theme: "pink",
      project: { ar: "حملة توعية عن الصحة النفسية", en: "Mental health awareness campaign" },
      role: { ar: "قصة، سكريبت، تصميم شخصيات، أنيميشن", en: "Story, script, character design, animation" },
      media: [{ type: "image", src: "images/mental-health-hq.webp", fit: "contain" }],
      link: "https://drive.google.com/drive/folders/134FSRxBKkAaaG1tEHoj5VkbTRlTVk_Zk",
    },
    {
      script: "kids education",
      theme: "light",
      project: { ar: "محتوى تعليمي للأطفال", en: "Kids educational content" },
      role: { ar: "قصة، سكريبت، تصميم شخصيات، أنيميشن", en: "Story, script, character design, animation" },
      media: [{ type: "image", src: "images/kids-hq.webp", position: "48% 50%" }],
      link: "https://drive.google.com/drive/folders/1eZLKlkBZ2YMVBLWl1I9fWeO_ZvEsL0rz",
    },
    {
      script: "music video",
      theme: "dark",
      project: { ar: "فيديو كليب", en: "Music video" },
      role: { ar: "فكرة، ستوري بورد، توليد، مونتاج", en: "Concept, storyboard, generation, editing" },
      media: [{ type: "image", src: "images/clip-hq.webp", fit: "contain" }],
      link: "https://drive.google.com/drive/folders/1a2dPFSjFOjzmnBvAufr510zQ9F6JkwHv",
    },
    {
      script: "UGC",
      theme: "pink",
      project: { ar: "محتوى UGC للبراندات", en: "UGC content for brands" },
      role: { ar: "فكرة، سكريبت، توليد، مونتاج", en: "Concept, script, generation, editing" },
      media: [{ type: "image", src: "images/ugc-hq.webp", position: "50% 42%" }],
      link: "https://drive.google.com/drive/folders/1t8bqlv8p1lBLYsgg9bFDFcqSLp4TX48r",
    },
    {
      script: "perfumes",
      theme: "dark",
      project: { ar: "إعلانات عطور", en: "Perfume ads" },
      role: { ar: "فكرة، توليد، مونتاج", en: "Concept, generation, editing" },
      media: [{ type: "image", src: "images/perfume-hq.webp", position: "50% 50%" }],
      link: "https://drive.google.com/file/d/1KOhYDTIos31V4Ltsi42Uas0oAkzZhrc7/view?usp=drivesdk",
    },
  ],

  // اتركي أي رابط فاضي عشان مايظهرش. كل رابط بيتعمله QR code تلقائي.
  contact: {
    // لينك فولدر شغلك — بيظهر كزرار "كل شغلي" وفي كل case مفيهاش لينك خاص
    work: "https://drive.google.com/drive/folders/16DarTwu0dvbYLOzHGaNEpr4Vz3vWp-1L",
    email: "yuyumedia41@gmail.com",
    instagram: "", // رابط كامل: https://instagram.com/...
    tiktok: "",
    whatsapp: "201122278621", // رقم بكود الدولة من غير +، مثال: 201001234567
    behance: "",
  },
};
