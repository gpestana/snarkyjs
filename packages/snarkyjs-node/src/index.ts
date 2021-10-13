export * from './snarky';
export * from './lib/signature';
export * from './lib/circuit_value';
export * from './lib/merkle_proof';

import * as Ex00 from "./ex00_preimage";
import * as Ex000 from "./examples/ex00_preimage";
import { shutdown } from './snarky';

if (typeof window === 'undefined') {
	console.log("shutdown()!!");
  shutdown();
}

[Ex00, Ex000].forEach((x, i) => {
	console.log(`testing exercise ${i}..`);
	console.log(x);

	//x.test();

	console.log(i + " done!");
});
