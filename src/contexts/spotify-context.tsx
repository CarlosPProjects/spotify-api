'use client'

import { getCurrentUserTopArtists, getCurrentUserTopTracks } from '@/actions/spotify';
import { useSession } from "next-auth/react"
import { createContext, useState, useEffect } from 'react';
import { getUserAccessToken } from '@/actions/auth';
import { ITopTracks } from '@/types/spotify/top-tracks';
import { ITopArtists } from '@/types/spotify/top-artists';
import { dumbData } from '@/data/dumbdata';

interface SpotifyContext {
  datos: ITopTracks | ITopArtists;
  setDatos: React.Dispatch<React.SetStateAction<ITopTracks | ITopArtists>>;
  filterType: 'tracks' | 'artists';
  setFilterType: React.Dispatch<React.SetStateAction<'tracks' | 'artists'>>;
  loading: boolean;
}

export const SpotifyContext = createContext<SpotifyContext>({
  datos: dumbData,
  setDatos: () => { },
  filterType: 'tracks',
  setFilterType: () => { },
  loading: false,
});

export const SpotifyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [datos, setDatos] = useState<ITopTracks | ITopArtists>(dumbData);
  const [filterType, setFilterType] = useState<'tracks' | 'artists'>('tracks');
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession()

  useEffect(() => {
    const fetchDatos = async () => {
      if (session) {
        try {
          setLoading(true);
          const accessToken = await getUserAccessToken();
          if (!accessToken) {
            console.log('No hay token de acceso');
            return;
          }
          try {
            let data;
            if (filterType === 'tracks') {
              data = await getCurrentUserTopTracks(accessToken);
            } else {
              data = await getCurrentUserTopArtists(accessToken);
            }
            setDatos(data);
          } catch (error) {
            console.error('Error al obtener datos:', error);
          }
        } catch (error) {
          console.error('Error al obtener datos:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDatos();
  }, [session, filterType]);

  return (
    <SpotifyContext.Provider value={{ datos, setDatos, filterType, setFilterType, loading }}>
      {children}
    </SpotifyContext.Provider>
  );
};