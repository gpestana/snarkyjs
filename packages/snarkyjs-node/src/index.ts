export * from './snarky';
export * from './lib/signature';
export * from './lib/circuit_value';
export * from './lib/merkle_proof';

import * as Ex00 from "./ex00_preimage";

import { shutdown } from './snarky';
if (typeof window === 'undefined') {
  shutdown();
}

[Ex00].forEach((x, i) => {
	console.log(`testing exercise ${i}`);
	//x.test()
	console.log(i);
	console.log(x);
});
