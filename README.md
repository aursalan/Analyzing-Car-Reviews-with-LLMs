# 🚗 Analyzing Car Reviews with LLMs

## 📌 Project Overview
This project explores the use of **Large Language Models (LLMs)** for analyzing car reviews. It covers **sentiment classification, translation, extractive question answering, and summarization** to gain insights into customer feedback.

## 🎯 Objectives
1. **Sentiment Analysis:** Classify reviews as **positive** or **negative** and evaluate performance using **accuracy and F1 score**.
2. **Translation:** Convert English reviews to Spanish and measure the translation quality using the **BLEU score**.
3. **Extractive QA:** Use a Question Answering (QA) model to extract relevant details from reviews.
4. **Summarization:** Generate concise summaries of car reviews.

## 🛠️ Setup & Installation
### 🔹 Prerequisites
Ensure you have Python installed and set up the required dependencies:

```bash
pip install transformers torch datasets evaluate sacrebleu
```

### 🔹 Dataset Files
- **`car_reviews.csv`** - Contains car reviews along with sentiment labels.
- **`reference_translations.txt`** - Provides reference Spanish translations for BLEU score evaluation.

### 🔹 Running the Script
Execute the script to analyze car reviews:

```bash
script.ipynb
```

## 📊 Model Details
The following pre-trained models are used for different tasks:

| Task | Model Used |
|------|-----------|
| **Sentiment Analysis** | `distilbert-base-uncased-finetuned-sst-2-english` |
| **Translation** | `Helsinki-NLP/opus-mt-en-es` |
| **Extractive QA** | `deepset/minilm-uncased-squad2` |
| **Summarization** | `cnicu/t5-small-booksum` |

## 🔗 Future Enhancements
- **Fine-tuning models** for better accuracy on car reviews.
- Expanding support for **multiple languages**.
- Developing an **API or web-based tool** for real-time review analysis.

## 📜 License
This project is licensed under the **MIT License**.

---

🚀 **Contributions are welcome!** If you find this useful, consider giving it a ⭐ on GitHub!
