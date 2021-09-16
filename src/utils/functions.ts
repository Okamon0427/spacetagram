export const calculatePagination = (currentPage: number, imagesPerPage: number, images: any) => {
  const currentLastImage = currentPage * imagesPerPage;
  const currentFirstImage = currentLastImage - imagesPerPage;
  const currentImages = images?.slice(currentFirstImage, currentLastImage);
  const totalPages = Math.ceil(images?.length / imagesPerPage);
  return [currentImages, totalPages];
}
