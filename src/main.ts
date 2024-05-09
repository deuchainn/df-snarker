const snarkjs = require("snarkjs");

import {
  SnarkJSProofAndSignals,
  MoveSnarkInput,
  moveSnarkWasmPath,
  moveSnarkZkeyPath,
  BiomebaseSnarkInput,
  biomebaseSnarkWasmPath,
  biomebaseSnarkZkeyPath,
  RevealSnarkInput,
  revealSnarkWasmPath,
  revealSnarkZkeyPath,
} from "@dfares/snarks";

export async function getMoveArgs(
  input: MoveSnarkInput,
): Promise<SnarkJSProofAndSignals> {
  try {
    return await snarkjs.groth16.fullProve(
      input,
      moveSnarkWasmPath,
      moveSnarkZkeyPath
    );
  } catch (e) {
    throw e;
  }
}

export async function getFindArtifactArgs(
  x: number,
  y: number,
  PLANETHASH_KEY: number,
  BIOMEBASE_KEY: number,
  SCALE: number,
  xMirror: number,
  yMirror: number
): Promise<SnarkJSProofAndSignals> {
  try {
    const start = Date.now();
    const input: BiomebaseSnarkInput = {
      x: x.toString(),
      y: y.toString(),
      PLANETHASH_KEY: PLANETHASH_KEY.toString(),
      BIOMEBASE_KEY: BIOMEBASE_KEY.toString(),
      SCALE: SCALE.toString(),
      xMirror: xMirror.toString(),
      yMirror: yMirror.toString(),
    };

    return await snarkjs.groth16.fullProve(
      input,
      biomebaseSnarkWasmPath,
      biomebaseSnarkZkeyPath
    );
  } catch (e) {
    throw e;
  }
}

export async function getRevealArgs(
  x: number,
  y: number,
  PLANETHASH_KEY: number,
  SPACETYPE_KEY: number,
  SCALE: number,
  xMirror: number,
  yMirror: number
): Promise<SnarkJSProofAndSignals> {
  try {
    const input: RevealSnarkInput = {
      x: x.toString(),
      y: y.toString(),
      PLANETHASH_KEY: PLANETHASH_KEY.toString(),
      SPACETYPE_KEY: SPACETYPE_KEY.toString(),
      SCALE: SCALE.toString(),
      xMirror: xMirror.toString(),
      yMirror: yMirror.toString(),
    };

    return snarkjs.groth16.fullProve(
      input,
      revealSnarkWasmPath,
      revealSnarkZkeyPath
    );
  } catch (e) {
    throw e;
  }
}
