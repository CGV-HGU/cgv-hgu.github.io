// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "News from CGV Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-patents",
          title: "patents",
          description: "Patents from CGV Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications from CGV Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-professor",
              title: "Professor",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/professor/";
              },
            },{id: "dropdown-students",
              title: "Students",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/students/";
              },
            },{id: "dropdown-alumni",
              title: "Alumni",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/people/alumni/";
              },
            },{id: "nav-gallery",
          title: "gallery",
          description: "CGV Lab photo gallery by year &amp; event.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "news-ijcas-2019-if-2-7-1-paper-accepted-2019-7-sang-jun-lee-and-sung-soo-hwang-bag-of-sampled-words-a-sampling-based-strategy-for-fast-and-accurate-visual-place-recognition-in-changing-environments-international-journal-of-control-automation-and-systems-2019",
          title: '[IJCAS 2019(IF: 2.7)] 1 PAPER ACCEPTED (2019.7) Sang Jun Lee and Sung Soo...',
          description: "",
          section: "News",},{id: "news-ijcas-2019-if-2-7-1-paper-accepted-2019-9-sang-jun-lee-heeyoul-choi-and-sung-soo-hwang-real-time-depth-estimation-using-recurrent-cnn-with-sparse-depth-cues-for-slam-system-international-journal-of-control-automation-and-systems-2019",
          title: '[IJCAS 2019(IF: 2.7)] 1 PAPER ACCEPTED (2019.9) Sang Jun Lee, Heeyoul Choi, and...',
          description: "",
          section: "News",},{id: "news-ijcas-2020-if-3-3-1-paper-accepted-2020-5-sang-jun-lee-and-sung-soo-hwang-fast-and-accurate-self-calibration-using-vanishing-point-detection-and-manmade-environments-international-journal-of-control-automation-and-systems-2020-scie",
          title: '[IJCAS 2020(IF: 3.3)] 1 PAPER ACCEPTED (2020.5) Sang Jun Lee and Sung Soo...',
          description: "",
          section: "News",},{id: "news-spc-2020-1-paper-accepted-2020-8-jae-won-kam-han-sol-kim-sang-jun-lee-and-sung-soo-hwang-robust-and-fast-collaborative-augmented-reality-framework-based-on-monocular-slam",
          title: '[SPC 2020] 1 PAPER ACCEPTED (2020.8) Jae-Won Kam, Han-Sol Kim, Sang-Jun Lee, and...',
          description: "",
          section: "News",},{id: "news-wacv-2021-1-paper-accepted-2021-1-sang-jun-lee-deokhwa-kim-sung-soo-hwang-donghwan-lee-local-to-global-efficient-visual-localization-for-a-monocular-camera-proceedings-of-the-ieee-cvf-winter-conference-on-applications-of-computer-vision-wacv-2021-pp-2231-2240",
          title: '[WACV 2021] 1 PAPER ACCEPTED (2021.1) Sang Jun Lee, Deokhwa Kim, Sung Soo...',
          description: "",
          section: "News",},{id: "news-icas-2021-1-paper-accepted-2021-10-muhyun-back-jinkyu-lee-kyuho-bae-sung-soo-hwang-il-yong-chun-improved-and-efficient-inter-vehicle-distance-estimation-using-road-gradients-of-both-ego-and-target-vehicles-icas-2021",
          title: '[ICAS 2021] 1 PAPER ACCEPTED(2021.10) Muhyun Back, Jinkyu Lee, Kyuho Bae, Sung Soo...',
          description: "",
          section: "News",},{id: "news-spc-2022-1-paper-accepted-2022-4-younggon-jo-seokhyeon-hong-jeongmok-ha-and-sungsoo-hwang-visual-slam-based-vehicle-control-for-autonomous-valet-parking-ieie-transactions-on-smart-processing-and-computing-vol-11-no-2-april-2022",
          title: '[SPC 2022] 1 PAPER ACCEPTED (2022.4) Younggon Jo, Seokhyeon Hong, Jeongmok Ha, and...',
          description: "",
          section: "News",},{id: "news-t-its-2023-if-7-9-1-paper-accepted-2023-3-jinkyu-lee-muhyun-back-sung-soo-hwang-il-yong-chun-improved-real-time-monocular-slam-using-semantic-segmentation-on-selective-frames",
          title: '[T-ITS 2023(IF: 7.9)] 1 PAPER ACCEPTED(2023.3) Jinkyu Lee, Muhyun Back, Sung Soo Hwang,...',
          description: "",
          section: "News",},{id: "news-ijat-2023-if-1-5-1-paper-accepted-2023-11-younggon-jo-jeongmok-ha-and-sungsoo-hwang-survey-of-technology-in-autonomous-valet-parking-system-international-journal-of-automotive-technology",
          title: '[IJAT 2023(IF: 1.5)] 1 PAPER ACCEPTED(2023.11) Younggon Jo, Jeongmok Ha and Sungsoo Hwang,...',
          description: "",
          section: "News",},{id: "news-neural-processing-letters-2024-if-2-6-1-paper-accepted-2024-7-hye-bin-yoo-hyun-min-han-sung-soo-hwang-il-yong-chun-improving-neural-radiance-fields-using-near-surface-sampling-with-point-cloud-generation",
          title: '[Neural Processing Letters 2024(IF: 2.6)] 1 PAPER ACCEPTED(2024.7) Hye Bin Yoo, Hyun Min...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
