export default function BrowserPreview({ url, title }: { url: string; title: string }) {
  const host = new URL(url).host;
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{host}</span>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Buka ↗
        </a>
      </div>
      <div className="browser-view">
        <iframe src={url} title={`Pratinjau ${title}`} loading="lazy" tabIndex={-1} />
        <a
          className="browser-overlay"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Buka ${title}`}
        />
      </div>
    </div>
  );
}