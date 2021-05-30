const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});

export function formatMoney(cents: number = 0): string {
  const dollars = cents / 100;
  return formatter.format(dollars);
}
