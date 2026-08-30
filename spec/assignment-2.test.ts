import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the SLOPxxxx code's assigned three digits", () => {
    expect(api.course.code).toMatch(/^SLOP[123468]550$/);
  });

  it("has dated material in every one of the twelve teaching weeks", () => {
    const weeks = new Set(
      api.nodes
        .filter((node) => ["sessions", "lectures", "assessments"].includes(node.type))
        .map((node) => node.meta?.week),
    );
    for (let week = 1; week <= 12; week++) {
      expect(weeks.has(week), `no session, lecture or assessment lands in week ${week}`).toBe(
        true,
      );
    }
  });

  it("weights its assessments to add up to 100%", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("has at least one lecture linked to a deck that actually built", () => {
    const decked = byType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(decked.length, "no lecture carries a slides link").toBeGreaterThan(0);
    const built = decked.some((node) =>
      existsSync(resolve("dist", `${(node.meta?.slides as string).replace(/^\/|\/$/g, "")}`, "index.html")),
    );
    expect(built, "no linked deck has a built page in dist/").toBe(true);
  });
});
