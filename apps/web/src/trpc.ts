import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { AppRouter } from "@kraus-accounting/api/router";

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();
