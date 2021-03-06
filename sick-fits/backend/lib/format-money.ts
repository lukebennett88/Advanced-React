const formatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});

export default function formatMoney(cents: number): string {
  const dollars = cents / 100;
  return formatter.format(dollars);
}
