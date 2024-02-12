
export default function Button({ text, bgColor, hoverColor, className, ...props }) {
  // Definir las clases base para el botón
  const baseClasses = `text-white font-bold py-2 px-4 rounded ${className}`;
  
  // Combinar las clases base con las clases de color específicas
  const buttonClasses = `${bgColor} ${hoverColor ? `hover:${hoverColor}` : ''} ${baseClasses}`;

  return (
      <button
        className={buttonClasses}
        {...props} // Pasar cualquier otro prop al botón
      >
        {text}
      </button>
  );
}
