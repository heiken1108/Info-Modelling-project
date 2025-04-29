const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
  });
  
  const getImageByFileName = (fileName: string): string | undefined => {
    const match = Object.entries(images).find(([path]) =>
      path.endsWith(`/${fileName}`)
    );
    return match ? (match[1] as string) : undefined;
  };
  
  export default getImageByFileName;
  