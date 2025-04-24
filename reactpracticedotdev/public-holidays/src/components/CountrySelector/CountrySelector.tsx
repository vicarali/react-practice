import { useLoaderData } from "react-router";
import { components } from "../../../schemaTypes";
import style from "./CountrySelector.module.css";
import { ChangeEventHandler } from "react";

export function CountrySelector({
  handleCountryChange,
}: {
  handleCountryChange: ChangeEventHandler;
}) {
  const { countries } = useLoaderData();

  return (
    <select
      defaultValue="NL"
      className={style.countrySelector}
      onChange={handleCountryChange}
    >
      {countries.map((country: components["schemas"]["CountryResponse"]) => (
        <option key={country.isoCode} value={country.isoCode}>
          {country.name[0].text}
        </option>
      ))}
    </select>
  );
}
