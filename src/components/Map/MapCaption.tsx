import { UVHelper } from '../../helpers';

const list = new Array(17).fill(0);

export function MapCaption() {
  const colors = list.map((_, index) => UVHelper.getCaptionColor(index));
  return (
    <>
      <div className="w-full flex items-center justify-between border border-white/10 rounded-sm overflow-hidden">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-[10px] h-[20px]"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="w-full text-gray-400 text-xs flex flex-row items-center justify-between">
        <p>Low</p>
        <p>Extremely High</p>
      </div>
    </>
  );
}
