const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7dd3042fc62da04d9dd74059013d6df1',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;