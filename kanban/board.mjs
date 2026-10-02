#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const tasksUrl = new URL("tasks.json", import.meta.url);
const readmeUrl = new URL("../README.md", import.meta.url);
const statuses = ["backlog", "in_progress", "review", "blocker", "done"];
const labels = {
  backlog: "◻️ **Sprint backlog**",
  in_progress: "🔵 **In progress**",
  review: "🟣 **Testing / Review**",
  blocker: "🔴 **Blocker**",
  done: "✅ **Done**"
};
const priority = { high: "🔴 Hög", medium: "🟠 Medium", low: "🔵 Låg" };

function card(task) {
  const title = task.status === "done" ? `~~${task.title}~~` : task.title;
  const tags = task.tags.map((tag) => `\`${tag}\``).join(" ");
  const blocked = task.blocked_reason ? `<br>⛔ <sub>${task.blocked_reason}</sub>` : "";
  return `**${task.id}**<br>${title}<br><sub>${priority[task.priority]} · ◆ ${task.points}p · 👤 ${task.assignee}</sub><br>${tags}${blocked}`;
}

function plural(count) { return `${count} ${count === 1 ? "task" : "tasks"}`; }

function render(data) {
  const groups = Object.fromEntries(statuses.map((status) => [status, data.tasks.filter((task) => task.status === status)]));
  const totalPoints = data.tasks.reduce((sum, task) => sum + task.points, 0);
  const donePoints = groups.done.reduce((sum, task) => sum + task.points, 0);
  const progress = totalPoints === 0 ? 0 : Math.round((donePoints / totalPoints) * 100);
  const headers = statuses.map((status) => `${labels[status]}<br><sub>${plural(groups[status].length)}</sub>`).join(" | ");
  const row = statuses.map((status) => groups[status].map(card).join("<br><br><hr><br>") || "—").join(" | ");
  const blockers = groups.blocker.length
    ? groups.blocker.map((task) => `- **${task.id} · ${task.title}** — ${task.blocked_reason || "Orsak ej angiven"} · 👤 ${task.assignee}`).join("\n")
    : "- Inga aktiva blockers.";

  return `![Sprint](https://img.shields.io/badge/Sprint-${encodeURIComponent(data.sprint.name)}-6f42c1?style=flat-square) ![Progress](https://img.shields.io/badge/Progress-${progress}%25-84cc16?style=flat-square) ![Points](https://img.shields.io/badge/Points-${donePoints}%20of%20${totalPoints}-238636?style=flat-square) ![Blockers](https://img.shields.io/badge/Blockers-${groups.blocker.length}-cf222e?style=flat-square)\n\n> **Sprintmål:** ${data.sprint.goal}<br>\n> **Period:** ${data.sprint.period} · **Senast uppdaterad:** ${data.sprint.updated}\n\n## Board\n\n${headers}\n:--- | :--- | :--- | :--- | :---\n${row}\n\n## 🚨 Blocker radar\n\n${blockers}\n\n## Sprint health\n\n| Tasks | Story points | Klart | Pågående | I review | Blockerade |\n|---:|---:|---:|---:|---:|---:|\n| **${data.tasks.length}** | **${donePoints}/${totalPoints}** | **${groups.done.length}** | **${groups.in_progress.length}** | **${groups.review.length}** | **${groups.blocker.length}** |`;
}

async function sync() {
  const data = JSON.parse(await readFile(tasksUrl, "utf8"));
  const readme = await readFile(readmeUrl, "utf8");
  const board = render(data);
  const next = readme.replace(/<!-- KANBAN:START -->[\s\S]*?<!-- KANBAN:END -->/, `<!-- KANBAN:START -->\n\n${board}\n\n<!-- KANBAN:END -->`);
  if (next === readme) throw new Error("KANBAN-markörerna saknas i README.md.");
  await writeFile(readmeUrl, next);
}

const [command, ...args] = process.argv.slice(2);
if (command === "sync") await sync();
else throw new Error("Endast `node kanban/board.mjs sync` stöds just nu.");
