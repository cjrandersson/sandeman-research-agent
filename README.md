<div align="center">

# ⚡ sändeman task dashboar - data 4 real

**Vår gemensamma kontrollpanel för sprinten — från planering till leverans.**

</div>

<!-- KANBAN:START -->

![Sprint](https://img.shields.io/badge/Sprint-Product%20Sprint%2008-6f42c1?style=flat-square) ![Progress](https://img.shields.io/badge/Progress-23%25-84cc16?style=flat-square) ![Points](https://img.shields.io/badge/Points-7%20of%2031-238636?style=flat-square) ![Blockers](https://img.shields.io/badge/Blockers-1-cf222e?style=flat-square)

> **Sprintmål:** Leverera ett tydligt onboarding-flöde och en stabil releasegrund.  
> **Period:** 2–13 oktober 2026 · **Senast uppdaterad:** 2 okt. 2026 02:00

## Board

◻️ **Sprint backlog**<br><sub>1 task</sub> | 🔵 **In progress**<br><sub>2 tasks</sub> | 🟣 **Testing / Review**<br><sub>1 task</sub> | 🔴 **Blocker**<br><sub>1 task</sub> | ✅ **Done**<br><sub>2 tasks</sub>
:--- | :--- | :--- | :--- | :---
**TMP-101**<br>Definiera sprintmål och acceptanskriterier<br><sub>🔴 Hög · ◆ 5p · 👤 Robin</sub><br>`planning` `sprint` | **TMP-102**<br>Bygg nytt onboarding-flöde<br><sub>🔴 Hög · ◆ 8p · 👤 MA</sub><br>`frontend` `ux`<br><br><hr><br>**TMP-103**<br>Koppla event tracking till dashboard<br><sub>🟠 Medium · ◆ 5p · 👤 JL</sub><br>`analytics` `api` | **TMP-104**<br>Granska copy och tomma lägen<br><sub>🔵 Låg · ◆ 3p · 👤 SK</sub><br>`content` `qa` | **TMP-105**<br>Verifiera behörigheter i staging<br><sub>🔴 Hög · ◆ 3p · 👤 AN</sub><br>`backend` `security`<br>⛔ <sub>Väntar på testkonto från IT</sub> | **TMP-106**<br>~~Sätt upp designsystemets färgtokens~~<br><sub>🟠 Medium · ◆ 5p · 👤 Robin</sub><br>`design` `frontend`<br><br><hr><br>**TMP-107**<br>~~Dokumentera release-checklistan~~<br><sub>🔵 Låg · ◆ 2p · 👤 MA</sub><br>`docs`

## 🚨 Blocker radar

- **TMP-105 · Verifiera behörigheter i staging** — Väntar på testkonto från IT · 👤 AN

## Sprint health

| Tasks | Story points | Klart | Pågående | I review | Blockerade |
|---:|---:|---:|---:|---:|---:|
| **7** | **7/31** | **2** | **2** | **1** | **1** |

<!-- KANBAN:END -->

## Så uppdaterar vi boarden

README-filen genereras från [`.github/kanban/tasks.json`](.github/kanban/tasks.json). Ändra inte innehållet mellan `KANBAN`-markörerna manuellt — kör ett kommando eller uppdatera datafilen i stället.

```bash
# Synka README efter en manuell ändring i tasks.json
node .github/kanban/board.mjs sync

# Lägg till en task
node .github/kanban/board.mjs add --title "Förbered release" --status backlog --priority high --points 5 --assignee Robin --tags release,ops

# Flytta, blockera eller slutför
node .github/kanban/board.mjs move TMP-102 review
node .github/kanban/board.mjs block TMP-103 "Väntar på API-nyckel"
node .github/kanban/board.mjs done TMP-104
```

### Via GitHub

Öppna **Actions → Kanban Dashboard → Run workflow** och välj åtgärd. Samma workflow kan anropas med GitHub CLI eller GitHubs workflow-dispatch API:

```bash
gh workflow run kanban-dashboard.yml \
  -f action=move \
  -f id=TMP-102 \
  -f status=review
```

Workflowen uppdaterar task-datan, regenererar denna README och committar förändringen. Den körs även automatiskt när `tasks.json` ändras på default-branchen.

## Våra flödesregler

| Status | När används den? | Exit-kriterium |
|---|---|---|
| **Sprint backlog** | Definierad och prioriterad för aktuell sprint | Någon tar ägarskap och arbetet startar |
| **In progress** | Aktivt arbete pågår | Implementationen är redo att verifieras |
| **Testing / Review** | Test, QA eller review pågår | Godkänd utan öppna kritiska anmärkningar |
| **Blocker** | Arbetet kan inte fortsätta | Blocker-orsaken är löst och tasken återgår till flödet |
| **Done** | Levererad enligt acceptanskriterier | Ingen ytterligare åtgärd krävs i sprinten |

<sub>Dashboarden kräver inga npm-paket och kan uppdateras lokalt eller helt genom GitHub Actions.</sub>
