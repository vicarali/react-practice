import { components } from "../../../schemaTypes";

export async function countriesLoader(): Promise<{
  countries: components["schemas"]["CountryResponse"][];
  defaultCountryHolidays: object[];
}> {
  const response = await fetch("https://openholidaysapi.org/Countries");
  const data = await response.json();
  const defaultCountryHolidays = await getCountryHolidays("NL");

  return { countries: data, defaultCountryHolidays };
}

export async function getCountryHolidays(countryCode: string) {
  const currentYear = new Date().getFullYear();
  const response = await fetch(
    `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryCode}&languageIsoCode=EN&validFrom=${currentYear}-01-01&validTo=${currentYear}-12-31`,
  );
  return await response.json();
}
