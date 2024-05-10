import { useMemo } from "react";

const Property1New = ({
  new1,
  property1NewBorder,
  property1NewBackgroundColor,
  property1NewBackground,
  newColor,
}) => {
  const property1NewStyle = useMemo(() => {
    return {
      border: property1NewBorder,
      backgroundColor: property1NewBackgroundColor,
      background: property1NewBackground,
    };
  }, [property1NewBorder, property1NewBackgroundColor, property1NewBackground]);

  const newStyle = useMemo(() => {
    return {
      color: newColor,
    };
  }, [newColor]);

  return (
    <div
      className="rounded bg-neon-green flex flex-row items-center justify-center p-2 text-left text-mini text-neon-green-inner font-bold"
      style={property1NewStyle}
    >
      <b className="relative tracking-[-0.02em]" style={newStyle}>
        {new1}
      </b>
    </div>
  );
};

export default Property1New;
