import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i + 1}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
