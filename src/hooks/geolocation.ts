import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { GeolocationOptions, GeolocationState } from '../interfaces/geolocation';

export function useGeolocation(options: GeolocationOptions = {}): GeolocationState {

  const [state, setState] = useState<GeolocationState>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });


  const onEvent = useCallback(
    ({ coords, timestamp }: GeolocationPosition) => {

      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        error: null,
      });
    },
    []
  );

  const onError = useCallback(
    (error: any) => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error,
      }));
    },
    []
  );

  useEffect(() => {

    // get first position to ask user permission
    navigator.geolocation.getCurrentPosition(
      onEvent,
      onError,
      options
    );

    // keep watching position changes
    const watchId = navigator.geolocation.watchPosition(
      onEvent,
      onError,
      options
    );

    // cleanup watcher when done
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };

  }, []);

  return state;
};
