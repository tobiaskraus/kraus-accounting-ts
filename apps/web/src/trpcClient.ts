import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@kraus-accounting/api/router";

export const trpcClient = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "http://localhost:3001/trpc",
        }),
    ],
});
