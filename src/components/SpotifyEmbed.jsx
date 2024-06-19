// src/components/SpotifyEmbed.jsx
import React from 'react';

const SpotifyEmbed = ({ src, width, height }) => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Player"
    ></iframe>
  );
};

export default SpotifyEmbed;
