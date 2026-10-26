import { Project } from "@/lib/types";

export const projects: Project[] = [
  // ---------------------------------------------------------------
  // JAKARTA ISPU CLASSIFICATION — flagship
  // ---------------------------------------------------------------
  {
    slug: "jakarta-ispu-classification",
    title: "Jakarta ISPU Classification",
    status: "published",
    featured: true,
    flagship: true,
    categories: ["machine-learning", "academic"],
    cardDescription:
      "Looks at daily air-quality data for Jakarta to tell whether a day counts as unhealthy or worse.",
    resultLine:
      "Compared two different modeling approaches, each evaluated under a different input setting.",
    techTags: ["Python", "scikit-learn", "XGBoost", "TensorFlow/Keras", "SHAP"],
    // Illustration (not a result figure). Replace with a dashboard/chart
    // image later and also list it under caseStudy.visualEvidence.
    thumbnail: "/images/projects/jakarta-ispu-classification/thumb.png",
    thumbnailAlt: "Illustration of a city skyline under a layer of haze, with smoke rising from chimneys",
    links: {
      github: "https://github.com/erielsdewantoro/jakarta-ispu-classification",
    },
    recruiterSummary:
      "An undergraduate thesis comparing tree-based models (Random Forest, XGBoost) against recurrent neural networks (LSTM, GRU) on daily Jakarta ISPU classification, using 2020–2024 data with a chronological train/test split. Includes SHAP-based feature interpretation and a full public GitHub repository with documented methodology.",
    technicalSummary:
      "Binary classification (Tidak Sehat+ vs. Bukan Tidak Sehat+) on 1,826 valid daily observations (2020–2024), chronologically split into 1,460 training and 366 test days. 17 engineered features including pollutant sub-indices, temporal variables, and missingness indicators. Random Forest and XGBoost produced identical Precision (0.9767), Recall (0.9438), and F1-score (0.9600) on the evaluated test set; the CV reports Random Forest ROC-AUC of 0.9813. LSTM and GRU, evaluated on a 14-day historical window with no access to target-day values, scored F1 0.4839 and 0.4000 respectively. These are not a single comparable leaderboard: RF/XGBoost receive target-day pollutant sub-indices that are part of the published ISPU rule itself, while LSTM/GRU classify the target day using only the previous 14 days, under a different input setting.",
    caseStudy: {
      plainOpening:
        "This project analyzes daily air-quality data for Jakarta to identify whether a day's conditions count as unhealthy or worse (Jakarta's Air Pollution Index, or ISPU). Several modeling approaches were used, and a method called SHAP was used afterward to check which pollutants the models relied on most.",
      problem:
        "The question is whether a day falls into an unhealthy-or-worse category, based on recorded pollutant data.",
      whatIDid:
        "Prepared and cleaned five years of daily pollutant records, built two kinds of models — ones that see the current day's readings, and historical-window models that classify the target day using the previous 14 days — and used SHAP to see which pollutants mattered most.",
      resultPlain:
        "The models that saw the current day's readings scored very highly, because those readings are closely tied to the official category definition itself. The historical-window models, which only had the past two weeks and no access to today's readings, scored much lower — a genuinely harder, more realistic task. These are explained separately below, since they aren't a fair head-to-head comparison.",
      technicalDetail:
        "Dataset: ispu_dki_all.csv via Kaggle, sourced from DKI Jakarta's Environmental Agency / Satu Data Jakarta. Raw: 5,538 rows × 11 columns (2010–2025). Research period 2020–2024: 1,827 observations before exclusion, 1,826 valid after excluding one row marked \"TIDAK ADA DATA.\" Target: Tidak Sehat+ = TIDAK SEHAT + SANGAT TIDAK SEHAT; Bukan Tidak Sehat+ = BAIK + SEDANG. Split chronologically (not randomly) — train 2020–2023 (1,460 observations), test 2024 (366 observations). Preprocessing: time interpolation (max 7-day gap), then monthly median, then global median, all fit on training data only; missingness indicators retained as features; StandardScaler fit on train and applied to test. 17 features total: 6 pollutant sub-indices, temporal features, and missingness indicators.",
      limitations: [
        "The four-model comparison is not apples-to-apples: Random Forest and XGBoost receive the same pollutant sub-index values used to define the published ISPU category, while LSTM and GRU classify the target day using only the previous 14 days, under a different input setting.",
        "SHAP values describe feature contribution to the model's output, not real-world causal effect.",
        "The year-by-year SHAP view is retrospective and diagnostic, not an out-of-sample result.",
        "PM2.5 was completely missing for all of 2020, which shapes how that year's SHAP result should be read.",
        "No hyperparameter search or cross-validation was performed — a single chronological split was used.",
      ],
      futureImprovements: [
        "Walk-forward validation across multiple years.",
        "Hyperparameter tuning, particularly for LSTM/GRU.",
        "A historical-window setup giving all four models equivalent historical-only input, to isolate model quality from task-framing differences.",
      ],
      // Visual evidence intentionally omitted until thesis result charts are confirmed.
    },
    researchData: {
      datasetStats: [
        { label: "Raw dataset", value: "5,538 rows × 11 columns" },
        { label: "Raw period", value: "2010 – 2025" },
        { label: "Research period", value: "2020 – 2024" },
        { label: "Valid observations", value: "1,826" },
        { label: "Train / Test split", value: "1,460 / 366 days" },
      ],
      classSplit: [
        { label: "Bukan Tidak Sehat+", count: 1210, pct: "66.27%" },
        { label: "Tidak Sehat+", count: 616, pct: "33.73%" },
      ],
      sameDaySetting: [
        { model: "Random Forest", precision: "0.9767", recall: "0.9438", f1: "0.9600", rocAuc: "0.9813" },
        { model: "XGBoost", precision: "0.9767", recall: "0.9438", f1: "0.9600", rocAuc: "0.9705" },
      ],
      historicalSetting: [
        { model: "LSTM", precision: "0.4639", recall: "0.5056", f1: "0.4839", rocAuc: "0.6902" },
        { model: "GRU", precision: "0.4507", recall: "0.3596", f1: "0.4000", rocAuc: "0.7159" },
      ],
      shapFeatures: [
        { feature: "PM2.5", value: "0.323157" },
        { feature: "PM10", value: "0.083515" },
        { feature: "O3", value: "0.047695" },
        { feature: "CO", value: "0.026628" },
        { feature: "NO2", value: "0.023424" },
        { feature: "SO2", value: "0.013650" },
      ],
    },
    seo: {
      title: "Jakarta ISPU Classification — Eriel Setiawan Dewantoro",
      description:
        "An undergraduate thesis classifying Jakarta's daily air quality using tree-based and recurrent models, with SHAP-based feature interpretation.",
    },
    needsConfirmation: ["CV ROC-AUC (0.9813) differs from earlier portfolio draft (0.9822); thesis source of truth should be checked before publishing the detailed metric"],
  },

  // ---------------------------------------------------------------
  // WTA TENNIS MATCH ANALYTICS
  // ---------------------------------------------------------------
  {
    slug: "wta-tennis-analysis",
    title: "WTA Tennis Match Analytics",
    status: "published",
    featured: true,
    categories: ["data-bi"],
    cardDescription:
      "Explores two decades of professional women's tennis matches for patterns in surfaces, upsets, and player performance.",
    resultLine:
      "29.57% of matches ended in an upset; hard courts hosted over half of all matches.",
    techTags: ["Python", "Pandas", "Power BI", "Streamlit"],
    thumbnail: "/images/projects/wta/thumb.png",
    links: {
      github: "https://github.com/erielsdewantoro/WTA-Tennis-Analysis",
      demo: "https://erieldewantoro-wta-tennis-analysis.streamlit.app",
    },
    recruiterSummary:
      "An exploratory data analysis and dashboard project covering 42,810+ WTA matches from 2006–2025, built in Python/Pandas and presented through an interactive Streamlit dashboard.",
    technicalSummary:
      "Descriptive/exploratory analysis (not a predictive model) of 42,810+ match records: 29.57% tour-wide upset rate, hard courts hosting over 50% of matches, average 3.33 sets per match. A set of top performers by total wins is shown; this reflects win counts, not a computed consistency metric. No statistical significance testing applied.",
    caseStudy: {
      plainOpening:
        "This project explores over two decades of professional women's tennis matches to find patterns — which court surfaces are used most, how often the expected winner loses, and which players have the most wins.",
      problem:
        "Raw match-level tennis data isn't easy for a general audience to explore or interpret without being structured and visualized.",
      whatIDid:
        "Cleaned and structured 42,810+ WTA match records (2006–2025) in Python/Pandas, then built an interactive dashboard — first in Power BI, later migrated to a Streamlit and Plotly web app.",
      resultPlain:
        "Upsets happened in 29.57% of matches tour-wide, hard courts hosted more than half of all matches, and a small group of players (including Wozniacki, Azarenka, and S. Williams) led in total wins.",
      technicalDetail:
        "Dataset: 42,810+ matches, 812 unique players, 2006–2025. Average match length 3.33 sets. The top-wins ranking reflects win counts, not a separately computed consistency score, so it is described as \"most wins,\" not \"most consistent.\"",
      limitations: [
        "This is descriptive EDA and dashboarding, not machine learning or forecasting — it should not be described as predictive.",
        "No confidence intervals or statistical significance testing are applied to the trends shown.",
      ],
      futureImprovements: [
        "Player-level drill-downs and head-to-head comparisons.",
        "A separate predictive layer (e.g., match-outcome modeling) as a future project.",
      ],
      visualEvidence: [
        {
          src: "/images/projects/wta/barru.png",
          alt: "WTA match dashboard with summary figures (42.81K matches, 812 players, 3.33 average sets, 29.57% upset rate), a top-10 players bar chart, a match distribution by round, filters, and a yearly upset-trend line chart.",
          caption: "Figure 1. WTA match dashboard overview (interface labels in Indonesian).",
        },
      ],
    },
    seo: {
      title: "WTA Tennis Match Analytics — Eriel Setiawan Dewantoro",
      description:
        "Exploratory analysis of 42,810+ WTA matches (2006–2025), presented as an interactive dashboard.",
    },
  },

  // ---------------------------------------------------------------
  // RFM CUSTOMER SEGMENTATION
  // ---------------------------------------------------------------
  {
    slug: "rfm-customer-segmentation",
    title: "RFM Customer Segmentation",
    status: "published",
    featured: false,
    categories: ["data-bi"],
    cardDescription:
      "Groups customers by how recently, how often, and how much they buy, to help a business see differences in customer activity and value.",
    resultLine: "43% of customers fell into the Lost/Lapsed segment.",
    techTags: ["Python", "Pandas", "Power BI", "Streamlit", "NumPy", "Excel"],
    thumbnail: "/images/projects/rfm/segments.png",
    links: {
      github: "https://github.com/erielsdewantoro/RFM-Customer-Segmentation",
    },
    recruiterSummary:
      "A customer segmentation project using the RFM (Recency, Frequency, Monetary) framework on 201 purchases by 167 customers from 2,090 customer-activity records. Prepared with Excel, Python, Pandas, and NumPy, with a Power BI dashboard and interactive Streamlit app; recommended segment-specific offers to reactivate older single-purchase customers.",
    technicalSummary:
      "RFM scores computed per customer: Recency and Monetary are scored 1–4 by rank quartile, and Frequency is scored 1 (one purchase) or 2 (repeat purchase) because most customers bought only once. Customers are grouped by fixed rules into Champions, Loyal Customers, New Customers, At Risk, and Lost/Lapsed. 73 of 167 customers (43%) fell into Lost/Lapsed — here meaning a single purchase in the older half of the period, a rule-based label rather than measured churn. Monday had the most purchases (51 of 201). No causal claims about why customers lapsed.",
    caseStudy: {
      plainOpening:
        "This project groups customers by three questions: how recently did they buy, how often do they buy, and how much do they spend (RFM — Recency, Frequency, Monetary).",
      problem:
        "Not every customer is equally valuable, and treating them all the same wastes marketing effort.",
      whatIDid:
        "Cleaned and prepared the activity data in Excel and Python (fixed a misspelled action label and kept only valid purchases), calculated RFM scores for each customer, grouped them into named segments (Champions, Loyal, New, At Risk, Lost/Lapsed), built a dashboard, and recommended segment-specific reactivation offers.",
      resultPlain:
        "43% of customers (73 of 167) fell into the Lost/Lapsed segment, and Monday was the day with the most purchases.",
      technicalDetail:
        "Dataset: 2,090 customer-activity records from Kaggle (\"Customer sessions and actions for propensity model\"), of which 201 are purchases made by 167 customers. Recency is the number of days since a customer's last purchase (counted from the day after the last recorded purchase); Monetary is total spend; both are scored 1–4 by rank quartile. Frequency is scored 1 for one purchase and 2 for repeat purchases. Segments are assigned by fixed rules on these three scores. Total spend was strongly related to item price (correlation 0.95) and only weakly to quantity (0.13). No causal claim is made about why customers lapsed.",
      limitations: [
        "The dataset is small — 201 purchases from 167 customers — so some segments are very small (Loyal Customers: 9, At Risk: 10).",
        "Most customers bought only once, so Frequency has just two score levels, and \"Lost/Lapsed\" here means a single purchase in the older half of the period — a rule-based label, not measured churn.",
        "No check of how stable these segments are over time.",
      ],
      futureImprovements: [
        "Try the same approach on a larger dataset with more repeat purchases, so Frequency can use finer score levels.",
        "Add cohort tracking to see how segments shift over time.",
      ],
      visualEvidence: [
        {
          src: "/images/projects/rfm/segments.png",
          alt: "Customer segmentation chart showing 73 of 167 customers in the Lost/Lapsed segment (43.71%), alongside the other four segment groups.",
          caption: "Figure 1. Customer segments from the RFM analysis (dashboard labels in Indonesian).",
        },
      ],
    },
    seo: {
      title: "RFM Customer Segmentation — Eriel Setiawan Dewantoro",
      description:
        "Customer segmentation using the RFM framework to identify high-value and lapsed customer groups.",
    },
    needsConfirmation: ["Currency of revenue figures differs between the notebook and dashboard; the demo link and currency-sensitive panels are hidden until reconciled"],
  },

  // ---------------------------------------------------------------
  // ZOMATO DELIVERY PREDICTION
  // ---------------------------------------------------------------
  {
    slug: "zomato-delivery-prediction",
    title: "Zomato Delivery Prediction",
    status: "published",
    featured: false,
    categories: ["machine-learning"],
    cardDescription:
      "Estimates how long a food delivery will take, based on distance, courier rating, and other order details.",
    resultLine: "The model's predictions were off by about 4 minutes on average.",
    techTags: ["Python", "scikit-learn", "Streamlit"],
    thumbnail: "/images/projects/zomato/dashboard.jpg",
    thumbnailAlt:
      "Zomato project overview: an insight summary slide, the live Delivery Time Estimator app showing a 22.65-minute estimate, and a SHAP summary chart of delivery-time factors",
    links: {
      github: "https://github.com/erielsdewantoro/Zomato-Delivery-Prediction",
      demo: "https://zomato-delivery-prediction-eriel.streamlit.app",
    },
    recruiterSummary:
      "A regression project predicting food-delivery ETA from 45,000+ records, comparing Linear Regression, Gradient Boosting, and Random Forest regressors, and selecting Random Forest as the final model based on the evaluation results. Deployed as a live Streamlit prediction tool.",
    technicalSummary:
      "Regression task (not classification). 45,000+ records with 1,700+ missing order-time values handled during cleaning; features include Haversine distance and preparation time. Random Forest Regressor selected, R² ≈ 0.75, MAE ≈ 4 minutes. Not validated against real business outcomes.",
    caseStudy: {
      plainOpening:
        "This project tries to predict how long a food delivery will take, using details like distance and the courier's rating.",
      problem: "Delivery time uncertainty is a common source of customer frustration.",
      whatIDid:
        "Cleaned 45,000+ delivery records, engineered distance (Haversine) and preparation-time features, compared Linear Regression, Gradient Boosting, and Random Forest, and selected Random Forest as the final model based on the evaluation results.",
      resultPlain: "The model's predictions were off by about 4 minutes on average.",
      technicalDetail:
        "Regression (not classification). 45,000+ records, 1,700+ missing order-time values handled. R² ≈ 0.75, MAE ≈ 4 minutes. Not validated against real operational outcomes.",
      limitations: [
        "No confirmed business validation of the ~4-minute error margin against real-world acceptability.",
      ],
      futureImprovements: [
        "Hyperparameter tuning.",
        "Evaluating a classification framing (on-time vs. late) against the current regression approach.",
      ],
      visualEvidence: [
        {
          src: "/images/projects/zomato/dashboard.jpg",
          alt: "Three panels: an insight-and-recommendation slide with three strategy pillars, the Streamlit Delivery Time Estimator showing a 22.65-minute estimate for a 5 km delivery, and a SHAP summary plot ranking factors such as traffic density, courier rating, courier age, and distance.",
          caption:
            "Figure 1. Project overview: insight summary, live estimator app, and SHAP factor chart (interface labels in Indonesian). Impact figures on the summary slide are projections, not measured results.",
        },
      ],
    },
    seo: {
      title: "Zomato Delivery Time Prediction — Eriel Setiawan Dewantoro",
      description:
        "A regression model estimating food-delivery time from distance, courier rating, and order details.",
    },
  },

  // ---------------------------------------------------------------
  // HAJJ / PILGRIM SATISFACTION
  // ---------------------------------------------------------------
  {
    slug: "hajj-pilgrim-satisfaction",
    title: "Hajj & Umrah Pilgrim Satisfaction Analysis",
    status: "published",
    featured: true,
    categories: ["machine-learning"],
    cardDescription:
      "Looks at what factors are associated with pilgrims being satisfied during Hajj or Umrah.",
    resultLine: "Perceived safety stood out as a leading factor.",
    techTags: ["Python", "XGBoost", "Streamlit"],
    thumbnail: "/images/projects/hajj/thumb.png",
    links: {
      github: "https://github.com/erielsdewantoro/Analisis-Investigatif-Data-Haji",
      demo: "https://analisis-investigatif-data-haji.streamlit.app",
    },
    recruiterSummary:
      "A classification and dashboard project analyzing a Hajj/Umrah crowd-management dataset with an XGBoost model, deployed as a 4-page interactive Streamlit app including a prediction simulator.",
    technicalSummary:
      "XGBoost classifier identifying factors associated with the model's satisfaction predictions — perceived safety rating stands out, with queue and checkpoint wait time as the strongest negative factors. These are factors the model considered important, not proven causes. The dataset is disclosed in the repository as likely synthetic.",
    caseStudy: {
      plainOpening:
        "This project looks at which factors are associated with pilgrims feeling satisfied during Hajj or Umrah.",
      problem:
        "Understanding what drives pilgrim satisfaction can help prioritize crowd-management improvements.",
      whatIDid:
        "Analyzed a Hajj/Umrah crowd-management dataset, built an XGBoost classification model, and deployed a 4-page interactive dashboard with a scenario-based prediction simulator.",
      resultPlain:
        "Feeling safe stood out as the factor most strongly associated with satisfaction, more so than queue or checkpoint wait times.",
      technicalDetail:
        "XGBoost classifier on the \"Hajj & Umrah Crowd Management\" dataset (Kaggle). These are factors the model considered important, not proven causes. The repository discloses the dataset is likely synthetic, based on its unusually clean distribution. The dashboard itself is in Indonesian, titled \"Analisis Prediktif Kepuasan Jamaah Haji & Umrah\"; the repository is named \"Analisis Investigatif Data Haji\".",
      limitations: [
        "Findings are associative (from the model), not causal.",
        "The dataset is likely synthetic; real-world patterns may differ.",
      ],
      futureImprovements: ["Validate findings against real (non-synthetic) data, if it becomes available."],
      visualEvidence: [
        {
          src: "/images/projects/hajj/overview.png",
          alt: "Overview page of the Streamlit dashboard, with a navigation sidebar and summary figures: 10,000 pilgrim records, 30.3 minutes average queue time, and a 3.0 out of 5 average safety rating.",
          caption: "Figure 1. Overview page of the Streamlit dashboard (interface in Indonesian).",
        },
      ],
    },
    seo: {
      title: "Hajj & Umrah Pilgrim Satisfaction Analysis — Eriel Setiawan Dewantoro",
      description:
        "Analysis of factors associated with pilgrim satisfaction during Hajj and Umrah, using an XGBoost model and interactive dashboard.",
    },
  },

  // ---------------------------------------------------------------
  // SALA-X
  // ---------------------------------------------------------------
  {
    slug: "sala-x",
    title: "SALA-X Hiking Registration App",
    status: "published",
    featured: true,
    categories: ["web-it"],
    cardDescription:
      "A design for letting hikers register for mountain trails online instead of in person.",
    resultLine: "Complete interactive prototype covering the core registration flow.",
    techTags: ["Figma"],
    thumbnail: "/images/projects/sala-x/thumb.png",
    links: {
      github: "https://github.com/erielsdewantoro/SALA-X-App-UIUX",
      figma: "https://www.figma.com/design/SoLQEUB0xHppAdOzRXyDp2/SALAX?node-id=0-1&p=f",
    },
    recruiterSummary:
      "A UI/UX design project (not a built application) addressing manual, queue-heavy hiking registration for Mount Salak. Designed in Figma, covering online registration, real-time trail-quota checking, and admin reporting, delivered as a complete interactive prototype.",
    technicalSummary:
      "Figma-based UX design: user research, wireframes, high-fidelity interactive prototype. No backend, no deployed application, no documented usability testing results.",
    caseStudy: {
      plainOpening:
        "This is a design for an app that would let hikers register for mountain trails online, instead of waiting in line at a physical desk.",
      problem:
        "Manual registration (studied for Mount Salak) causes queues, disorganized records, and tracking difficulty for administrators.",
      whatIDid:
        "Conducted user research, built wireframes, and designed a high-fidelity, interactive prototype in Figma covering registration, quota checking, booking confirmation, and admin reporting.",
      resultPlain:
        "A complete, interactive design prototype that covers the core registration flow at the design level — a design deliverable, not a deployed application.",
      technicalDetail:
        "Figma only; no backend, no live code. Core screens: online registration, quota visibility across three named trails, activity management, booking confirmation, admin reporting.",
      limitations: [
        "No usability testing results are documented.",
        "There is no working implementation — this is a design project, not a built or deployed app.",
      ],
      futureImprovements: [
        "Usability testing with prospective hikers.",
        "A working front-end/back-end implementation as a natural next step.",
      ],
      visualEvidence: [
        {
          src: "/images/projects/sala-x/mockup.png",
          alt: "Three phone screens from the SALA-X prototype: a welcome screen with the SALA-X logo, a main menu with registration, mountain activities, ticket check and about-us options, and a quota table listing available spots by date for three trails.",
          caption: "Figure 1. SALA-X prototype screens: welcome, main menu, and trail quota (interface in Indonesian).",
        },
      ],
    },
    seo: {
      title: "SALA-X Hiking Registration App Design — Eriel Setiawan Dewantoro",
      description:
        "A UI/UX design project for online mountain-hiking trail registration, built in Figma.",
    },
  },

  // ---------------------------------------------------------------
  // WEDDING INVITATION (private)
  // ---------------------------------------------------------------
  {
    slug: "wedding-invitation",
    title: "Wedding Invitation Website",
    status: "private",
    categories: ["web-it"],
    cardDescription:
      "A website built for a client's wedding so guests could view details and RSVP online.",
    resultLine: "",
    techTags: [],
    links: {},
    recruiterSummary:
      "A client-based wedding invitation website. Source code and database are kept private because they involve guest information.",
    technicalSummary:
      "Not detailed publicly — source code and database are private because they involve guest information.",
    caseStudy: {
      plainOpening:
        "A website built for a client's wedding so their guests could view event details and RSVP online.",
      // problem / whatIDid / resultPlain intentionally omitted (not
      // confirmed) — the private case-study template never renders these
      // as empty sections or placeholder text; see PrivateNotice.
      technicalDetail:
        "Source code and database are kept private because they involve guest information, so public details about this project are intentionally limited.",
      // No separate "limitations" list: the private-project notice above
      // already states that public detail is intentionally limited.
      limitations: [],
      futureImprovements: [],
    },
    seo: {
      title: "Wedding Invitation Website — Eriel Setiawan Dewantoro",
      description: "A client-based wedding invitation website with private source and guest data.",
    },
    needsConfirmation: [
      "Problem statement, approach, technology stack, and result",
      "Any safe public link confirmed free of guest/private data",
    ],
  },

  // <<NEW-PROJECTS-HERE>> — `npm run new-project` inserts new entries above this line.
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
