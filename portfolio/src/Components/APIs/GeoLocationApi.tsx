import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../Styles/GeoLocationApi.module.css";

interface GeoLocationDataType {
  country_capital: string;
  country_name: string;
  ip: string;
  org: string;
}
function GeoLocationApi() {
  const [geoLocationData, setGeoLocationData] =
    useState<GeoLocationDataType | null>(null);

  useEffect(() => {
    const axiosGeoLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setGeoLocationData(response.data);
      } catch (error) {
        console.error("Error fetching geo data:", error);
      }
    };
    axiosGeoLocation();
  }, []);
  return (
    <>
      <div className={styles.geoLocationParentContainer}>
        <div className={styles.locationContainer}>
          <p>{geoLocationData?.country_capital}</p>,
          <p>{geoLocationData?.country_name}</p>
        </div>

        <p className={styles.ipInfo}>{geoLocationData?.ip}</p>
        <p>{geoLocationData?.org}</p>
      </div>
    </>
  );
}

export default GeoLocationApi;
