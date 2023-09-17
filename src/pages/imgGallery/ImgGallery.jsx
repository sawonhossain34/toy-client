import './ImgGallery.css';

const ImgGallery = () => {
    const images = [
        'https://i.ibb.co/NKTqC54/gallery-1.jpg',
        'https://i.ibb.co/Tb9vjLS/gallery-2.jpg',
        'https://i.ibb.co/sv6hCWZ/gallery-3.jpg',
        'https://i.ibb.co/ZMr4ZFC/gallery-4.jpg',
        'https://i.ibb.co/hCBHDZJ/gallery-5.jpg',
        'https://i.ibb.co/h9BSHxM/gallery-6.jpg',
        'https://i.ibb.co/z7N7HqD/gallery-7.jpg',
        'https://i.ibb.co/jwqR36r/gallery-8.jpg',
        'https://i.ibb.co/TPcNMqq/gallery-9.jpg',
        'https://i.ibb.co/y80hGyv/gallery-10.jpg'
    ];
    return (
        <div className='my-12'>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <img key={index} 
                    src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ImgGallery;