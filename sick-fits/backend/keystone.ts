import "dotenv/config";

import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  statelessSessions,
  withItemData,
} from "@keystone-next/keystone/session";

import { Product } from "./schemas/product";
import { ProductImage } from "./schemas/product-image";
import { User } from "./schemas/user";

const databaseURL = process.env.DATABASE_URL || "";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365, // How long they stay signed in? 365 days.
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
    lists: createSchema({
      User,
      Product,
      ProductImage,
    }),
    db: {
      adapter: "prisma_postgresql",
      url: databaseURL,
    },
    ui: {
      isAccessAllowed: ({ session }) => Boolean(session?.data),
    },
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    session: withItemData(statelessSessions(sessionConfig), { User: "name" }),
  })
);
