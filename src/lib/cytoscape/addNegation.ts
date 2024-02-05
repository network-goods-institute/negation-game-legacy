import { Cast } from "@/types/Cast";
import { Core, NodeSingular } from "cytoscape";

export const addNegation = (
	cytoscape: Core,
	negationCast: Omit<Cast, "text">,
	negatingPoint: NodeSingular,
	negatedNode: NodeSingular,
) => {
	const type = negatedNode.hasClass("point") ? "counterpoint" : "objection";
	const elements = cytoscape.add([
		{
			group: "nodes",

			data: {
				id: negationCast.hash,
				hash: negationCast.hash,
				fname: negationCast.fname,
				likes: negationCast.likes,
			},
			classes: ["negation", type],
		},
		{
			group: "edges",
			data: {
				id: `negation-${negationCast.hash}`,
				hash: negationCast.hash,
				fname: negationCast.fname,
				source: negatingPoint.id(),
				target: negatedNode.id(),
			},
			classes: ["negation", type],
		},
		{
			group: "edges",
			data: {
				id: `to-source-${negationCast.hash}`,
				source: negationCast.hash,
				target: negatingPoint.id(),
				aux: true,
			},
			classes: "aux",
		},
		{
			group: "edges",
			data: {
				id: `to-target-${negationCast.hash}`,
				source: negationCast.hash,
				target: negatedNode.id(),
				aux: true,
			},
			classes: "aux",
		},
	]);

	return elements.getElementById(negationCast.hash);
};
