import { useEffect, useState } from "react";

type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const onSuccess = (position: GeolocationPosition) => {
      setCoordinates({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    };

    const onError = (error: GeolocationPositionError) => {
      console.error("Erro ao obter localização:", error.message);
    };

    const watchId = navigator.geolocation.watchPosition(
      onSuccess,
      onError
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { coordinates };
};

export default useGeolocation;
