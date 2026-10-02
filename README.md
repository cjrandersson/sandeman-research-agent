<div align="center">

# ⚡ Sändeman task dashboard

**Vår gemensamma kontrollpanel för sprinten — från planering till leverans.**

</div>

<!-- KANBAN:START -->

![Sprint](https://img.shields.io/badge/Sprint-Foundation%20Sprint%2001-6f42c1?style=flat-square) ![Progress](https://img.shields.io/badge/Progress-0%25-84cc16?style=flat-square) ![Points](https://img.shields.io/badge/Points-0%20of%2031-238636?style=flat-square) ![Blockers](https://img.shields.io/badge/Blockers-0-cf222e?style=flat-square)

> **Sprintmål:** Låsa den första intelligenskärnan och det användarflöde som interfacet ska bygga på.<br>
> **Period:** 2–13 oktober 2026 · **Senast uppdaterad:** 2026-10-02

## Board

◻️ **Sprint backlog**<br><sub>6 tasks</sub> | 🔵 **In progress**<br><sub>1 task</sub> | 🟣 **Testing / Review**<br><sub>0 tasks</sub> | 🔴 **Blocker**<br><sub>0 tasks</sub> | ✅ **Done**<br><sub>0 tasks</sub>
:--- | :--- | :--- | :--- | :---
**SND-102**<br>Lås The Brain: datamodell, signaler och analysprinciper<br><sub>🔴 Hög · ◆ 8p · 👤 Codex</sub><br>`architecture` `signal-engine`<br><br><hr><br>**SND-103**<br>Kartlägg första flödet: källa → analys → insikt<br><sub>🔴 Hög · ◆ 5p · 👤 CJ + Codex</sub><br>`product` `ux`<br><br><hr><br>**SND-104**<br>Skissa första gränssnittet och drag-and-drop-principen<br><sub>🟠 Medium · ◆ 3p · 👤 CJ</sub><br>`interface` `ux`<br><br><hr><br>**SND-105**<br>Definiera första datakällan och ett säkert demo-dataset<br><sub>🔴 Hög · ◆ 3p · 👤 Codex</sub><br>`data` `research`<br><br><hr><br>**SND-106**<br>Sätt upp repo, README och teknisk grund<br><sub>🟠 Medium · ◆ 5p · 👤 Codex</sub><br>`repository` `setup`<br><br><hr><br>**SND-107**<br>Formulera produktnarrativ: varför Sändeman finns<br><sub>🟠 Medium · ◆ 2p · 👤 CJ + Codex</sub><br>`product` `narrative` | **SND-101**<br>Definiera sprintmål och acceptanskriterier<br><sub>🔴 Hög · ◆ 5p · 👤 CJ + Codex</sub><br>`planning` `sprint` | — | — | —

## 🚨 Blocker radar

- Inga aktiva blockers.

## Sprint health

| Tasks | Story points | Klart | Pågående | I review | Blockerade |
|---:|---:|---:|---:|---:|---:|
| **7** | **0/31** | **0** | **1** | **0** | **0** |

<!-- KANBAN:END -->

## Så uppdaterar vi boarden

README-filen genereras från [`kanban/tasks.json`](kanban/tasks.json). Ändra inte innehållet mellan `KANBAN`-markörerna manuellt — kör ett kommando eller uppdatera datafilen i stället.

```bash
# Synka README efter en manuell ändring i tasks.json
node kanban/board.mjs sync

# Ändra `kanban/tasks.json`, sedan synka
node kanban/board.mjs sync
```

### Via GitHub

Ändra `kanban/tasks.json` direkt i GitHub och kör sedan generatorn lokalt före commit. GitHub Actions-automatisering kan läggas till när vi vill kunna flytta tasks direkt från Actions.

## Våra flödesregler

| Status | När används den? | Exit-kriterium |
|---|---|---|
| **Sprint backlog** | Definierad och prioriterad för aktuell sprint | Någon tar ägarskap och arbetet startar |
| **In progress** | Aktivt arbete pågår | Implementationen är redo att verifieras |
| **Testing / Review** | Test, QA eller review pågår | Godkänd utan öppna kritiska anmärkningar |
| **Blocker** | Arbetet kan inte fortsätta | Blocker-orsaken är löst och tasken återgår till flödet |
| **Done** | Levererad enligt acceptanskriterier | Ingen ytterligare åtgärd krävs i sprinten |

<sub>Dashboarden kräver inga npm-paket och kan uppdateras lokalt eller helt genom GitHub Actions.</sub>
