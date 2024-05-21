import {memo} from "react";

export default memo(function YearSelectOption() {

      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = currentYear; year >= 1900; year--) {
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
