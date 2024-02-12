
import Button from '../Button/Button';

export default function MenuResponsive() {
  return (
    <Button 
      text="Haz clic en mí"
      bgColor="bg-primary-4"
      hoverColor="bg-primary-1"
      onClick={() => console.log('Botón clickeado')}
    />
  );
}

