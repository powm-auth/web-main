import React, { useRef, useEffect } from 'react';
import styles from './Features.module.css';

export const FeatureWorld: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Dot config
    const globeRadius = 80;
    const dotsCount = 400;
    const dots: { lat: number; lon: number }[] = [];

    // Initialize dots (Fibonacci sphere distribution)
    const phi = Math.PI * (3 - Math.sqrt(5)); 
    for (let i = 0; i < dotsCount; i++) {
      const y = 1 - (i / (dotsCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // Radius at y
      const theta = phi * i; // Golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      
      // Convert to spherical coordinates for easier rotation
      const lat = Math.acos(y);
      const lon = Math.atan2(z, x);
      dots.push({ lat, lon });
    }

    const render = () => {
      time += 0.005; // Rotation speed
      
      // Clear canvas (transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      dots.forEach((dot) => {
        // Rotate longitude
        let lon = dot.lon + time;
        
        // Convert back to 3D Cartesian
        // x = r * sin(lat) * cos(lon)
        // y = r * cos(lat)
        // z = r * sin(lat) * sin(lon)
        const sinLat = Math.sin(dot.lat);
        const cosLat = Math.cos(dot.lat);
        const sinLon = Math.sin(lon);
        const cosLon = Math.cos(lon);

        const x3d = globeRadius * sinLat * cosLon;
        const y3d = globeRadius * cosLat;
        const z3d = globeRadius * sinLat * sinLon;

        // Perspective projection
        // Only draw front-facing dots (z > 0)
        if (z3d > -20) {
            const scale = 250 / (250 - z3d); // Simple perspective
            const x2d = centerX + x3d * scale;
            const y2d = centerY + y3d * scale;
            
            // Calculate brightness/alpha
            // 1. Z-depth fade (further away = dimmer)
            let alpha = (z3d + globeRadius) / (2 * globeRadius); 
            
            // 2. Shadow logic (Bottom Left darkening)
            // x < 0 is left, y > 0 is bottom
            // We want points in bottom-left to be darker
            // Normalize positions (-1 to 1) relative to globe center
            const normX = x3d / globeRadius;
            const normY = y3d / globeRadius;
            
            // Shadow gradient: stronger at bottom-left (-x, +y)
            // Simple linear gradient approximation
            const shadowIntensity = 0.6;
            if (normX < 0.2 && normY > -0.2) {
                 alpha *= 1 - (shadowIntensity * (Math.abs(normX) * Math.abs(normY)));
            }

            // Draw dot
            ctx.fillStyle = `rgba(160, 107, 255, ${Math.max(0.1, alpha)})`; // Electric Purple
            ctx.beginPath();
            ctx.arc(x2d, y2d, 1.5 * scale, 0, Math.PI * 2);
            ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={styles.featureCard} style={{ 
      gridColumn: 'span 1', 
      gridRow: 'span 2', // Tall card in the middle
      background: 'linear-gradient(180deg, rgba(30, 28, 40, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)',
      height: '100%' // Ensure it fills the grid cell
    }}>
      <div className={styles.contentWrapper} style={{ flex: 0, paddingTop: '1.5rem' }}>
        <h3 className={styles.title}>Global Scale</h3>
        <p className={styles.caption}>Works everywhere.</p>
      </div>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <canvas 
            ref={canvasRef} 
            width={300} 
            height={300} 
            style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
          />
          {/* Subtle bottom-left shadow overlay for extra depth */}
          <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '60%',
              height: '60%',
              background: 'radial-gradient(circle at bottom left, rgba(0,0,0,0.8), transparent 70%)',
              pointerEvents: 'none'
          }} />
      </div>
    </div>
  );
};
