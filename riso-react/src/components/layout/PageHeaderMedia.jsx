export default function PageHeaderMedia({
  backgroundImage,
  backgroundPosition = 'center 30%',
  backgroundFit = 'cover',
}) {
  return (
    <div className="page-header-media" aria-hidden="true">
      <img
        src={backgroundImage}
        alt=""
        className="page-header-bg"
        style={{ objectPosition: backgroundPosition, objectFit: backgroundFit }}
        loading="eager"
        decoding="async"
      />
      <div className="page-header-overlay" />
    </div>
  );
}
