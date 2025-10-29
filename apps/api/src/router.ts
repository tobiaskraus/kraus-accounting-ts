import { initTRPC } from "@trpc/server";
import type { FixedCost } from "@kraus-accounting/shared";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

// In-memory storage (will be replaced with database later)
let fixedCosts: FixedCost[] = [
    {
        id: "1",
        label: "Notwendig",
        comment: "Account: tobias@example.com",
        periods: [
            {
                id: "p1",
                eur_per_month: 9.99,
                billing_notes: "Monthly subscription",
                from_date: "2024-01-01",
                assignee: "Tobias",
            },
        ],
    },
    {
        id: "2",
        label: "Produktivität",
        comment: "Team account",
        periods: [
            {
                id: "p2",
                eur_per_month: 15.99,
                billing_notes: "Billed annually",
                from_date: "2024-03-01",
                assignee: "Common",
            },
        ],
    },
    {
        id: "3",
        label: "Notwendig",
        comment: "",
        periods: [
            {
                id: "p3",
                eur_per_month: 52.0,
                billing_notes: "52€ every year",
                from_date: "2023-06-01",
                till_date: "2024-05-31",
                assignee: "Gabriele",
            },
            {
                id: "p4",
                eur_per_month: 55.0,
                billing_notes: "55€ every year",
                from_date: "2024-06-01",
                assignee: "Gabriele",
            },
        ],
    },
];

export const appRouter = router({
    fixedCosts: {
        list: publicProcedure.query(() => {
            return fixedCosts;
        }),
    },
});

export type AppRouter = typeof appRouter;
