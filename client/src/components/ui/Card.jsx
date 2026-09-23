export default function Card({ image, imageAlt = '', children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {image && <img src={image} alt={imageAlt} className="card-image" />}
      <div className="card-body">{children}</div>
    </div>
  );
}
