import { useState, useEffect } from "react";

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

export const usePosition = (watch = false, userSettings = {}) => {
  const { enableHighAccuracy, timeout, maximumAge } = {
    ...defaultSettings,
    ...userSettings,
  };

  const [position, setPosition] = useState<
    (GeolocationCoordinates & { timestamp: number }) | {}
  >({});
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  const onChange = ({
    coords,
    timestamp,
  }: {
    coords: GeolocationCoordinates;
    timestamp: number;
  }) => {
    setLoading(false);
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      speed: coords.speed,
      heading: coords.heading,
      timestamp,
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setLoading(false);
    setError(error.message);
  };

  useEffect(() => {
    const settings = { enableHighAccuracy, timeout, maximumAge };
    if (!navigator || !navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    setLoading(true);

    if (watch) {
      const watcher = navigator.geolocation.watchPosition(
        onChange,
        onError,
        settings
      );
      return () => navigator.geolocation.clearWatch(watcher);
    }

    navigator.geolocation.getCurrentPosition(onChange, onError, settings);
  }, [enableHighAccuracy, timeout, maximumAge, watch]);

  return { ...position, error, loading };
};
