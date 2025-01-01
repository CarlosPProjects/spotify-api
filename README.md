![image](https://github.com/user-attachments/assets/eac0027f-b0d9-43a2-956f-8fc620d39b76)

# Proyecto: Visualización de Música en Spotify

## Introducción
Hoy quiero compartir un proyecto personal que me ha permitido mejorar mis habilidades técnicas mientras combino dos de mis pasiones: la programación y la música.

## ✨ ¿Qué hace esta aplicación?
Permite a los usuarios visualizar sus canciones y artistas más escuchados en períodos personalizados:
- Últimas 4 semanas
- Últimos 6 meses
- Todo el tiempo

Una vez autenticado con Spotify, puedes filtrar entre "Top Tracks" y "Top Artists" y explorar tus datos musicales presentados en un carousel. Cada tarjeta incluye:

- **Tracks**: Título y artista.
- **Artists**: Nombre del artista y género musical.

## 💻 Tecnologías utilizadas
Esta aplicación está desarrollada con:
- **Next.js** para una experiencia rápida y dinámica.
- **TypeScript** para tipado seguro y mantenibilidad.
- **TailwindCSS** y **shadcn/ui** para un diseño intuitivo y atractivo.
- **Auth.js** para la autenticación segura con Spotify.

## 🛠 Retos y aprendizajes técnicos
Este proyecto me ayudó a profundizar en el uso de hooks avanzados como `useCallback`, `useMemo` y `useContext`, asegurando un mejor rendimiento y evitando renderizados innecesarios. También aprendí a gestionar correctamente los *scopes* requeridos por la API de Spotify para cada petición.

## 🎨 Diseño inspirado
Este proyecto fue inspirado en una aplicación para macOS que sincroniza vinilos con Spotify y un video que vi en redes sociales.

## 🔧 Instalación y uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/spotify-visualization.git
   ```
2. Instala las dependencias:
   ```bash
   npm install --force
   ```
3. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```
4. Autentícate con tu cuenta de Spotify y explora tus datos musicales.

## Hooks destacados

### useCallback
#### Qué es
`useCallback` es un hook de React que memoiza una función para evitar que se recree en cada renderizado, salvo que sus dependencias cambien.

#### Cómo funciona
1. **Primer renderizado:** Crea y guarda la función.
2. **Renderizados posteriores:**
   - Si las dependencias no cambian, devuelve la misma instancia de la función.
   - Si alguna dependencia cambia, crea una nueva función.

#### Ventajas
- Reduce renderizados innecesarios en componentes hijos.
- Mejora el rendimiento al evitar la recreación de funciones costosas.

#### Ejemplo
```tsx
const fetchDatos = useCallback(async () => {
  if (status !== 'authenticated') return;

  try {
    setLoading(true);
    const accessToken = await getUserAccessToken();
    const data = filterType === 'tracks'
      ? await getCurrentUserTopTracks(accessToken)
      : await getCurrentUserTopArtists(accessToken);

    if (data && 'items' in data) {
      setDatos(data);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  } finally {
    setLoading(false);
  }
}, [filterType, status]);
```

### useMemo
#### Qué es
`useMemo` memoiza el resultado de una computación para evitar recalcularlo innecesariamente, salvo que las dependencias cambien.

#### Cómo funciona
1. **Primer renderizado:** Calcula y guarda el valor.
2. **Renderizados posteriores:**
   - Si las dependencias no cambian, devuelve el mismo valor memoizado.
   - Si alguna dependencia cambia, recalcula el valor.

#### Ventajas
- Evita la creación de nuevos objetos en cada renderizado.
- Optimiza componentes que dependen de valores complejos.

#### Ejemplo
```tsx
const contextValue = useMemo(() => ({
  datos,
  setDatos,
  filterType,
  setFilterType,
  loading
}), [datos, filterType, loading]);
```

## Ejemplo completo del código
```tsx
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
      const data = filterType === 'tracks'
        ? await getCurrentUserTopTracks(accessToken)
        : await getCurrentUserTopArtists(accessToken);

      if (data && 'items' in data) {
        setDatos(data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
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
```

## Beneficios de rendimiento
1. `useCallback` minimiza la recreación de la función `fetchDatos`.
2. `useMemo` optimiza el valor del contexto para evitar renderizados innecesarios.
3. Ambos hooks contribuyen a mejorar la eficiencia del componente.

## Cuándo utilizarlos
- Usa `useCallback` para funciones que se pasan como props a componentes hijos.
- Usa `useMemo` para computaciones complejas o valores referenciados en dependencias de otros hooks.
- No abuses de ellos: úncamente cuando notes problemas de rendimiento.

## Contribuciones
Las contribuciones son bienvenidas. Si tienes sugerencias o encuentras errores, por favor abre un *issue* o envía un *pull request*.

---
