"use client";

export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-brown-700 uppercase tracking-wide">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-brown-700 hover:text-brown-900 underline"
        aria-label="Share on X"
      >
        X
      </a>
      <a
        href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-brown-700 hover:text-brown-900 underline"
        aria-label="Share on Reddit"
      >
        Reddit
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="text-sm text-brown-700 hover:text-brown-900 underline cursor-pointer"
        aria-label="Copy link"
      >
        Copy link
      </button>
    </div>
  );
}
