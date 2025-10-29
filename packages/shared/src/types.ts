export type Assignee = "Tobias" | "Gabriele" | "Common";

export interface Period {
    id: string;
    eur_per_month: number;
    billing_notes?: string;
    from_date: string; // ISO date string
    till_date?: string; // ISO date string, optional
    comment?: string;
    assignee: Assignee;
}

export interface FixedCost {
    id: string;
    label?: string;
    comment?: string;
    periods: Period[];
}

// Computed/derived fields (not stored, calculated from current period)
export interface FixedCostWithComputed extends FixedCost {
    // Computed from the current/active period
    assignee: Assignee;
    eur_per_month: number;
}
