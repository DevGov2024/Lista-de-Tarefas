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

  const [permission,setPermission ] = useState('')

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
     
   const handlePermissionChange = (status: PermissionStatus) => {
  setPermission(status.state);

  if (status.state === 'denied') {
    alert('Posicionamento bloqueado');
  }

  if (status.state === 'granted' || status.state === 'prompt') {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
};


    const watchId = navigator.geolocation.watchPosition(
      onSuccess,
      onError
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);

      navigator.permissions.query({ name: 'geolocation' })

      .then((status) => {
         handlePermissionChange(status);
      })
    };
  }, []);

  return { coordinates, permission};
};

export default useGeolocation;
