import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../trpc.js";
import type { Assignee, FixedCost } from "@kraus-accounting/shared";
import { Button } from "@/components/ui/button.js";

function getCurrentPeriod(fixedCost: FixedCost) {
    const now = new Date();
    return fixedCost.periods.find((period) => {
        const fromDate = new Date(period.from_date);
        const tillDate = period.till_date ? new Date(period.till_date) : null;
        return fromDate <= now && (!tillDate || tillDate >= now);
    });
}

function computeFixedCost(fixedCost: FixedCost) {
    const currentPeriod = getCurrentPeriod(fixedCost);
    if (!currentPeriod) {
        return null;
    }
    return {
        ...fixedCost,
        assignee: currentPeriod.assignee,
        eur_per_month: currentPeriod.eur_per_month,
    };
}

function isActiveOnDate(fixedCost: FixedCost, filterDate: Date | null) {
    if (!filterDate) return true;
    return fixedCost.periods.some((period) => {
        const fromDate = new Date(period.from_date);
        const tillDate = period.till_date ? new Date(period.till_date) : null;
        return fromDate <= filterDate && (!tillDate || tillDate >= filterDate);
    });
}

export default function FixedCostsPage() {
    const trpc = useTRPC();
    const { data: fixedCosts = [], isLoading } = useQuery(trpc.fixedCosts.list.queryOptions());

    const [assigneeFilter, setAssigneeFilter] = useState<Assignee | "all">("all");
    const [dateFilter, setDateFilter] = useState<string>("");

    const filterDate = dateFilter ? new Date(dateFilter) : null;

    const filteredCosts = fixedCosts
        .map(computeFixedCost)
        .filter((cost): cost is NonNullable<typeof cost> => {
            if (!cost) return false;
            if (assigneeFilter !== "all" && cost.assignee !== assigneeFilter) return false;
            if (!isActiveOnDate(cost, filterDate)) return false;
            return true;
        });

    return (
        <div>
            <h2>Fixed Costs</h2>

            <Button>Click me</Button>

            <div
                style={{ marginBottom: "20px", display: "flex", gap: "10px", alignItems: "center" }}
            >
                <label>
                    Filter by person:
                    <select
                        value={assigneeFilter}
                        onChange={(e) => setAssigneeFilter(e.target.value as Assignee | "all")}
                        style={{ marginLeft: "8px" }}
                    >
                        <option value="all">All</option>
                        <option value="Tobias">Tobias</option>
                        <option value="Gabriele">Gabriele</option>
                        <option value="Common">Common</option>
                    </select>
                </label>

                <label>
                    Filter by date:
                    <input
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        style={{ marginLeft: "8px" }}
                    />
                </label>
            </div>

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ borderBottom: "2px solid #ccc" }}>
                            <th style={{ textAlign: "left", padding: "8px" }}>Label</th>
                            <th style={{ textAlign: "left", padding: "8px" }}>Title/Comment</th>
                            <th style={{ textAlign: "left", padding: "8px" }}>Assignee</th>
                            <th style={{ textAlign: "right", padding: "8px" }}>€/Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCosts.length === 0 ? (
                            <tr>
                                <td colSpan={4} style={{ padding: "16px", textAlign: "center" }}>
                                    No fixed costs found
                                </td>
                            </tr>
                        ) : (
                            filteredCosts.map((cost) => (
                                <tr key={cost.id} style={{ borderBottom: "1px solid #eee" }}>
                                    <td style={{ padding: "8px" }}>{cost.label || "-"}</td>
                                    <td style={{ padding: "8px" }}>{cost.comment || "-"}</td>
                                    <td style={{ padding: "8px" }}>{cost.assignee}</td>
                                    <td style={{ padding: "8px", textAlign: "right" }}>
                                        {cost.eur_per_month.toFixed(2)} €
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}
