"use client";
import React, { useState, useRef } from "react";
import ResearchCard from "./ResearchCard";
import ResearchTag from "./ResearchTag";
import { motion, useInView } from "framer-motion";

const researchData = [
  // {
  //   id: 1,
  //   title: "HIGH ENTROPY NITRIDE",
  //   description:
  //     "The Laine group has multiple years of experience in the synthesis of polymer precursors to oxides, nitrides and carbides recently developing simple low temperature synthetic routes to metal nitrides that offers the potential to make large numbers of single source...",
  //   image: "/imgs/research/1.png",
  //   tag: ["All", "Current"],
  //   linkUrl:
  //     "https://mse.engin.umich.edu/people/talsdad/projects/high-entropy-nitride",
  // },
   {
    id: 1,
    title: "DOUBLE-DECKER PHENYL-SILSESQUIOXANE COPOLYMERS",
    description:
      "Our objective in this work is to bridge DD silsesquioxane cage with conjugated aromatics. In recent papers, we demonstrated that stilbene derivatives of simple DD compounds exhibit properties commensurate with the existence of a LUMO in the cage center, equivalent to LUMOs found in [RStilbeneSiO1.5]8,10,12, [RStilbeneSiO1.5]7[O1.5SiMe/nPr], [RStil-beneSiO1.5]7[O0.5SiMe3]3, [RStilbeneSiO1.5]8[O0.5SiMe3]4 and [RStilbeneSiO1.5]8[OSiMe2]2. We explore here that co-polymerization of vinyl(Me)SiO(PhSiO1.5)8OSi(Me)vinyl (vinylDDvinyl) with X-Ar-X leads to polymers with photophysics behavior indicating semiconducting properties.",
    image: "/imgs/research/1.png",
    tag: ["All", "Current"],
    linkUrl:
      "https://mse.engin.umich.edu/people/talsdad/projects/advanced-silesquioxane-research-program",
  },
];

const Research = () => {
  const [tag, setTag] = useState("Current");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredResearch = researchData.filter((research) =>
    research.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-default-500" id="research">
      <div className="bg-default-100 py-unit-lg">
        <h2 className="text-center text-4xl font-bold text-secondary-500 mt-unit-2xl">
          My Research
        </h2>
        <div className="flex flex-row justify-center items-center gap-2 py-6">
          <ResearchTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ResearchTag
            onClick={handleTagChange}
            name="Current"
            isSelected={tag === "Current"}
          />
          <ResearchTag
            onClick={handleTagChange}
            name="Past"
            isSelected={tag === "Past"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mx-unit-xl mb-unit-xl">
          {filteredResearch.map((research, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
                imgUrl={research.image}
                tags={research.tag}
                linkUrl={research.linkUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Research;
