import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";

import { User } from "./schemas/user";

const databaseURL = process.env.DATABASE_URL || "";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365, // How long they stay signed in? 365 days.
  secret: process.env.COOKIE_SECRET,
};

export default config({
  lists: createSchema({
    User,
  }),
  db: {
    adapter: "prisma_postgresql",
    url: databaseURL,
  },
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  // TODO: Add session values here
});
