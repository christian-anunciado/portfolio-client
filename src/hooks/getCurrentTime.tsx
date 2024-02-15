import { useEffect, useState } from "react";
import { DateTime } from "luxon";

function getCurrentTime() {
  const [phTime, setPhTime] = useState<string>(
    DateTime.local()
      .setZone("UTC+8")
      .toLocaleString(DateTime.TIME_WITH_SECONDS),
  );

  useEffect(() => {
    // Function to update PH time
    const updatePhTime = () => {
      const phTime = DateTime.local()
        .setZone("UTC+8")
        .toLocaleString(DateTime.TIME_WITH_SECONDS);

      setPhTime(phTime);
    };

    // Initial call to set the time
    updatePhTime();

    // Update time every minute
    const interval = setInterval(updatePhTime, 1000); // 60000 milliseconds = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return { phTime };
}

export default getCurrentTime;
