'use client'

import { getCurrentUserTopArtists, getCurrentUserTopTracks } from '@/actions/spotify';
import { useSession } from "next-auth/react"
import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { getUserAccessToken, logout } from '@/actions/auth';
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
  const { status } = useSession();

  const fetchDatos = useCallback(async () => {
    if (status !== 'authenticated') return;

    try {
      setLoading(true);
      const accessToken = await getUserAccessToken();
      if (!accessToken) {
        throw new Error('Access token is undefined');
      }

      try {
        const data = filterType === 'tracks'
          ? await getCurrentUserTopTracks(accessToken, 'short_term')
          : await getCurrentUserTopArtists(accessToken, 'short_term');

        if (data && 'items' in data) {
          setDatos(data);
        } else {
          console.error('Invalid data structure', data);
          setDatos(dumbData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        await logout();
      }
    } catch (error) {
      console.error('Access token error:', error);
    } finally {
      setLoading(false);
    }
  }, [filterType, status]);

  useEffect(() => {
    fetchDatos();
  }, [fetchDatos]);

  const contextValue = useMemo(() => ({
    datos,
    setDatos,
    filterType,
    setFilterType,
    loading
  }), [datos, filterType, loading]);


  return (
    <SpotifyContext.Provider value={contextValue}>
      {children}
    </SpotifyContext.Provider>
  );
};