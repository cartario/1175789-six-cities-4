export const adapter = (hotels) => {
  return hotels.map((hotel) => ({
    id: hotel.id,
    city: hotel.city,
    description: hotel.description,
    images: hotel.images,
    goods: hotel.goods,
    host: {
      id: hotel.host.id,
      name: hotel.host.name,
      isPro: hotel.host.is_pro,
      avatarUrl: hotel.host.avatar_url,
    },
    isFavorite: hotel.is_favorite,
    isPremium: hotel.is_premium,
    location: hotel.location,
    maxAdults: hotel.max_adults,
    previewImage: hotel.preview_image,
    price: hotel.price,
    rating: hotel.rating,
    title: hotel.title,
    type: hotel.type,
    bedrooms: hotel.bedrooms,
  }));
};
