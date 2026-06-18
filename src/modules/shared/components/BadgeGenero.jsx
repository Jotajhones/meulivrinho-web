import { guiaDeEstiloStatus } from "../utils/guiaDeEstiloGenero";

const BadgeGenero = ({ genero }) => {
  const estilo = guiaDeEstiloStatus[genero];
  const Icon = estilo.icon;

  return (
    <div
      className={`${estilo.backgroundColor} flex gap-2 items-center py-2 px-3 rounded-2xl w-fit`}
    >
      <Icon className={`${estilo.textColor} w-6 h-6`} />

      <p className={`${estilo.textColor} text-base`}>{genero}</p>
    </div>
  );
};

export default BadgeGenero;
