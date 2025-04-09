import heroImg from '../assets/10.jpg';

export default function Hero() {
  return (
    <div
      className="text-white text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,128,128,0.4), rgba(0,0,255,0.4)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        borderBottom: '5px solid #00bfa6',
      }}
    >
      <div>
        <h1 className="display-4 fw-bold">Biroul Notarial Roșu Elisabeta</h1>
        <p className="lead">Servicii notariale moderne în inima Bucureștiului</p>
      </div>
    </div>
  );
}
