📊 Sales AI Agent — KPI Analytics & Decision Support System

⚠️ Status: Actively under development
This project is being built iteratively. KPI definitions, dashboards, and analytical insights will be added and refined as development progresses.

⚠️ Disclaimer: Due to confidentiality, I recreated the data using synthetic distributions that preserve real-world behavior. The KPIs, system design, and analytics logic are identical to production. No proprietary or confidential company data is included.

📌 Project Overview  
---
- Problem Overview
  - The Sales AI Agent is an end-to-end data analytics and decision-support system designed to analyze sales performance and KPI achievement for a cosmetics company.
    The goal of this project is to transform raw sales data into actionable insights, data-driven KPI evaluation, and strategic recommendations through an interactive AI-powered interface.

    As product SKUs, brands, and distribution channels grow, revenue streams become more complex and diversified -- and therefore, manual KPI analysis becomes inefficient and error-prone, leading to inaccurate evaluations and improperly utilized opportunities.
    This system aims to automate KPI analysis, surface hidden trends, and support strategic decision-making for sales and operations teams.
    
- Problem Definition
  - Sales performance has a direct correlation to revenue outcomes, and therefore KPI data is crucial for proper understanding of company revenue and future endeavors.
  - Optimizing SKUs, brands, and platforms will help maximize returns.
  - Analyzing KPI metrics and incorporating AI for deliverable insights will optimize sales and revenue strategies.

- Estimated Timeline: 2025.12.17 ~ 2026.02.28

- Main Responsibilities:
  - Deploy KPI dashboard, implement API connections for ChatGPT and dashboard interactions.
  - Define KPI metrics + calculations, extract KPI insights, and set new KPI objectives (statistical).
  - Cohort Analysis (Application: brands, ** model determined after EDA **).
  - Predictive Modeling (sales forecasts, ARIMA / SARIMA)
  - Anomaly Detection (Application: revenue drops, ** usage determined after EDA **)
  - Prescriptive Intelligence (Root Cause Suggestion Engine + Recommendation Layer)

🎯 Objectives
- Analyze sales performance across brands, products (SKUs), channels, and vendors.
- Define and evaluate core business KPIs.
- Provide AI-assisted explanations and insights from sales data.
- Enable interactive dashboards for KPI monitoring.
- Support data-driven sales strategy and resource optimization.

🧠 Key Business Questions

This project aims to answer questions such as:
- Which brands and SKUs are driving revenue growth?
- Which KPIs are underperforming, and why?
- How does sales performance differ by channel or vendor?
- What patterns emerge across time, product types, or price tiers?
- How can KPI insights inform future sales strategies?

🛠 Data, System Architecture, Tech Stack
---
- Data Collection and Preprocessing
  - Revenue data from Skincare Company A
  - ~10000 rows, 7 columns
  - Preprocessing
    - Changed data type of date column (string -> datetime) for time series
    - Created new column: Order_Revenue = Price * Quantity

- System Architecture
  - [ Sales Data ] -> [ FastAPI Backend ] -> [ KPI Computation & Analytics Layer ] -> [ AI Insight Layer (LLM-assisted) ] -> [ React Dashboard and Chat Interface ]

- Tech Stack
  - Backend: Python, NumPy, FastAPI, OpenAI API
  - Frontend: JavaScript, React, Axios
  - Data & Analytics: KPI metrics computation, aggregations & cohort analysis, time-series, comparative analysis, predictive modeling, root cause analysis & recommedation layer
  - AI Layer: LLM-based natural language explanation, KPI insight summarization, Business question answering
