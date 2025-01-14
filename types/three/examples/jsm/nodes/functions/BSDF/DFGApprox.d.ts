import { ShaderNode } from '../../shadernode/ShaderNode.js';
import Node from '../../core/Node.js';

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
declare const DFGApprox: ShaderNode<{ roughness: Node }>;

export default DFGApprox;
