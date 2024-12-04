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
      if (!session) return;

      try {
        setLoading(true);
        const accessToken = await getUserAccessToken();
        if (!accessToken) {
          console.error('No access token available');
          setDatos(dumbData);
          return;
        }

        const data = filterType === 'tracks'
          ? await getCurrentUserTopTracks(accessToken)
          : await getCurrentUserTopArtists(accessToken);

        if (data && 'items' in data) {
          setDatos(data);
        } else {
          console.error('Invalid data structure', data);
          setDatos(dumbData);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setDatos(dumbData);
      } finally {
        setLoading(false);
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