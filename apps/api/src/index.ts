import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router.js";

// Re-export types for frontend
export type { AppRouter } from "./router.js";

const PORT = parseInt(process.env.PORT || "26270", 10);
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:26271";

// Create server
const server = Bun.serve({
    port: PORT,
    async fetch(req) {
        // Handle CORS preflight
        if (req.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": FRONTEND_URL,
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        // Handle tRPC requests
        const response = await fetchRequestHandler({
            endpoint: "/trpc",
            req,
            router: appRouter,
            createContext: () => ({}),
        });

        // Add CORS headers
        response.headers.set("Access-Control-Allow-Origin", FRONTEND_URL);
        response.headers.set("Access-Control-Allow-Credentials", "true");

        return response;
    },
});

console.log(`🚀 Server running at http://localhost:${PORT}`);
console.log(`📡 tRPC endpoint: http://localhost:${PORT}/trpc`);
