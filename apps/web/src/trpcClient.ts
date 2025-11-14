import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@kraus-accounting/api/router";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:26270";

export const trpcClient = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${API_URL}/trpc`,
        }),
    ],
});
