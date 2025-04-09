import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

export default function ImageGallery() {
    return (
        <div className="container my-5">
            <h2 className="text-center text-primary mb-4">Galerie</h2>
            <div className="row g-3">
                {[img2, img3, img4, img5].map((img, i) => (
                    <div className="col-md-3" key={i}>
                        <img src={img} alt={`Office ${i}`} className="img-fluid shadow" />
                    </div>
                ))}
            </div>
        </div>
    );
}
