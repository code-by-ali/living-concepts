export default function CommonImage({ 
  src, 
  alt = '', 
  className = '', 
  width,
  height,
  priority = false,
  ...props 
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}