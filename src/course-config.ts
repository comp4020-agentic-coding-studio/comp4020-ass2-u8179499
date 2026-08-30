import type { CourseMetaInput } from "astro-course-university";
import { z } from "astro/zod";

// The level digits ANU uses: 1000--4000 undergraduate, 6000 and 8000
// postgraduate. Both the code pattern and the level field derive from this.
const LEVELS = [1, 2, 3, 4, 6, 8] as const;
const allowedCode = new RegExp(`^SLOP[${LEVELS.join("")}]\\d{3}$`);

export const slopCourseMetaSchema = z
  .strictObject({
    code: z.string().regex(allowedCode, {
      message: "use SLOP plus a 1000–4000, 6000 or 8000 level code",
    }),
    title: z.string().trim().min(1).max(100),
    session: z.string().trim().min(1).max(40),
    year: z.number().int().min(2026).max(2200),
    level: z.literal(LEVELS),
    startDate: z.iso.date(),
    endDate: z.iso.date(),
    description: z.string().trim().min(80).max(300),
    tags: z.array(z.string().trim().min(2).max(24)).min(1).max(3),
  })
  .superRefine((course, ctx) => {
    const codeLevel = Number(course.code.at(4));
    if (course.level !== codeLevel) {
      ctx.addIssue({
        code: "custom",
        path: ["level"],
        message: `must match ${course.code}'s first digit (${codeLevel})`,
      });
    }
    if (course.startDate > course.endDate) {
      ctx.addIssue({
        code: "custom",
        path: ["startDate"],
        message: "must not be after endDate",
      });
    }
  });

// The single source of truth for the course record. The generated homepage,
// navigation label and /api/index.json all read this object.
// Replace every placeholder value, but keep the shape: the catalogue ingests
// this API contract when the course is published.
//
// The code's last three digits were assigned to this repo when it was
// provisioned, and no other course in the cohort has them. Change the first
// digit to your course's level (and `level` to match); keep the other three.
export const courseMeta = {
  ...slopCourseMetaSchema.parse({
    code: "SLOP3550",
    title: "Buttons: Twelve Weeks of Pressing Things",
    session: "Semester 1",
    year: 2027,
    level: 3,
    startDate: "2027-02-22",
    endDate: "2027-05-28",
    description:
      "A button is the smallest promise an interface makes: press me, and " +
      "something will happen. This course spends twelve weeks taking that " +
      "promise apart — its history, its timing, its psychology, its " +
      "failures, and who benefits when you believe it.",
    tags: ["buttons", "interaction", "interface"],
  }),
  learningOutcomes: [
    "Explain how a digital button inherits its meaning from a century of mechanical predecessors.",
    "Analyse why an interface element reads as pressable, using the vocabulary of affordance and signifier, independent of visual style.",
    "Design and build a button whose feedback timing and reward structure match the actual weight of the action it performs.",
    "Identify a real manipulative button, rebuild an honest version of it, and name precisely what leverage was removed.",
    "Test a single button across different bodies and reaches, and identify the exact point where the same push mechanism stops working for a hand that isn't yours.",
    "Defend, in full technical and rhetorical detail, why one specific button deserves to be pressed.",
  ],
} satisfies CourseMetaInput;
