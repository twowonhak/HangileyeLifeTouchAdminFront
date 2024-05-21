import {memo} from "react";

export default memo(function NextYearSelectOption() {

      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = currentYear; year <= currentYear + 2; year++) {
        years.push(year);
      }

      return (
          <>
            {years.map((year) => (
                <option key={year} value={year}>{year}</option>
            ))}
          </>
      );
    }
)
