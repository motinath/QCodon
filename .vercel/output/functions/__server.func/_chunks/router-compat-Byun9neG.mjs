import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region dist/server/assets/router-compat-Byun9neG.js
var import_jsx_runtime = require_jsx_runtime();
function Link$1({ to, ...rest }) {
	const [path, hash] = to.split("#");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: path || "/",
		hash,
		...rest
	});
}
//#endregion
export { Link$1 as t };
