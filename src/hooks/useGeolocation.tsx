import { useEffect, useRef, useState } from "react";

type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};

type PermissionState = "granted" | "denied" | "prompt" | "";

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });

  const [permission, setPermission] = useState<PermissionState>("");
  const [error, setError] = useState("");

  const watchIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("API de Geolocalização não disponível");
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const onError = (err: GeolocationPositionError) => {
      console.error("Erro ao obter localização:", err.message);
      setError("Ops! Falha ao obter a posição geográfica");
    };

    const startWatch = () => {
      if (watchIdRef.current !== null) return;

      watchIdRef.current = navigator.geolocation.watchPosition(
        onSuccess,
        onError
      );
    };

    const stopWatch = () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
    };

    const handlePermissionChange = (status: PermissionStatus) => {
      setPermission(status.state);

      if (status.state === "denied") {
        setError("Permissão de localização negada");
        stopWatch();
        return;
      }

      startWatch();
    };

    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((status) => {
          handlePermissionChange(status);
          status.onchange = () => handlePermissionChange(status);
        })
        .catch(() => {
          startWatch();
        });
    } else {
      startWatch();
    }

    return () => {
      stopWatch();
    };
  }, []);

  return { coordinates, permission, error };
};

export default useGeolocation;
