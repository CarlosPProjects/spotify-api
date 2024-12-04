'use client'

import { getCurrentUserTopTracks } from '@/actions/spotify';
import { useSession } from "next-auth/react"
import { ITopItems } from '@/types/spotify/top-items';
import { createContext, useState, useEffect } from 'react';
import { getUserAccessToken } from '@/actions/auth';

interface SpotifyContext {
  datos: ITopItems | null;
  setDatos: React.Dispatch<React.SetStateAction<ITopItems | null>>;
};

export const SpotifyContext = createContext<SpotifyContext | null>(null);

export const SpotifyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [datos, setDatos] = useState<ITopItems | null>(null);
  const { data: session } = useSession()

  useEffect(() => {
    const fetchDatos = async () => {
      if (session) {
        const accessToken = await getUserAccessToken();
        if (!accessToken) {
          console.log('No hay token de acceso');
          return;
        }
        try {
          const data = await getCurrentUserTopTracks(accessToken);
          setDatos(data);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      }
    };

    fetchDatos();
  }, [session]);

  return (
    <SpotifyContext.Provider value={{ datos, setDatos }}>
      {children}
    </SpotifyContext.Provider>
  );
};