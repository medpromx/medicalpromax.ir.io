# Medical ProMax - Static Question Database

A lightweight, static GitHub Pages site for hosting medical exam questions in Persian. Questions are loaded via `fetch()` from JSON files organized by specialty and subsection.

## Repository Structure

```
medicalpromax.ir.io/
├─ index.html                          # Main UI (fetch-based loader)
├─ data/
│  ├─ manifest.json                    # Index of all sections and subsections
│  ├─ heart/                           # Cardiac questions
│  │  ├─ ihd.json                      # Ischemic heart disease
│  │  ├─ valvular.json                 # Valve disorders
│  │  ├─ heart_failure.json            # Heart failure & cardiomyopathy
│  │  ├─ pericardial.json              # Pericardial disease
│  │  ├─ arrhythmia.json               # Arrhythmias & conduction
│  │  └─ vascular_congenital.json      # Vascular & congenital
│  ├─ icu/                             # Critical care questions
│  │  ├─ shock_hemodynamics.json       # Shock & hemodynamics
│  │  ├─ ventilation_airway.json       # Ventilation & airway management
│  │  ├─ icu_infections.json           # ICU infections
│  │  ├─ adrenal_metabolic.json        # Adrenal & metabolic crises
│  │  └─ hypoxia_physiology.json       # Hypoxia physiology
│  ├─ lung/                            # Respiratory questions
│  │  ├─ obstructive.json              # Obstructive diseases (asthma/COPD)
│  │  ├─ infections_pleura.json        # Infections & pleural disease
│  │  ├─ ild_occupational.json         # ILD & occupational diseases
│  │  ├─ pulmonary_vascular.json       # Pulmonary vascular (PTE/PH)
│  │  └─ sleep_disorders.json          # Sleep disorders (OSA)
│  └─ nephro/                          # Nephrology questions
│     ├─ aki_nephrotoxins.json         # AKI & nephrotoxins
│     ├─ glomerular_structural.json    # Glomerular & structural
│     ├─ ckd_dialysis.json             # CKD & dialysis
│     ├─ electrolytes_acidbase.json    # Electrolytes & acid-base
│     ├─ stones_uti.json               # Stones & UTI
│     └─ transplant.json               # Transplantation
├─ assets/                             # Optional: for future styling/assets
├─ README.md                           # This file
└─ .gitignore                          # Git ignore rules

```

## Question File Format

Each question JSON file has this structure:

```json
{
  "section_id": "heart",
  "subsection_id": "ihd",
  "title": "ایسکمیک (IHD/CAD)",
  "questions": [
    {
      "question": "Question text in Persian",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct_index": 0,
      "analysis": {
        "points": "Key learning points text",
        "options": ["Analysis of A", "Analysis of B", "Analysis of C", "Analysis of D"]
      }
    }
  ]
}
```

## Running Locally

### Using Python HTTP Server

```bash
# Navigate to repo directory
cd medicalpromax.ir.io

# Start Python HTTP server on port 8000
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Using Node.js http-server

```bash
npm install -g http-server
http-server
```

### Using Ruby WEBrick

```bash
ruby -run -ehttpd . -p8000
```

**Important**: Due to browser security policies, fetch requests from `file://` URLs will fail. Always use an HTTP server for local testing.

## Deploying to GitHub Pages

### Via GitHub Settings UI

1. Push your code to GitHub (branch `main`)
2. Go to **Settings** → **Pages**
3. Select **Deploy from a branch**
4. Choose branch: `main`
5. Select folder: `/(root)`
6. Click **Save**
7. Your site will be published at: `https://username.github.io/medicalpromax.ir.io`

### Accessing via URL

- **Direct domain** (if set up): `https://medicalpromax.ir.io`
- **GitHub Pages default**: `https://medpromx.github.io/medicalpromax.ir.io`

## UI Features

- **Section Cards**: 4 main sections (قلب، ICU، ریه، نفرو)
- **Subsection List**: Click a section to see all subsections
- **Question Viewer**: Click a subsection to view questions
- **Answer Toggle**: "Show Answer" button reveals correct option and analysis
- **Navigation**: Previous/Next buttons for browsing questions
- **RTL Support**: Full Persian (فارسی) UI support with proper text direction

## Adding Questions

To add questions to a subsection:

1. Open the corresponding JSON file (e.g., `data/heart/ihd.json`)
2. Add question objects to the `questions` array
3. Commit and push
4. GitHub Pages will auto-update (CDN may take a few minutes to cache)

Example:

```json
{
  "section_id": "heart",
  "subsection_id": "ihd",
  "title": "ایسکمیک (IHD/CAD)",
  "questions": [
    {
      "question": "نخستین تظاهرات نکروز میوکاردی در ECG کدام است؟",
      "options": [
        "ST segment elevation",
        "T wave inversion",
        "Pathologic Q waves",
        "T wave peaking"
      ],
      "correct_index": 3,
      "analysis": {
        "points": "The first ECG change in acute MI is peaked T waves within minutes, followed by ST elevation.",
        "options": [
          "A: Occurs later in the course",
          "B: Also later, indicates ischemia",
          "C: Develops over hours",
          "D: First change, occurs within minutes"
        ]
      }
    }
  ]
}
```

## File Validation

Ensure all JSON files are valid:

```bash
python -m json.tool data/heart/ihd.json > /dev/null && echo "Valid JSON"
```

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- **No build step required**: Pure vanilla JavaScript and CSS
- **No external dependencies**: Works offline once cached
- **SEO-friendly**: Static HTML with metadata
- **Fast load**: JSON files are small and can be gzipped by GitHub Pages

## Troubleshooting

### Questions not loading locally
- **Cause**: Using `file://` protocol
- **Fix**: Use `python -m http.server 8000` instead

### CORS error when fetching JSON
- **Cause**: Wrong protocol or domain
- **Fix**: Ensure you're using `http://` or `https://` and correct relative paths

### GitHub Pages shows 404
- **Cause**: Wrong repo name in URL
- **Fix**: Verify repo is public and settings are configured correctly

## License

Medical ProMax Question Database - Open Educational Resource

## Contributing

To contribute questions:

1. Fork this repository
2. Create a feature branch: `git checkout -b add-questions`
3. Add valid JSON questions to appropriate subsection files
4. Validate JSON: `python -m json.tool <file.json>`
5. Commit and push
6. Submit a pull request

---

**Last Updated**: December 2025  
**Maintainer**: Medical ProMax Team