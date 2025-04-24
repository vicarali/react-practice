import { useLoaderData } from "react-router";
import styles from "./HolidaysListing.module.css";
import { useEffect, useRef, useState } from "react";
import { getCountryHolidays } from "../../pages/HomePage/loader.ts";
import { components } from "../../../schemaTypes";

export default function HolidaysListing({ country }: { country: string }) {
  const { defaultCountryHolidays } = useLoaderData();
  const defaultCountryLoaded = useRef(false);
  const [countryHolidays, setCountryHolidays] = useState(
    defaultCountryHolidays,
  );

  useEffect(() => {
    (async () => {
      if (defaultCountryLoaded.current) {
        const countryHolidays = await getCountryHolidays(country);
        setCountryHolidays(countryHolidays);
      } else {
        defaultCountryLoaded.current = true;
      }
    })();
  }, [country]);

  return (
    <ul>
      {countryHolidays.map(
        (holiday: components["schemas"]["HolidayResponse"]) => {
          const date = new Date(holiday.startDate);
          const month = new Intl.DateTimeFormat("en-US", {
            month: "long",
          }).format(date);

          return (
            <li key={holiday.id} className={styles.holidaysListingItem}>
              <span>{`${month} ${date.getDate()}`}</span> -{" "}
              <span className={styles.holidayName}>{holiday.name[0].text}</span>
            </li>
          );
        },
      )}
    </ul>
  );
}
