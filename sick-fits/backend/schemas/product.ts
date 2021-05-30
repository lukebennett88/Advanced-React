import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import slugify from "@sindresorhus/slugify";

export const Product = list({
  // TODO:
  // access:
  fields: {
    name: text({ isRequired: true }),
    slug: text({
      isRequired: true,
      isUnique: true,
      label: "Slug (unique identifier of the product)",
      hooks: {
        beforeChange: async ({ originalInput, resolvedData }) => {
          const slug = slugify(originalInput.slug);
          // eslint-disable-next-line no-param-reassign
          resolvedData.slug = slug;
        },
      },
    }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    image: relationship({
      ref: "ProductImage.product",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),
    status: select({
      options: [
        { label: "Draft", value: "DRAFT" },
        { label: "Available", value: "AVAILABLE" },
        { label: "Unavailable", value: "UNAVAILABLE" },
      ],
      defaultValue: "DRAFT",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
    }),
    price: integer(),
  },
});
