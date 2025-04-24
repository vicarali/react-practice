import { CountrySelector } from "../../components/CountrySelector/CountrySelector.js";
import HolidaysListing from "../../components/HolidaysListing/HolidaysListing.js";
import { ChangeEvent, Suspense, useState } from "react";

export function HomePage() {
  const [country, setCountry] = useState<string>("NL");

  function handleCountryChange(event: ChangeEvent<HTMLSelectElement>) {
    setCountry(event.target.value);
  }

  return (
    <Suspense fallback={<p>Loadingsssssssssss</p>}>
      <CountrySelector handleCountryChange={handleCountryChange} />
      <HolidaysListing country={country} />
    </Suspense>
  );
}
